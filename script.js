let currentLang = 'en';
let currentSection = 'journey';

function getBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.toLowerCase().startsWith('de')) {
        return 'de';
    }
    return 'en';
}

function getLanguageFromURL() {
    const url = new URL(window.location.href);
    const langParam = url.searchParams.get('lang');

    if (langParam === 'en' || langParam === 'de') {
        return langParam;
    }

    return getBrowserLanguage();
}

function getCurrentSection() {
    const hash = window.location.hash.substring(1);
    const validSections = ['journey', 'skills', 'languages'];
    return validSections.includes(hash) ? hash : 'journey';
}

document.addEventListener('DOMContentLoaded', () => {
    if (history.scrollRestoration) {
        history.scrollRestoration = 'manual';
    }

    currentLang = getLanguageFromURL();

    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        if (btn.dataset.lang === currentLang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    initLanguageToggle();
    initContactButton();
    initMobileMenu();

    currentSection = getCurrentSection();

    const url = new URL(window.location);
    if (!url.searchParams.has('lang')) {
        url.searchParams.set('lang', currentLang);
    }
    if (!url.hash) {
        url.hash = 'journey';
    }
    window.history.replaceState({}, '', url);

    initNavigation();
    updateNavigationText();
    updateUILabels();

    renderSection(currentSection);
    window.scrollTo(0, 0);
});


window.addEventListener('hashchange', () => {
    currentSection = getCurrentSection();

    const url = new URL(window.location);
    if (url.searchParams.get('lang') !== currentLang) {
        url.searchParams.set('lang', currentLang);
        window.history.replaceState({}, '', url);
    }

    renderSection(currentSection);
    updateActiveNavLink();
    updateNavigationText();
});


window.addEventListener('popstate', () => {
    const newLang = getLanguageFromURL();
    if (newLang !== currentLang) {
        currentLang = newLang;

        // Update active button
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(btn => {
            if (btn.dataset.lang === currentLang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    currentSection = getCurrentSection();
    renderSection(currentSection);
    updateActiveNavLink();
    updateNavigationText();
});


function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.dataset.section;

            // Update URL and navigate
            updateURLWithLanguage(section);

            // Close mobile menu if it exists
            if (typeof window.closeMobileMenu === 'function') {
                window.closeMobileMenu();
            }
        });
    });

    // Also handle site title link
    const siteTitleLink = document.querySelector('.site-title-link');
    if (siteTitleLink) {
        siteTitleLink.addEventListener('click', (e) => {
            e.preventDefault();
            updateURLWithLanguage('journey');
        });
    }

    updateActiveNavLink();
}


function updateURLWithLanguage(section) {
    const url = new URL(window.location);
    url.searchParams.set('lang', currentLang);
    url.hash = section;
    window.history.pushState({}, '', url);

    // Manually trigger section change since we're using pushState
    currentSection = section;
    renderSection(currentSection);
    updateActiveNavLink();
    updateNavigationText(); // Keep hrefs in sync
}


function updateActiveNavLink() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.dataset.section === currentSection) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}


function updateNavigationText() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const section = link.dataset.section;
        if (content[currentLang].navigation && content[currentLang].navigation[section]) {
            link.textContent = content[currentLang].navigation[section];
        }
        // Update href to include language parameter
        link.href = `?lang=${currentLang}#${section}`;
    });

    // Update site title link
    const siteTitleLink = document.querySelector('.site-title-link');
    if (siteTitleLink) {
        siteTitleLink.href = `?lang=${currentLang}#journey`;
    }

    // Update UI labels
    updateUILabels();
}


