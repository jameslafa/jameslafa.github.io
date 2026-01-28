// Bilingual content data
const content = {
  en: {
    hero: {
      title: "James Lafa",
      subtitle: "",
    },
    footer: {
      text: "Built with ❤️ and vanilla JavaScript",
    },
    navigation: {
      journey: "Journey",
      skills: "Skills",
      languages: "Languages",
    },
    labels: {
      seeDetails: "See details",
      hideDetails: "Hide details",
      position: "position",
      positions: "positions",
      contactButton: "Let's make it happen!",
      closeMenu: "Close menu",
      printResume: "Print resume",
      toggleMenu: "Toggle menu",
      contactMe: "Contact me",
    },
    skills: {
      title: "Skills",
      description: "",
      categories: [
        {
          name: "Leadership & Management",
          hasSubcategories: true,
          subcategories: [
            {
              name: "People",
              items: [
                "Hiring & Recruitment",
                "Performance Reviews & Promotions",
                "Coaching & Mentoring",
                "Scaling Engineering Teams",
              ],
            },
            {
              name: "Strategy & Execution",
              items: [
                "Technical Strategy & Roadmap Planning",
                "System Architecture Design & Optimisation",
                "Data-Driven Performance & Process Optimisation",
              ],
            },
          ],
        },
        {
          name: "Programming Languages",
          items: [
            "Go",
            "Python",
            "Ruby/Rails",
            "HTML/CSS",
            "JavaScript/TypeScript",
          ],
        },
        {
          name: "Hardware & Electronics",
          items: [
            {
              name: "Electricity Fundamentals",
              note: "Online course",
            },
            {
              name: "Arduino",
              note: "Tinkering home projects",
            },
          ],
        },
        {
          name: "Certifications & Licenses",
          items: [
            {
              name: "PSE2 - Advanced Team First Aid Level 2",
              note: "Red Cross volunteer paramedic for Pompiers de Paris, 2008-2012",
            },
            {
              name: "Emergency Response Vehicle Driver",
              note: "As Red Cross volunteer paramedic for Pompiers de Paris, 2008-2012",
            },
            {
              name: "Driver's License B",
              note: null,
            },
            {
              name: "Motorcycle License A",
              note: null,
            },
            {
              name: "KLEVER Card",
              note: "Lead Climbing Certification",
            },
          ],
        },
      ],
    },
    languages: {
      title: "Languages",
      description: "",
      items: [
        {
          name: "French",
          flag: "🇫🇷",
          level: "Native",
          proficiency: 100,
          note: "Mother tongue",
        },
        {
          name: "English",
          flag: "🇬🇧",
          level: "Fluent",
          proficiency: 95,
          note: "Professional proficiency",
        },
        {
          name: "German",
          flag: "🇩🇪",
          level: "Intermediate",
          proficiency: 45,
          note: "A2/B1 - Actively learning",
        },
        {
          name: "Polish",
          flag: "🇵🇱",
          level: "Beginner",
          proficiency: 25,
          note: "A1/A2",
        },
      ],
    },
    timeline: [
      {
        year: "1982",
        title: "The Beginning",
        subtitle: "Origin story",
        description:
          "Born in 1982 in Lyon, a city known for its history, culture, and exceptional food. Lived there throughout my entire schooling until high school, spending time playing tennis, judo, skateboarding, snowboarding, and on my PlayStation.",
        location: "Lyon, France",
        category: "life",
        printable: false,
      },
      {
        year: "Graduated 2003",
        title: "University of Le Havre",
        subtitle: "DUT Computer Science - Software Engineering",
        description:
          "Computer Science degree focusing on software development and programming fundamentals.",
        location: "Le Havre, France",
        category: "life",
      },
      {
        type: "group",
        year: "2004 - 2010",
        title: "Accenture",
        url: "https://www.accenture.com",
        category: "work",
        summary:
          "Seven years at Accenture in various leadership and technical roles across banking, energy, and entertainment sectors. Progressed from leading document publishing teams to managing quality testing operations, working with J2EE/EJB, SAP/ABAP, and building HR systems for major French corporations.",
        collapsed: true,
        items: [
          {
            year: "2004 - 2007",
            title: "Banque Populaire for Accenture",
            subtitle:
              "J2EE Software Engineer & Team Lead of the document publishing team",
            description:
              "Led the document publishing team responsible for producing all legal documents as part of the credit distribution system rebuild. Managed weekly delivery schedules, deployment quality, and team activities. Developed business components for document generation using J2EE/EJB and SOA webservices.",
            location: "Dijon, France",
            image: "images/company_logos/banque_populaire.svg",
            url: "https://www.banquepopulaire.fr",
          },
          {
            year: "2007 - 2008",
            title: "Electricité De France for Accenture",
            subtitle: "Software Engineering Team Lead",
            description:
              "Led a team of 5 developers to design and build a new Human Resources Portal for EDF serving over 100,000 employees. Managed team scheduling, daily client reporting, and code reviews. Developed the application using J2EE/EJB, SOA webservices, and Struts/SWT.",
            location: "Paris, France",
            image: "images/company_logos/edf.svg",
            url: "https://www.edf.fr",
          },
          {
            year: "2008 - 2009",
            title: "Disneyland Paris for Accenture",
            subtitle: "SAP Software Engineer",
            description:
              "Designed and built HR Access to SAP HR interfaces using ABAP. Worked on parameterisation of Personnel Administration and Organisation Management modules.",
            location: "Paris, France",
            image: "images/company_logos/disney.svg",
            url: "https://www.disneylandparis.com",
          },
          {
            year: "2009 - 2010",
            title: "Gaz De France (now Engie) for Accenture",
            subtitle: "Quality Testing Team Manager",
            description:
              "Managed a quality testing team of 15 members (30% offshore in Mauritius) responsible for testing infrastructure and programmes before production deployment. Managed test campaign schedules, task assignments, and budget monitoring. Served as primary customer contact and led standardisation and optimisation of processes and deliverables.",
            location: "Paris, France",
            image: "images/company_logos/gdf.png",
            url: "https://www.engie.com",
          },
        ],
        image: "images/company_logos/accenture.svg",
        category: "work",
      },
      {
        year: "2008 - 2012",
        title: "Red Cross Volunteer",
        subtitle: "EMR & Emergency Vehicle Driver",
        description:
          "Joined the Red Cross and led a team conducting weekly outreach patrols to check on homeless people in the district and provide care. Later joined the emergency medical team as an EMR (Emergency Medical Responder) and emergency vehicle driver, volunteering every weekend and responding to emergency situations with the team, stationed at Paris fire stations.",
        location: "Paris, France",
        category: "life",
        image: "images/life/redcross.svg",
        url: "https://www.croix-rouge.fr",
      },
      {
        year: "2011 - 2012",
        title: "OWNI",
        category: "work",
        subtitle: "Fullstack Engineer specialised in data journalism",
        description:
          "Built web applications focused on data visualisation for French newspapers with high traffic and visibility, including the reveal of WikiLeaks documents.",
        location: "Paris, France",
        image: "images/company_logos/OWNI.svg",
        url: "https://fr.wikipedia.org/wiki/OWNI",
      },
      {
        year: "2012",
        title: "Moved to Berlin",
        subtitle: "New Chapter",
        description:
          "Moved to Europe's startup capital for new adventures in tech, innovation, and world-class club culture.",
        location: "Berlin, Germany",
        category: "life",
        printable: false,
      },
      {
        year: "2013 - 2014",
        title: "AngryKatze",
        category: "work",
        subtitle: "Solo-Founder & Software Engineer",
        description:
          "Developed web applications for French newspapers specialising in data journalism. Built a large-scale network scanner for a cybersecurity client.",
        location: "Berlin, Germany",
        image: "images/company_logos/angrykatze.jpeg",
      },
      {
        year: "2014 - 2015",
        title: "Minodes",
        subtitle: "CTO",
        description:
          "Joined as CTO and rebuilt the engineering team from scratch. Built a scalable distributed data processing infrastructure using Python microservices and multiple database technologies to analyse retail foot traffic, customer movement patterns, and dwell time. Developed ML models (SVM) for customer geolocation. Company acquired by Telefónica NEXT.",
        location: "Berlin, Germany",
        image: "images/company_logos/minodes.jpg",
        category: "work",
        url: "https://minodes.com",
      },
      {
        year: "2015 - 2017",
        title: "Dentolo",
        url: "https://www.dentolo.de",
        category: "work",
        subtitle: "CTO & Co-founder",
        description:
          "Co-founded Dentolo as CTO and built the complete technical infrastructure from the ground up. Designed and deployed a Ruby on Rails application serving customers, operations team, and dentist network, featuring automated continuous deployment with 1300+ tests, high-availability architecture, and comprehensive security measures. Company acquired by Zurich Insurance in 2019.",
        location: "Berlin, Germany",
        image: "images/company_logos/dentolo.svg",
      },
      {
        type: "group",
        year: "2018",
        title: "Entrepreneurship Programs",
        summary:
          "Two fellowship programs focused on AI and technology entrepreneurship, exploring machine learning, deep learning, and building AI-powered products in Berlin's startup ecosystem.",
        collapsed: true,
        items: [
          {
            year: "2018",
            title: "Hackmind.ai",
            subtitle: "Fellow in entrepreneurship program",
            description:
              "Fellowship program focused on AI, Machine Learning, Blockchain, and Robotics. Developed products using Deep Learning (TensorFlow/Keras), Computer Vision (OpenCV), Deep Reinforcement Learning for game AI, and robotics/IoT projects with Raspberry Pi and Arduino.",
            location: "Berlin, Germany",
            image: "images/company_logos/hackmind.png",
            url: "https://www.crunchbase.com/organization/hackmind",
          },
          {
            year: "2018",
            title: "Entrepreneurs First",
            subtitle: "Fellow in entrepreneurship program",
            description:
              "Fellowship program where I developed an AI-powered communication coach providing instant feedback to sales teams during client calls, addressing limitations of traditional training programs. Left to co-found Back.",
            location: "Berlin, Germany",
            image: "images/company_logos/ef.png",
            url: "https://www.joinef.com",
          },
        ],
        image: "images/company_logos/ef.png",
        category: "work",
      },
      {
        year: "2018 - 2022",
        title: "Back",
        category: "work",
        subtitle: "CTO & Co-founder",
        description:
          "Co-founded Back as CTO, building an employee experience platform that automates conversations, knowledge, and journeys for HR, IT, and Finance teams. Hired the entire engineering team and built the complete infrastructure and software, integrating with workplace messaging apps like Slack/Teams and HR systems. Used by companies like Loom, Statista, and Pleo. Company acquired by Personio in 2022.",
        location: "Berlin, Germany",
        image: "images/company_logos/back.jpeg",
        url: "https://www.crunchbase.com/organization/backhq",
      },
      {
        year: "Since 2022",
        title: "Personio",
        url: "https://www.personio.com",
        subtitle: "Head of Engineering",
        description:
          "Joined as Head of Engineering following Back's acquisition. Led the Automation department with 4 engineering teams, integrating Back's software and developing a workflow automation platform for customer business processes. Later led a Payroll team, rebuilding the architecture and software to deliver a modernised, harmonised payroll solution.",
        location: "Berlin, Germany",
        image: "images/company_logos/personio.jpeg",
        category: "work",
      },
      {
        year: "Ready when you are,",
        type: "wind-farm",
        category: "work",
      },
    ],
  },
  de: {
    hero: {
      title: "James Lafa",
      subtitle: "",
    },
    footer: {
      text: "Erstellt mit ❤️ und Vanilla JavaScript",
    },
    navigation: {
      journey: "Werdegang",
      skills: "Fähigkeiten",
      languages: "Sprachen",
    },
    labels: {
      seeDetails: "Details anzeigen",
      hideDetails: "Details verbergen",
      position: "Position",
      positions: "Positionen",
      contactButton: "Lass es uns angehen!",
      closeMenu: "Menü schließen",
      printResume: "Lebenslauf drucken",
      toggleMenu: "Menü umschalten",
      contactMe: "Kontaktiere mich",
    },
    skills: {
      title: "Fähigkeiten",
      description: "",
      categories: [
        {
          name: "Führung & Management",
          hasSubcategories: true,
          subcategories: [
            {
              name: "Menschen",
              items: [
                "Rekrutierung",
                "Performance Reviews & Beförderungen",
                "Coaching & Mentoring",
                "Skalierung von Engineering-Teams",
              ],
            },
            {
              name: "Strategie & Umsetzung",
              items: [
                "Technische Strategie & Roadmap-Planung",
                "Systemarchitektur Design & Optimierung",
                "Datengetriebene Performance & Prozessoptimierung",
              ],
            },
          ],
        },
        {
          name: "Programmiersprachen",
          items: [
            "Go",
            "Python",
            "Ruby/Rails",
            "HTML/CSS",
            "JavaScript/TypeScript",
          ],
        },
        {
          name: "Hardware & Elektronik",
          items: [
            {
              name: "Grundlagen der Elektrizität",
              note: "Online-Kurs",
            },
            {
              name: "Arduino",
              note: "Bastelprojekte zu Hause",
            },
          ],
        },
        {
          name: "Zertifizierungen & Lizenzen",
          items: [
            {
              name: "PSE2 - Erweiterte Teamfähige Erste Hilfe Stufe 2",
              note: "Ehrenamtlicher Rettungssanitäter des Roten Kreuzes bei Pompiers de Paris, 2008-2012",
            },
            {
              name: "Einsatzfahrzeug-Fahrer",
              note: "Als ehrenamtlicher Rettungssanitäter des Roten Kreuzes bei Pompiers de Paris, 2008-2012",
            },
            {
              name: "Führerschein B",
              note: null,
            },
            {
              name: "Motorradführerschein A",
              note: null,
            },
            {
              name: "KLEVER Card",
              note: "Vorstiegs-Kletterschein",
            },
          ],
        },
      ],
    },
    languages: {
      title: "Sprachen",
      description: "",
      items: [
        {
          name: "Französisch",
          flag: "🇫🇷",
          level: "Muttersprache",
          proficiency: 100,
          note: "Muttersprache",
        },
        {
          name: "Englisch",
          flag: "🇬🇧",
          level: "Fließend",
          proficiency: 95,
          note: "Berufliche Kompetenz",
        },
        {
          name: "Deutsch",
          flag: "🇩🇪",
          level: "Mittelstufe",
          proficiency: 45,
          note: "A2/B1 - Aktiv lernend",
        },
        {
          name: "Polnisch",
          flag: "🇵🇱",
          level: "Anfänger",
          proficiency: 25,
          note: "A1/A2",
        },
      ],
    },
    timeline: [
      {
        year: "1982",
        title: "Der Anfang",
        subtitle: "Ursprungsgeschichte",
        description:
          "Geboren 1982 in Lyon, einer Stadt bekannt für ihre Geschichte, Kultur und außergewöhnliche Gastronomie. Lebte dort während meiner gesamten Schulzeit bis zum Gymnasium und verbrachte meine Zeit mit Tennis, Judo, Skateboarden, Snowboarden und an meiner PlayStation.",
        location: "Lyon, Frankreich",
        category: "life",
        printable: false,
      },
      {
        year: "Abschluss 2003",
        title: "Universität Le Havre",
        subtitle: "DUT Informatik - Software-Engineering, Softwareentwicklung",
        description:
          "Informatik-Studium mit Schwerpunkt auf Softwareentwicklung und Programmiergrundlagen.",
        location: "Le Havre, Frankreich",
        category: "life",
      },
      {
        type: "group",
        year: "2004 - 2010",
        title: "Accenture",
        url: "https://www.accenture.com",
        category: "work",
        summary:
          "Sieben Jahre bei Accenture in verschiedenen Führungs- und technischen Rollen in den Bereichen Banken, Energie und Unterhaltung. Entwicklung von der Leitung von Dokumenten-Publishing-Teams bis zur Verwaltung von Quality-Testing-Operationen, Arbeit mit J2EE/EJB, SAP/ABAP und Aufbau von HR-Systemen für große französische Unternehmen.",
        collapsed: true,
        items: [
          {
            year: "2004 - 2007",
            title: "Banque Populaire für Accenture",
            subtitle:
              "J2EE Software Engineer & Teamleiter des Dokumenten-Publishing-Teams",
            description:
              "Leitete das Dokumenten-Publishing-Team, verantwortlich für die Erstellung aller rechtlichen Dokumente im Rahmen des Neuaufbaus des Kreditvertriebssystems. Verwaltete wöchentliche Lieferpläne, Deployment-Qualität und Teamaktivitäten. Entwicklung von Business-Komponenten für Dokumentengenerierung mit J2EE/EJB und SOA-Webservices.",
            location: "Dijon, Frankreich",
            image: "images/company_logos/banque_populaire.svg",
            url: "https://www.banquepopulaire.fr",
          },
          {
            year: "2007 - 2008",
            title: "Electricité De France für Accenture",
            subtitle: "Teamleiter Software Engineering",
            description:
              "Leitete ein Team von 5 Entwicklern für Design und Aufbau eines neuen Human Resources Portals für EDF mit über 100.000 Mitarbeitern. Verwaltete Teamplanung, tägliche Kundenberichte und Code-Reviews. Entwicklung der Anwendung mit J2EE/EJB, SOA-Webservices und Struts/SWT.",
            location: "Paris, Frankreich",
            image: "images/company_logos/edf.svg",
            url: "https://www.edf.fr",
          },
          {
            year: "2008 - 2009",
            title: "Disneyland Paris für Accenture",
            subtitle: "SAP Software Engineer",
            description:
              "Entwicklung von HR Access zu SAP HR-Schnittstellen mit ABAP. Arbeit an der Parametrisierung von Personal-Administration- und Organisationsmanagement-Modulen.",
            location: "Paris, Frankreich",
            image: "images/company_logos/disney.svg",
            url: "https://www.disneylandparis.com",
          },
          {
            year: "2009 - 2010",
            title: "Gaz De France (jetzt Engie) für Accenture",
            subtitle: "Manager Quality Testing Team",
            description:
              "Verwaltete ein Quality-Testing-Team von 15 Mitgliedern (30% offshore in Mauritius), verantwortlich für Tests von Infrastruktur und Programmen vor Produktionsbereitstellung. Verwaltete Testkampagnen-Zeitpläne, Aufgabenzuweisungen und Budget-Monitoring. Hauptansprechpartner für Kunden und Leitung der Standardisierung und Optimierung von Prozessen und Deliverables.",
            location: "Paris, Frankreich",
            image: "images/company_logos/gdf.png",
            url: "https://www.engie.com",
          },
        ],
        image: "images/company_logos/accenture.svg",
        category: "work",
      },
      {
        year: "2008 - 2012",
        title: "Rotes Kreuz Freiwilliger",
        subtitle: "EMR & Einsatzfahrzeug-Fahrer",
        description:
          "Trat dem Roten Kreuz bei und leitete ein Team für wöchentliche Straßenpatrouillen zur Betreuung obdachloser Menschen im Bezirk. Später Wechsel zum medizinischen Rettungsteam als EMR (Emergency Medical Responder) und Einsatzfahrzeug-Fahrer, jeden Wochenende als Freiwilliger im Einsatz bei Notfallsituationen mit dem Team, stationiert bei Pariser Feuerwachen.",
        location: "Paris, Frankreich",
        category: "life",
        image: "images/life/redcross.svg",
        url: "https://www.croix-rouge.fr",
      },
      {
        year: "2011 - 2012",
        title: "OWNI",
        category: "work",
        subtitle: "Fullstack Engineer spezialisiert auf Datenjournalismus",
        description:
          "Entwicklung von Webanwendungen mit Fokus auf Datenvisualisierung für französische Zeitungen mit hohem Traffic und Sichtbarkeit, einschließlich der Veröffentlichung von WikiLeaks-Dokumenten.",
        location: "Paris, Frankreich",
        image: "images/company_logos/OWNI.svg",
        url: "https://fr.wikipedia.org/wiki/OWNI",
      },
      {
        year: "2012",
        title: "Nach Berlin gezogen",
        subtitle: "Neues Kapitel",
        description:
          "Umzug in Europas Startup-Hauptstadt für neue Abenteuer in Tech, Innovation und erstklassiger Clubkultur.",
        location: "Berlin, Deutschland",
        category: "life",
        printable: false,
      },
      {
        year: "2013 - 2014",
        title: "AngryKatze",
        category: "work",
        subtitle: "Solo-Gründer & Software-Ingenieur",
        description:
          "Entwicklung von Webanwendungen für französische Zeitungen, spezialisiert auf Datenjournalismus. Entwicklung eines Netzwerkscanners im großen Maßstab für einen Cybersecurity-Kunden.",
        location: "Berlin, Deutschland",
        image: "images/company_logos/angrykatze.jpeg",
      },
      {
        year: "2014 - 2015",
        title: "Minodes",
        subtitle: "CTO",
        description:
          "Als CTO eingetreten und das Engineering-Team von Grund auf neu aufgebaut. Entwicklung einer skalierbaren, verteilten Datenverarbeitungsinfrastruktur mit Python-Microservices und verschiedenen Datenbanktechnologien zur Analyse von Kundenströmen, Bewegungsmustern und Verweildauer. Entwicklung von ML-Modellen (SVM) für Kunden-Geolokalisierung. Unternehmen von Telefónica NEXT übernommen.",
        location: "Berlin, Deutschland",
        image: "images/company_logos/minodes.jpg",
        category: "work",
        url: "https://minodes.com",
      },
      {
        year: "2015 - 2017",
        title: "Dentolo",
        url: "https://www.dentolo.de",
        category: "work",
        subtitle: "CTO & Mitgründer",
        description:
          "Mitgründer von Dentolo als CTO und Aufbau der gesamten technischen Infrastruktur von Grund auf. Entwicklung und Bereitstellung einer Ruby on Rails-Anwendung für Kunden, Operations-Team und Zahnarzt-Netzwerk, mit automatisierter Continuous Deployment, 1300+ Tests, hochverfügbarer Architektur und umfassenden Sicherheitsmaßnahmen. Unternehmen von Zurich Versicherung 2019 übernommen.",
        location: "Berlin, Deutschland",
        image: "images/company_logos/dentolo.svg",
      },
      {
        type: "group",
        year: "2018",
        title: "Entrepreneurship-Programme",
        summary:
          "Zwei Fellowship-Programme mit Fokus auf KI- und Technologie-Unternehmertum, Erforschung von Machine Learning, Deep Learning und Entwicklung KI-gestützter Produkte im Berliner Startup-Ökosystem.",
        collapsed: true,
        items: [
          {
            year: "2018",
            title: "Hackmind.ai",
            subtitle: "Fellow in Entrepreneurship-Programm",
            description:
              "Fellowship-Programm mit Fokus auf KI, Machine Learning, Blockchain und Robotik. Entwicklung von Produkten mit Deep Learning (TensorFlow/Keras), Computer Vision (OpenCV), Deep Reinforcement Learning für Spiele-KI und Robotik/IoT-Projekten mit Raspberry Pi und Arduino.",
            location: "Berlin, Deutschland",
            image: "images/company_logos/hackmind.png",
            url: "https://www.crunchbase.com/organization/hackmind",
          },
          {
            year: "2018",
            title: "Entrepreneurs First",
            subtitle: "Fellow in Entrepreneurship-Programm",
            description:
              "Fellowship-Programm, bei dem ich einen KI-gestützten Kommunikations-Coach entwickelte, der Vertriebsteams während Kundengesprächen sofortiges Feedback gibt und die Einschränkungen traditioneller Schulungsprogramme behebt. Verließ das Programm, um Back mitzugründen.",
            location: "Berlin, Deutschland",
            image: "images/company_logos/ef.png",
            url: "https://www.joinef.com",
          },
        ],
        image: "images/company_logos/ef.png",
        category: "work",
      },
      {
        year: "2018 - 2022",
        title: "Back",
        category: "work",
        subtitle: "CTO & Mitgründer",
        description:
          "Mitgründer von Back als CTO und Aufbau einer Employee-Experience-Plattform, die Gespräche, Wissen und Prozesse für HR-, IT- und Finance-Teams automatisiert. Rekrutierung des gesamten Engineering-Teams und Aufbau der kompletten Infrastruktur und Software mit Integration von Workplace-Messaging-Apps wie Slack/Teams und HR-Systemen. Genutzt von Unternehmen wie Loom, Statista und Pleo. Unternehmen von Personio 2022 übernommen.",
        location: "Berlin, Deutschland",
        image: "images/company_logos/back.jpeg",
        url: "https://www.crunchbase.com/organization/backhq",
      },
      {
        year: "Seit 2022",
        title: "Personio",
        url: "https://www.personio.com",
        subtitle: "Head of Engineering",
        description:
          "Als Head of Engineering nach der Übernahme von Back eingetreten. Leitung der Automation-Abteilung mit 4 Engineering-Teams, Integration von Backs Software und Entwicklung einer Workflow-Automatisierungsplattform für Geschäftsprozesse der Kunden. Später Leitung eines Payroll-Teams und Neuaufbau der Architektur und Software für eine modernisierte, harmonisierte Payroll-Lösung.",
        location: "Berlin, Deutschland",
        image: "images/company_logos/personio.jpeg",
        category: "work",
      },
      {
        year: "Bereit, wenn Sie es sind,",
        type: "wind-farm",
        category: "work",
      },
    ],
  },
};
