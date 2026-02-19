#!/usr/bin/env node

// Pre-renders English content into index.html for SEO.
// JS takes over on load (renderSection clears and re-renders),
// so users see no flash — the static HTML matches what JS produces.
//
// Usage: node build.js

const fs = require('fs');
const path = require('path');

// Load content.js by evaluating it (it defines a global `content` variable)
const contentJs = fs.readFileSync(path.join(__dirname, 'content.js'), 'utf8');
// content.js uses `const content = ...`, so we need to extract it via Function
const content = new Function(contentJs + '\nreturn content;')();

function escapeHtml(text) {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderTimelineEntry(entry) {
  const category = entry.category || 'work';
  const printableAttr = entry.printable === false ? ' data-printable="false"' : '';

  if (entry.type === 'wind-farm') {
    // Skip wind farm animation for static HTML — it's purely decorative
    return '';
  }

  if (entry.type === 'group') {
    return renderGroupEntry(entry);
  }

  const logoHtml = entry.image
    ? `<img class="timeline-logo" src="${escapeHtml(entry.image)}" alt="${escapeHtml(entry.title)} logo" loading="lazy">`
    : '';

  let titleContainerInner;
  if (entry.url) {
    titleContainerInner = `<a href="${escapeHtml(entry.url)}" class="timeline-link" target="_blank" rel="noopener noreferrer"><h2 class="timeline-title">${escapeHtml(entry.title)}</h2>${logoHtml}</a>`;
  } else {
    titleContainerInner = `<h2 class="timeline-title">${escapeHtml(entry.title)}</h2>${logoHtml}`;
  }

  return `<div class="timeline-entry timeline-entry-${category}"${printableAttr}>
      <span class="timeline-year timeline-year-${category}">${escapeHtml(entry.year)}</span>
      <div class="timeline-dot timeline-dot-${category}"></div>
      <div class="timeline-card timeline-card-${category}">
        <div class="timeline-title-container">${titleContainerInner}</div>
        <div class="timeline-subtitle">${escapeHtml(entry.subtitle)}</div>
        <p class="timeline-description">${escapeHtml(entry.description)}</p>
        <div class="timeline-location">${escapeHtml(entry.location)}</div>
      </div>
    </div>`;
}

function renderGroupEntry(entry) {
  const category = entry.category || 'work';
  const printableAttr = entry.printable === false ? ' data-printable="false"' : '';

  const logoHtml = entry.image
    ? `<img class="timeline-logo" src="${escapeHtml(entry.image)}" alt="${escapeHtml(entry.title)} logo" loading="lazy">`
    : '';

  let titleContainerInner;
  if (entry.url) {
    titleContainerInner = `<a href="${escapeHtml(entry.url)}" class="timeline-link" target="_blank" rel="noopener noreferrer"><h2 class="timeline-title">${escapeHtml(entry.title)}</h2>${logoHtml}</a>`;
  } else {
    titleContainerInner = `<h2 class="timeline-title">${escapeHtml(entry.title)}</h2>${logoHtml}`;
  }

  const en = content.en;
  const positionLabel = entry.items.length > 1 ? en.labels.positions : en.labels.position;

  const itemsHtml = entry.items.map(item => {
    const itemLogoHtml = item.image
      ? `<img class="timeline-logo timeline-logo-small" src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title)} logo" loading="lazy">`
      : '';

    let itemTitleInner;
    if (item.url) {
      itemTitleInner = `<a href="${escapeHtml(item.url)}" class="timeline-link" target="_blank" rel="noopener noreferrer"><h3 class="timeline-title timeline-title-small">${escapeHtml(item.title)}</h3>${itemLogoHtml}</a>`;
    } else {
      itemTitleInner = `<h3 class="timeline-title timeline-title-small">${escapeHtml(item.title)}</h3>${itemLogoHtml}`;
    }

    const descHtml = item.description
      ? `<p class="timeline-description">${escapeHtml(item.description)}</p>`
      : '';

    return `<div class="timeline-card timeline-group-item-card timeline-card-${category}">
          <div class="timeline-title-container">${itemTitleInner}</div>
          <div class="timeline-subtitle">${escapeHtml(item.subtitle)}</div>
          ${descHtml}
          <div class="timeline-location">${escapeHtml(item.location)}</div>
        </div>`;
  }).join('\n      ');

  return `<div class="timeline-entry timeline-group-entry timeline-entry-${category}" data-expanded="false"${printableAttr}>
      <span class="timeline-year timeline-year-${category}">${escapeHtml(entry.year)}</span>
      <div class="timeline-dot timeline-dot-group timeline-dot-${category}"></div>
      <div class="timeline-group-content">
        <div class="timeline-card timeline-group-header timeline-card-${category}">
          <div class="timeline-title-container">${titleContainerInner}</div>
          <div class="timeline-group-summary">${escapeHtml(entry.summary)}</div>
          <button class="timeline-group-expand-btn">${entry.items.length} ${positionLabel} • ${en.labels.seeDetails}</button>
        </div>
        <div class="timeline-group-items">
      ${itemsHtml}
        </div>
      </div>
    </div>`;
}

function renderJourneySection() {
  const en = content.en;
  const entriesHtml = en.timeline
    .map(entry => renderTimelineEntry(entry))
    .filter(html => html !== '')
    .join('\n    ');

  return `<section class="timeline-section">
      <button class="print-btn" title="${escapeHtml(en.labels.printResume)}" onclick="window.print()">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 6 2 18 2 18 9"></polyline>
          <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
          <rect x="6" y="14" width="12" height="8"></rect>
        </svg>
      </button>
      <div class="timeline-container">
        <div class="timeline-line"></div>
        <div id="timeline-entries" class="timeline-entries">
    ${entriesHtml}
        </div>
      </div>
    </section>`;
}

// Build
const indexPath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

const mainRegex = /(<main\s[^>]*id="main-content"[^>]*>)([\s\S]*?)(<\/main>)/;
const match = html.match(mainRegex);

if (!match) {
  console.error('Could not find <main id="main-content"> in index.html');
  process.exit(1);
}

const preRendered = renderJourneySection();
const noscriptBlock = `<noscript>
            <div style="padding: 40px; text-align: center; color: #e5e7eb;">
                <h2>JavaScript Required</h2>
                <p>This website requires JavaScript to display content properly. Please enable JavaScript in your browser.</p>
                <p>James Lafa - CTO & Engineering Leader based in Berlin. Co-founded Back (acquired by Personio) and Dentolo (acquired by Zurich).</p>
            </div>
        </noscript>`;

const newMain = `${match[1]}\n        ${noscriptBlock}\n        ${preRendered}\n    ${match[3]}`;
html = html.replace(mainRegex, newMain);

fs.writeFileSync(indexPath, html, 'utf8');
console.log('Pre-rendered English journey section into index.html');