function updateUILabels() {
    // Update hamburger button
    const hamburgerBtn = document.getElementById('hamburger-btn');
    if (hamburgerBtn) {
        hamburgerBtn.setAttribute('aria-label', content[currentLang].labels.toggleMenu);
    }

    // Update contact button
    const contactBtn = document.getElementById('contact-btn');
    if (contactBtn) {
        contactBtn.setAttribute('title', content[currentLang].labels.contactMe);
    }

    // Update mobile menu close button if it exists
    const closeBtn = document.querySelector('.mobile-menu-close');
    if (closeBtn) {
        closeBtn.setAttribute('aria-label', content[currentLang].labels.closeMenu);
    }
}


function getEmail() {
   
    const codes = [106, 97, 97, 97, 109, 101, 115, 46, 108, 102, 64, 103, 109, 97, 105, 108, 46, 99, 111, 109];
    return String.fromCharCode(...codes);
}


function openEmailClient() {
    window.location.href = 'mailto:' + getEmail();
}


function initContactButton() {
    const contactBtn = document.getElementById('contact-btn');
    if (contactBtn) {
        contactBtn.addEventListener('click', openEmailClient);
    }
}


function initLanguageToggle() {
    const langButtons = document.querySelectorAll('.lang-btn');

    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            if (lang !== currentLang) {
                currentLang = lang;

                // Update active button
                langButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Update URL with new language
                updateURLWithLanguage(currentSection);

                // Update navigation menu text
                updateNavigationText();
            }
        });
    });
}


function initMobileMenu() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenuWrapper = document.querySelector('.mobile-menu-wrapper');

    if (!hamburgerBtn || !mobileMenuWrapper) return;

    // Create close button
    const closeBtn = document.createElement('button');
    closeBtn.className = 'mobile-menu-close';
    closeBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
    `;
    closeBtn.setAttribute('aria-label', content[currentLang].labels.closeMenu);
    mobileMenuWrapper.insertBefore(closeBtn, mobileMenuWrapper.firstChild);

    // Close menu function
    function closeMenu() {
        hamburgerBtn.classList.remove('active');
        mobileMenuWrapper.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Toggle menu function
    function toggleMenu() {
        const isActive = hamburgerBtn.classList.contains('active');

        if (isActive) {
            closeMenu();
        } else {
            hamburgerBtn.classList.add('active');
            mobileMenuWrapper.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    // Expose close function globally for navigation links
    window.closeMobileMenu = closeMenu;

    // Event listeners
    hamburgerBtn.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', closeMenu);
}


function renderSection(section) {
    const mainContent = document.getElementById('main-content');
    if (!mainContent) return;

    // Clear current content
    mainContent.innerHTML = '';

    // Update HTML lang attribute
    document.documentElement.lang = currentLang;

    // Update page title
    const sectionTitle = content[currentLang].navigation[section] || content[currentLang].navigation.journey;
    document.title = `James Lafa | ${sectionTitle}`;

    // Render appropriate section
    switch (section) {
        case 'journey':
            renderJourneySection(mainContent);
            break;
        case 'skills':
            renderSkillsSection(mainContent);
            break;
        case 'languages':
            renderLanguagesSection(mainContent);
            break;
        default:
            renderJourneySection(mainContent);
    }
}


function renderJourneySection(container) {
    const section = document.createElement('section');
    section.className = 'timeline-section';

    // Add print button inside the section
    const printButton = document.createElement('button');
    printButton.className = 'print-btn';
    printButton.title = content[currentLang].labels.printResume;
    printButton.onclick = () => window.print();
    printButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 6 2 18 2 18 9"></polyline>
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
            <rect x="6" y="14" width="12" height="8"></rect>
        </svg>
    `;
    section.appendChild(printButton);

    const timelineContainer = document.createElement('div');
    timelineContainer.className = 'timeline-container';

    const timelineLine = document.createElement('div');
    timelineLine.className = 'timeline-line';

    const timelineEntries = document.createElement('div');
    timelineEntries.id = 'timeline-entries';
    timelineEntries.className = 'timeline-entries';

    timelineContainer.appendChild(timelineLine);
    timelineContainer.appendChild(timelineEntries);
    section.appendChild(timelineContainer);
    container.appendChild(section);

    renderTimeline();
}


function renderSkillsSection(container) {
    const section = document.createElement('section');
    section.className = 'content-section skills-section';

    const title = document.createElement('h2');
    title.className = 'section-title';
    title.textContent = content[currentLang].skills?.title || 'Skills';

    section.appendChild(title);

    if (content[currentLang].skills?.description) {
        const description = document.createElement('p');
        description.className = 'section-description';
        description.textContent = content[currentLang].skills.description;
        section.appendChild(description);
    }

    // Create categories container
    if (content[currentLang].skills?.categories) {
        const categoriesContainer = document.createElement('div');
        categoriesContainer.className = 'skills-categories';

        content[currentLang].skills.categories.forEach((category, index) => {
            const categoryCard = document.createElement('div');
            categoryCard.className = 'skill-category-card';

            // Category name
            const categoryName = document.createElement('h3');
            categoryName.className = 'skill-category-name';
            categoryName.textContent = category.name;
            categoryCard.appendChild(categoryName);

            // Check if this category has subcategories
            if (category.hasSubcategories && category.subcategories) {
                // Render subcategories as cards with lists
                const subcategoriesGrid = document.createElement('div');
                subcategoriesGrid.className = 'subcategories-grid';

                category.subcategories.forEach(subcategory => {
                    const subcategoryCard = document.createElement('div');
                    subcategoryCard.className = 'subcategory-card';

                    const subcategoryName = document.createElement('h4');
                    subcategoryName.className = 'subcategory-card-name';
                    subcategoryName.textContent = subcategory.name;
                    subcategoryCard.appendChild(subcategoryName);

                    const itemsList = document.createElement('ul');
                    itemsList.className = 'subcategory-items-list';

                    subcategory.items.forEach(item => {
                        const listItem = document.createElement('li');
                        listItem.className = 'subcategory-item';
                        listItem.textContent = item;
                        itemsList.appendChild(listItem);
                    });

                    subcategoryCard.appendChild(itemsList);
                    subcategoriesGrid.appendChild(subcategoryCard);
                });

                categoryCard.appendChild(subcategoriesGrid);
            } else {
                // Regular category without subcategories
                const itemsGrid = document.createElement('div');
                itemsGrid.className = 'skill-items-grid';

                category.items.forEach(item => {
                    const gridItem = document.createElement('div');
                    gridItem.className = 'skill-grid-item';

                    if (typeof item === 'string') {
                        // Simple string item
                        gridItem.textContent = item;
                    } else {
                        // Object with name and note
                        const itemName = document.createElement('div');
                        itemName.className = 'skill-grid-item-name';
                        itemName.textContent = item.name;
                        gridItem.appendChild(itemName);

                        if (item.note) {
                            const itemNote = document.createElement('div');
                            itemNote.className = 'skill-grid-item-note';
                            itemNote.textContent = item.note;
                            gridItem.appendChild(itemNote);
                        }
                    }

                    itemsGrid.appendChild(gridItem);
                });

                categoryCard.appendChild(itemsGrid);
            }

            categoriesContainer.appendChild(categoryCard);
        });

        section.appendChild(categoriesContainer);
    }

    container.appendChild(section);
}


function renderLanguagesSection(container) {
    const section = document.createElement('section');
    section.className = 'content-section languages-section';

    const title = document.createElement('h2');
    title.className = 'section-title';
    title.textContent = content[currentLang].languages?.title || 'Languages';

    section.appendChild(title);

    if (content[currentLang].languages?.description) {
        const description = document.createElement('p');
        description.className = 'section-description';
        description.textContent = content[currentLang].languages.description;
        section.appendChild(description);
    }

    // Create language cards container
    if (content[currentLang].languages?.items) {
        const cardsContainer = document.createElement('div');
        cardsContainer.className = 'language-cards';

        content[currentLang].languages.items.forEach(lang => {
            const card = document.createElement('div');
            card.className = 'language-card';

            // Flag
            const flag = document.createElement('div');
            flag.className = 'language-flag';
            flag.textContent = lang.flag;

            // Language name
            const name = document.createElement('h3');
            name.className = 'language-name';
            name.textContent = lang.name;

            // Level
            const level = document.createElement('div');
            level.className = 'language-level';
            level.textContent = lang.level;

            // Progress bar
            const progressContainer = document.createElement('div');
            progressContainer.className = 'language-progress-container';

            const progressBar = document.createElement('div');
            progressBar.className = 'language-progress-bar';
            progressBar.style.width = `${lang.proficiency}%`;

            progressContainer.appendChild(progressBar);

            // Note
            if (lang.note) {
                const note = document.createElement('div');
                note.className = 'language-note';
                note.textContent = lang.note;
                card.appendChild(flag);
                card.appendChild(name);
                card.appendChild(level);
                card.appendChild(progressContainer);
                card.appendChild(note);
            } else {
                card.appendChild(flag);
                card.appendChild(name);
                card.appendChild(level);
                card.appendChild(progressContainer);
            }

            cardsContainer.appendChild(card);
        });

        section.appendChild(cardsContainer);
    }

    container.appendChild(section);
}


function renderTimeline() {
    const timelineContainer = document.getElementById('timeline-entries');
    if (!timelineContainer) return;

    const timelineData = content[currentLang].timeline;

    // Clear existing entries
    timelineContainer.innerHTML = '';

    // Create timeline entries
    timelineData.forEach((entry, index) => {
        const entryElement = createTimelineEntry(entry, index);
        timelineContainer.appendChild(entryElement);
    });

    // Re-initialize scroll animations for new elements
    initScrollAnimations();
}


function createTimelineEntry(entry, index) {
    const entryDiv = document.createElement('div');

    // Check if this is a group entry
    if (entry.type === 'group') {
        return createGroupEntry(entry, index);
    }

    // Check if this is a wind farm entry
    if (entry.type === 'wind-farm') {
        return createWindFarmEntry(entry, index);
    }

    // Regular event entry (with optional category)
    const category = entry.category || 'work';
    entryDiv.className = `timeline-entry timeline-entry-${category}`;

    // Add printable attribute
    if (entry.printable === false) {
        entryDiv.dataset.printable = 'false';
    }

    // Year badge (positioned on opposite side)
    const year = document.createElement('span');
    year.className = `timeline-year timeline-year-${category}`;
    year.textContent = entry.year;

    // Create timeline dot
    const dot = document.createElement('div');
    dot.className = `timeline-dot timeline-dot-${category}`;

    // Create timeline card
    const card = document.createElement('div');
    card.className = `timeline-card timeline-card-${category}`;

    // Title with optional logo
    const titleContainer = document.createElement('div');
    titleContainer.className = 'timeline-title-container';

    // If URL exists, wrap title and logo in a link
    if (entry.url) {
        const link = document.createElement('a');
        link.href = entry.url;
        link.className = 'timeline-link';
        link.target = '_blank';
        link.rel = 'noopener noreferrer';

        const title = document.createElement('h3');
        title.className = 'timeline-title';
        title.textContent = entry.title;
        link.appendChild(title);

        if (entry.image) {
            const logo = document.createElement('img');
            logo.className = 'timeline-logo';
            logo.src = entry.image;
            logo.alt = `${entry.title} logo`;
            logo.loading = 'lazy';
            link.appendChild(logo);
        }

        titleContainer.appendChild(link);
    } else {
        const title = document.createElement('h3');
        title.className = 'timeline-title';
        title.textContent = entry.title;
        titleContainer.appendChild(title);

        if (entry.image) {
            const logo = document.createElement('img');
            logo.className = 'timeline-logo';
            logo.src = entry.image;
            logo.alt = `${entry.title} logo`;
            logo.loading = 'lazy';
            titleContainer.appendChild(logo);
        }
    }

    // Subtitle
    const subtitle = document.createElement('div');
    subtitle.className = 'timeline-subtitle';
    subtitle.textContent = entry.subtitle;

    // Description
    const description = document.createElement('p');
    description.className = 'timeline-description';
    description.textContent = entry.description;

    // Location
    const location = document.createElement('div');
    location.className = 'timeline-location';
    location.textContent = entry.location;

    // Assemble card
    card.appendChild(titleContainer);
    card.appendChild(subtitle);
    card.appendChild(description);
    card.appendChild(location);

    // Assemble entry
    entryDiv.appendChild(year);
    entryDiv.appendChild(dot);
    entryDiv.appendChild(card);

    return entryDiv;
}


function createWindFarmEntry(entry, index) {
    const category = entry.category || 'work';
    const entryDiv = document.createElement('div');
    entryDiv.className = `timeline-entry timeline-entry-wind-farm timeline-entry-${category}`;

    // Add printable attribute
    if (entry.printable === false) {
        entryDiv.dataset.printable = 'false';
    }

    // Create wrapper for year + button
    const yearButtonWrapper = document.createElement('div');
    yearButtonWrapper.className = 'wind-farm-year-wrapper';

    // Year badge (now inside wrapper)
    const year = document.createElement('span');
    year.className = `timeline-year timeline-year-${category}`;
    year.textContent = entry.year;

    // Contact button
    const contactButton = document.createElement('button');
    contactButton.className = 'wind-farm-contact-btn';
    contactButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <path d="m2 7 10 6 10-6"/>
        </svg>
        <span>${content[currentLang].labels.contactButton}</span>
    `;
    contactButton.addEventListener('click', openEmailClient);

    // Assemble wrapper
    yearButtonWrapper.appendChild(year);
    yearButtonWrapper.appendChild(contactButton);

    // Create timeline dot
    const dot = document.createElement('div');
    dot.className = `timeline-dot timeline-dot-${category}`;

    // Create wind farm container
    const windFarmContainer = document.createElement('div');
    windFarmContainer.className = 'wind-farm-container';

    // Create clouds layer (behind turbines)
    const cloudsLayer = document.createElement('div');
    cloudsLayer.className = 'wind-farm-clouds';

    for (let i = 0; i < 3; i++) {
        const cloud = createCloud(i);
        cloudsLayer.appendChild(cloud);
    }
    windFarmContainer.appendChild(cloudsLayer);

    // Create turbines layer
    const turbinesLayer = document.createElement('div');
    turbinesLayer.className = 'wind-farm-turbines';

    // Create 3 wind turbines
    for (let i = 0; i < 3; i++) {
        const turbine = createWindTurbine(i);
        turbinesLayer.appendChild(turbine);
    }
    windFarmContainer.appendChild(turbinesLayer);

    // Create wheat field at the bottom
    const wheatField = document.createElement('div');
    wheatField.className = 'wind-farm-wheat';

    // Create multiple wheat stalks
    for (let i = 0; i < 35; i++) {
        const stalk = createWheatStalk(i);
        wheatField.appendChild(stalk);
    }

    windFarmContainer.appendChild(wheatField);

    // Assemble entry
    entryDiv.appendChild(yearButtonWrapper);
    entryDiv.appendChild(dot);
    entryDiv.appendChild(windFarmContainer);

    return entryDiv;
}


function createWindTurbine(index) {
    const turbineWrapper = document.createElement('div');
    turbineWrapper.className = `wind-turbine wind-turbine-${index + 1}`;

    // Create SVG
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 100 200');
    svg.setAttribute('class', 'wind-turbine-svg');

    // Tower
    const tower = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    tower.setAttribute('x', '47');
    tower.setAttribute('y', '60');
    tower.setAttribute('width', '6');
    tower.setAttribute('height', '140');
    tower.setAttribute('fill', '#94a3b8');
    svg.appendChild(tower);

    // Nacelle (hub)
    const nacelle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    nacelle.setAttribute('cx', '50');
    nacelle.setAttribute('cy', '60');
    nacelle.setAttribute('r', '8');
    nacelle.setAttribute('fill', '#64748b');
    svg.appendChild(nacelle);

    // Blades group (rotating)
    const bladesGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    bladesGroup.setAttribute('class', 'wind-turbine-blades');
    bladesGroup.setAttribute('transform-origin', '50 60');

    // Create 3 blades
    for (let i = 0; i < 3; i++) {
        const blade = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
        const angle = i * 120;
        blade.setAttribute('cx', '50');
        blade.setAttribute('cy', '35');
        blade.setAttribute('rx', '3');
        blade.setAttribute('ry', '25');
        blade.setAttribute('fill', '#e2e8f0');
        blade.setAttribute('transform', `rotate(${angle} 50 60)`);
        bladesGroup.appendChild(blade);
    }

    svg.appendChild(bladesGroup);
    turbineWrapper.appendChild(svg);

    return turbineWrapper;
}


function createCloud(index) {
    const cloudWrapper = document.createElement('div');
    cloudWrapper.className = `wind-farm-cloud wind-farm-cloud-${index + 1}`;

    // Create SVG cloud
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 100 50');
    svg.setAttribute('class', 'cloud-svg');

    // Cloud shape made of circles
    const cloud = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    cloud.setAttribute('opacity', '0.4');
    cloud.setAttribute('fill', '#e2e8f0');

    // Main cloud body circles
    const circles = [
        { cx: 30, cy: 30, r: 15 },
        { cx: 50, cy: 25, r: 18 },
        { cx: 70, cy: 30, r: 15 },
        { cx: 40, cy: 35, r: 12 },
        { cx: 60, cy: 35, r: 12 },
    ];

    circles.forEach(c => {
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', c.cx);
        circle.setAttribute('cy', c.cy);
        circle.setAttribute('r', c.r);
        cloud.appendChild(circle);
    });

    svg.appendChild(cloud);
    cloudWrapper.appendChild(svg);

    return cloudWrapper;
}


function createWheatStalk(index) {
    const stalkWrapper = document.createElement('div');
    stalkWrapper.className = `wheat-stalk wheat-stalk-${(index % 3) + 1}`;

    // Random-ish positioning using index, keeping away from edges to avoid clipping
    const rawPosition = (index * 3) % 100;
    const leftPosition = 3 + (rawPosition * 0.94); // Map to 3-97% range
    stalkWrapper.style.left = `${leftPosition}%`;

    // Vary delay for more natural movement
    stalkWrapper.style.animationDelay = `${(index * 0.15) % 2.5}s`;

    // Create SVG stalk
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 12 45');
    svg.setAttribute('class', 'wheat-stalk-svg');

    // Stalk stem
    const stem = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    const variation = index % 3;
    let stemPath;

    if (variation === 0) {
        stemPath = 'M6,45 L6,12 Q6,8 6,5';
    } else if (variation === 1) {
        stemPath = 'M6,45 L6,12 Q7,8 6,5';
    } else {
        stemPath = 'M6,45 L6,12 Q5,8 6,5';
    }

    stem.setAttribute('d', stemPath);
    stem.setAttribute('stroke', 'currentColor');
    stem.setAttribute('stroke-width', '1.5');
    stem.setAttribute('fill', 'none');
    svg.appendChild(stem);

    // Wheat head (multiple grains)
    for (let i = 0; i < 5; i++) {
        const grain = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
        grain.setAttribute('cx', 6 + (i % 2 === 0 ? -2 : 2));
        grain.setAttribute('cy', 5 + i * 2);
        grain.setAttribute('rx', 2);
        grain.setAttribute('ry', 3);
        grain.setAttribute('fill', 'currentColor');
        svg.appendChild(grain);
    }

    stalkWrapper.appendChild(svg);
    return stalkWrapper;
}


function createGroupEntry(entry, index) {
    const category = entry.category || 'work';
    const entryDiv = document.createElement('div');
    entryDiv.className = `timeline-entry timeline-group-entry timeline-entry-${category}`;
    entryDiv.dataset.expanded = entry.collapsed === false ? 'true' : 'false';

    // Add printable attribute
    if (entry.printable === false) {
        entryDiv.dataset.printable = 'false';
    }

    // Year badge (positioned on opposite side)
    const year = document.createElement('span');
    year.className = `timeline-year timeline-year-${category}`;
    year.textContent = entry.year;

    // Create timeline dot
    const dot = document.createElement('div');
    dot.className = `timeline-dot timeline-dot-group timeline-dot-${category}`;

    // Create group header card
    const headerCard = document.createElement('div');
    headerCard.className = `timeline-card timeline-group-header timeline-card-${category}`;

    // Title with optional logo
    const titleContainer = document.createElement('div');
    titleContainer.className = 'timeline-title-container';

    // If URL exists, wrap title and logo in a link
    if (entry.url) {
        const link = document.createElement('a');
        link.href = entry.url;
        link.className = 'timeline-link';
        link.target = '_blank';
        link.rel = 'noopener noreferrer';

        const title = document.createElement('h3');
        title.className = 'timeline-title';
        title.textContent = entry.title;
        link.appendChild(title);

        if (entry.image) {
            const logo = document.createElement('img');
            logo.className = 'timeline-logo';
            logo.src = entry.image;
            logo.alt = `${entry.title} logo`;
            logo.loading = 'lazy';
            link.appendChild(logo);
        }

        titleContainer.appendChild(link);
    } else {
        const title = document.createElement('h3');
        title.className = 'timeline-title';
        title.textContent = entry.title;
        titleContainer.appendChild(title);

        if (entry.image) {
            const logo = document.createElement('img');
            logo.className = 'timeline-logo';
            logo.src = entry.image;
            logo.alt = `${entry.title} logo`;
            logo.loading = 'lazy';
            titleContainer.appendChild(logo);
        }
    }

    // Summary
    const summary = document.createElement('div');
    summary.className = 'timeline-group-summary';
    summary.textContent = entry.summary;

    // Combined expand button with item count
    const expandButton = document.createElement('button');
    expandButton.className = 'timeline-group-expand-btn';
    const positionLabel = entry.items.length > 1
        ? content[currentLang].labels.positions
        : content[currentLang].labels.position;
    expandButton.textContent = `${entry.items.length} ${positionLabel} • ${content[currentLang].labels.seeDetails}`;

    // Assemble header card
    headerCard.appendChild(titleContainer);
    headerCard.appendChild(summary);
    headerCard.appendChild(expandButton);

    // Create expandable items container
    const itemsContainer = document.createElement('div');
    itemsContainer.className = 'timeline-group-items';

    // Create individual items
    entry.items.forEach((item, itemIndex) => {
        const itemCard = createGroupItemCard(item, itemIndex, category);
        itemsContainer.appendChild(itemCard);
    });

    // Create a wrapper for header and items to keep them together
    const contentWrapper = document.createElement('div');
    contentWrapper.className = 'timeline-group-content';
    contentWrapper.appendChild(headerCard);
    contentWrapper.appendChild(itemsContainer);

    // Assemble entry
    entryDiv.appendChild(year);
    entryDiv.appendChild(dot);
    entryDiv.appendChild(contentWrapper);

    // Add click handler to toggle expansion
    headerCard.addEventListener('click', () => {
        const isExpanded = entryDiv.dataset.expanded === 'true';
        entryDiv.dataset.expanded = isExpanded ? 'false' : 'true';

        // Update button text
        const positionLabel = entry.items.length > 1
            ? content[currentLang].labels.positions
            : content[currentLang].labels.position;
        const actionLabel = isExpanded
            ? content[currentLang].labels.seeDetails
            : content[currentLang].labels.hideDetails;
        expandButton.textContent = `${entry.items.length} ${positionLabel} • ${actionLabel}`;
    });

    return entryDiv;
}


function createGroupItemCard(item, index, category = 'work') {
    const card = document.createElement('div');
    card.className = `timeline-card timeline-group-item-card timeline-card-${category}`;

    // Title with optional logo
    const titleContainer = document.createElement('div');
    titleContainer.className = 'timeline-title-container';

    // If URL exists, wrap title and logo in a link
    if (item.url) {
        const link = document.createElement('a');
        link.href = item.url;
        link.className = 'timeline-link';
        link.target = '_blank';
        link.rel = 'noopener noreferrer';

        const title = document.createElement('h4');
        title.className = 'timeline-title timeline-title-small';
        title.textContent = item.title;
        link.appendChild(title);

        if (item.image) {
            const logo = document.createElement('img');
            logo.className = 'timeline-logo timeline-logo-small';
            logo.src = item.image;
            logo.alt = `${item.title} logo`;
            logo.loading = 'lazy';
            link.appendChild(logo);
        }

        titleContainer.appendChild(link);
    } else {
        const title = document.createElement('h4');
        title.className = 'timeline-title timeline-title-small';
        title.textContent = item.title;
        titleContainer.appendChild(title);

        if (item.image) {
            const logo = document.createElement('img');
            logo.className = 'timeline-logo timeline-logo-small';
            logo.src = item.image;
            logo.alt = `${item.title} logo`;
            logo.loading = 'lazy';
            titleContainer.appendChild(logo);
        }
    }

    // Subtitle
    const subtitle = document.createElement('div');
    subtitle.className = 'timeline-subtitle';
    subtitle.textContent = item.subtitle;

    // Location
    const location = document.createElement('div');
    location.className = 'timeline-location';
    location.textContent = item.location;

    // Assemble card
    card.appendChild(titleContainer);
    card.appendChild(subtitle);
    if (item.description) {
        const description = document.createElement('p');
        description.className = 'timeline-description';
        description.textContent = item.description;
        card.appendChild(description);
    }
    card.appendChild(location);

    return card;
}


function initWindFarmAnimations() {
    const windFarmEntries = document.querySelectorAll('.timeline-entry-wind-farm');

    windFarmEntries.forEach(entry => {
        // Speed multiplier for hover (2x faster)
        const SPEED_MULTIPLIER = 2;

        // Get all animated elements
        const animatedElements = [
            entry.querySelector('.wind-turbine-1 .wind-turbine-blades'),
            entry.querySelector('.wind-turbine-2 .wind-turbine-blades'),
            entry.querySelector('.wind-turbine-3 .wind-turbine-blades'),
            entry.querySelector('.wind-farm-cloud-1'),
            entry.querySelector('.wind-farm-cloud-2'),
            entry.querySelector('.wind-farm-cloud-3')
        ].filter(el => el !== null);

        // Function to change playback rate
        function setPlaybackRate(rate) {
            animatedElements.forEach(element => {
                try {
                    const animations = element.getAnimations();
                    animations.forEach(animation => {
                        animation.playbackRate = rate;
                    });
                } catch (e) {
                    // Silently fail if animations API not available
                }
            });
        }

        entry.addEventListener('mouseenter', () => {
            setPlaybackRate(SPEED_MULTIPLIER);
        });

        entry.addEventListener('mouseleave', () => {
            setPlaybackRate(1);
        });
    });
}


function initScrollAnimations() {
    const entries = document.querySelectorAll('.timeline-entry');

    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    entries.forEach(entry => {
        observer.observe(entry);
    });

    // Initialize wind farm animations after entries are visible
    initWindFarmAnimations();
}
