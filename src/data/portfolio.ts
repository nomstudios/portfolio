export interface Assignment {
  id: number;
  role: string;
  period: string;
  year: number;
  rate: string;
  rateUSD: number;
  employer: string;
  sector: string;
  supervisor: string;
  project: string;
  description: string;
  tools?: string[];
  keyAccomplishments?: string[];
}

export const profile = {
  name: "Nomi",
  title: "Database & Systems Specialist · Visualization Expert · Dashboard Designer",
  location: "Faisalabad, Pakistan",
  phone: "0348-0311-334",
  dob: "1 January 1982",
  nationality: "Pakistani",
  tagline:
    "A decade engineering national-scale dashboards, data architectures, and publication-grade visual systems for governments and development banks.",
};

export const education = [
  { period: "2009 – 2012", degree: "M.C.S.", detail: "Master of Computer Science", institution: "University of Karachi" },
  { period: "2005 – 2008", degree: "B.Sc.", detail: "Bachelor of Science", institution: "University of Karachi" },
  { period: "2005 – 2007", degree: "First Science", detail: "Pre-Engineering", institution: "Govt. Degree College, Karachi" },
];

export const languages = [
  { name: "Urdu", level: "Mother tongue" },
  { name: "English", level: "Fluent" },
  { name: "Punjabi", level: "Native" },
];

export const assignments: Assignment[] = [
  {
    id: 19,
    role: "Database and Systems Specialist",
    period: "Feb 2025 – Apr 2025",
    year: 2025,
    rate: "$462 / day",
    rateUSD: 462,
    employer: "Ministry of Climate Change & Environmental Coordination",
    sector: "Government",
    supervisor: "Nathan Rive",
    project: "TA-10326 — Climate Finance Dashboard",
    description: "Architected and launched a national climate finance analytics platform using PostgreSQL and Supabase, including schema design, ETL pipelines for budget and emissions data, secure admin upload workflows, and modular dashboards with drill-down reporting for policy units and sector teams.",
    tools: ["PostgreSQL", "Supabase", "React", "Tailwind CSS", "TypeScript", "Node.js"],
    keyAccomplishments: [
      "Architected PostgreSQL schemas with row-level security (RLS) to manage multi-sector climate data.",
      "Built automated ETL pipelines translating complex Excel budget tracking sheets into relational tables.",
      "Developed interactive dashboards allowing ministries to cross-reference spending with environmental targets."
    ]
  },
  {
    id: 18,
    role: "Visualization Expert / Infographics Developer",
    period: "Dec 2024 – Feb 2025",
    year: 2025,
    rate: "$410 / day",
    rateUSD: 410,
    employer: "Ministry of Information Technology and Telecommunication",
    sector: "Government",
    supervisor: "Nasruminallah Mian / Khayam Abbasi",
    project: "TA — Country Digital Ecosystem Diagnostic Report",
    description: "Led visualization production for a national digital ecosystem report, converting multi-source ICT and innovation datasets into publication-ready infographics, interactive charts, and stakeholder narrative slides.",
    tools: ["Adobe Illustrator", "Figma", "D3.js", "Excel"],
    keyAccomplishments: [
      "Synthesized ICT readiness metrics from 10+ distinct sources into a cohesive graphic narrative.",
      "Created high-fidelity vector layouts suitable for publication-ready policy diagnostic reports.",
      "Designed and presented interactive slides that simplified ecosystem taxonomy for executive briefings."
    ]
  },
  {
    id: 17,
    role: "Visualization Expert / Infographics Designer",
    period: "Feb 2024 – Apr 2024",
    year: 2024,
    rate: "$308 / day",
    rateUSD: 308,
    employer: "Ministry of Information Technology and Telecommunication",
    sector: "Government",
    supervisor: "Nasruminallah",
    project: "56131-001 — Country Digital Ecosystem Diagnostic Report",
    description: "Designed and published visualization frameworks and infographic systems to communicate national digital policy findings, enabling concise executive summaries and technical annexes for decision-makers.",
    tools: ["Adobe Illustrator", "Figma", "InDesign", "Excel"],
    keyAccomplishments: [
      "Established standard typographic systems and color keys to represent digital ecosystem dimensions.",
      "Visualized broadband penetration, digital literacy, and startup capital charts for report annexes.",
      "Reduced visual complexity in reports, enabling rapid executive-level consumption of policy briefs."
    ]
  },
  {
    id: 16,
    role: "Dashboard Designer / Web Portal Front-end Specialist",
    period: "Mar 2023 – May 2023",
    year: 2023,
    rate: "$300 / day",
    rateUSD: 300,
    employer: "Federal Flood Commission",
    sector: "Government",
    supervisor: "Shaukat Shafi Mian",
    project: "TA-9246 — Digital Master Plan Platform",
    description: "Delivered a disaster risk financing digital master plan platform, building responsive dashboard modules, stakeholder-facing analytics, and interactive data interfaces for flood monitoring and investment planning.",
    tools: ["React", "TypeScript", "Leaflet", "Tailwind CSS", "PostgreSQL"],
    keyAccomplishments: [
      "Built GIS mapping components displaying flood susceptibility and asset valuation layers.",
      "Engineered clean tabular data interfaces with multi-column filtering to track flood investments.",
      "Collaborated with disaster finance teams to formulate responsive UI components representing fund allocations."
    ]
  },
  {
    id: 15,
    role: "Dashboard Designer / Web Portal Front-end Developer",
    period: "Feb 2022 – Apr 2022",
    year: 2022,
    rate: "$300 / day",
    rateUSD: 300,
    employer: "Asian Development Bank",
    sector: "Development Bank",
    supervisor: "Asif Tauranzai",
    project: "TA-9676 — Foreign Funds Monitoring Dashboard",
    description: "Built a foreign funds monitoring dashboard with Python/PostgreSQL backend integration, interactive portfolio visualizations, and real-time summary metrics for ADB fund managers.",
    tools: ["Python", "Flask", "PostgreSQL", "React", "Chart.js"],
    keyAccomplishments: [
      "Developed optimized SQL views aggregating fund disbursements across multiple geographic regions.",
      "Implemented a secure client-side dashboard featuring real-time financial tracking metrics.",
      "Engineered automated export modules allowing managers to download visual summaries in PPTX/PDF formats."
    ]
  },
  {
    id: 14,
    role: "Web UI/UX Creative Graphic and Data Visual Designer",
    period: "Jul 2022 – Sep 2022",
    year: 2022,
    rate: "$300 / day",
    rateUSD: 300,
    employer: "Asian Development Bank",
    sector: "Development Bank",
    supervisor: "Muzaffar H. Bukhari",
    project: "52014-001 — National Master Plan for Flood Telemetry Network",
    description: "Led UX and visual communications for a national flood telemetry master plan, producing branded report layouts, data dashboards, and concept prototypes for system operations.",
    tools: ["Figma", "Adobe Illustrator", "HTML5", "CSS3"],
    keyAccomplishments: [
      "Mapped telemetry sensor topologies into intuitive graphic layouts.",
      "Designed and refined mockups for the telemetry command center screens.",
      "Drafted high-readability publication styles for ADB's national flood telemetry reports."
    ]
  },
  {
    id: 13,
    role: "Creative Designer / Front-End UI/UX Developer",
    period: "Feb 2021 – Apr 2021",
    year: 2021,
    rate: "$300 / day",
    rateUSD: 300,
    employer: "Asian Development Bank",
    sector: "Development Bank",
    supervisor: "Shaukat Shafi Mian",
    project: "TA-9943 — Knowledge for Innovation & Technology Cooperation",
    description: "Delivered climate and innovation dashboard interfaces using Angular and Python backend services, crafting user flows, analytics views, and data storytelling for development cooperation programs.",
    tools: ["Angular", "TypeScript", "Python", "D3.js", "Sass"],
    keyAccomplishments: [
      "Created highly reusable Angular visualization components for rendering time-series climate indexes.",
      "Refined user experience flow, reducing navigation steps for accessing technology cooperation reports.",
      "Designed vector layouts for public-facing digital knowledge portals."
    ]
  },
  {
    id: 12,
    role: "Creative Graphic & Publishing Expert",
    period: "Aug 2021 – Oct 2021",
    year: 2021,
    rate: "$300 / day",
    rateUSD: 300,
    employer: "Asian Development Bank",
    sector: "Development Bank",
    supervisor: "Shaukat Shafi Mian",
    project: "SC-117500 — Knowledge Product Digital Deployment",
    description: "Led digital publishing of ADB knowledge products with interactive flipbooks, animated visual assets, and delivery-ready formats for online stakeholder engagement.",
    tools: ["InDesign", "HTML5", "CSS3", "JavaScript"],
    keyAccomplishments: [
      "Transformed print-bound reports into responsive, animated web layouts.",
      "Produced media catalogs highlighting development impact benchmarks.",
      "Optimized document performance, ensuring smooth web rendering for large visual files."
    ]
  },
  {
    id: 11,
    role: "UI/UX Designer",
    period: "Mar 2020 – May 2020",
    year: 2020,
    rate: "$300 / day",
    rateUSD: 300,
    employer: "Government of Pakistan",
    sector: "Government",
    supervisor: "Muzaffar H. Bukhari / Esmyra",
    project: "TA-9950 — COVID-19 Response LMIS Dashboards",
    description: "Engineered responsive LMIS dashboards for COVID-19 workforce monitoring, creating data layouts, filtering controls, and reporting screens for national labor market decision-makers.",
    tools: ["React", "JavaScript", "HTML5", "Tailwind CSS", "Chart.js"],
    keyAccomplishments: [
      "Designed and deployed emergency workforce mapping charts in less than 3 weeks.",
      "Implemented filters segmenting key healthcare resource availability by district.",
      "Optimized mobile interfaces for health officials querying labor statistics in the field."
    ]
  },
  {
    id: 10,
    role: "Graphic and Publishing Specialist",
    period: "Sep 2020 – Nov 2020",
    year: 2020,
    rate: "$300 / day",
    rateUSD: 300,
    employer: "Provincial Disaster Management Authority",
    sector: "Government",
    supervisor: "Guntar Sugriato",
    project: "TA-8912 — FERRP Graphics and Publishing",
    description: "Produced CMS-driven dashboard systems and digital atlas platforms for flood reconstruction, combining geospatial visualizations with resilience messaging and publication workflows.",
    tools: ["WordPress", "QGIS", "Adobe Illustrator", "HTML/CSS"],
    keyAccomplishments: [
      "Integrated GIS spatial boundaries with a WordPress-based recovery portal.",
      "Designed 30+ district recovery charts displaying infrastructure reconstruction progress.",
      "Published a digital atlas detailing flood vulnerability maps for provincial authorities."
    ]
  },
  {
    id: 9,
    role: "Graphic and Publishing Specialist",
    period: "Feb 2019 – Apr 2019",
    year: 2019,
    rate: "$300 / day",
    rateUSD: 300,
    employer: "Provincial Disaster Management Authority",
    sector: "Government",
    supervisor: "Nisar Ahmed Sani",
    project: "TA-8912 — Flood Emergency Reconstruction & Resilience",
    description: "Designed and published multi-hazard vulnerability atlases with geo-infographics and district risk profiles to support emergency reconstruction planning and coordination.",
    tools: ["QGIS", "Adobe InDesign", "Illustrator", "Excel"],
    keyAccomplishments: [
      "Consolidated regional geological hazard datasets into printable atlas profiles.",
      "Designed high-readability risk charts illustrating historical disaster consequences.",
      "Standardized layout formatting, decreasing printing and digital publication times."
    ]
  },
  {
    id: 8,
    role: "Creative Graphic & Web Developer",
    period: "Jul 2019 – Sep 2019",
    year: 2019,
    rate: "$300 / day",
    rateUSD: 300,
    employer: "Provincial Disaster Management Authority",
    sector: "Government",
    supervisor: "Nisar Ahmed Sani",
    project: "MHVRA Atlas Designs and Reports",
    description: "Created interactive atlas mock-ups, prototype web interfaces, and visualization dashboards for multi-hazard risk communication and stakeholder review.",
    tools: ["Figma", "HTML5", "CSS3", "JavaScript", "Leaflet"],
    keyAccomplishments: [
      "Built fully functional Leaflet map prototypes showcasing district hazard ratings.",
      "Designed clean graphical indexes for accessing regional vulnerability reports.",
      "Conducted usability reviews to align tool designs with regional government workflows."
    ]
  },
  {
    id: 7,
    role: "Creative Graphic and Data Visual Developer",
    period: "Mar 2018 – May 2018",
    year: 2018,
    rate: "$300 / day",
    rateUSD: 300,
    employer: "Asian Development Bank",
    sector: "Development Bank",
    supervisor: "Deewan Anas / Guntar Sugriato",
    project: "51224-001 — Economic Corridor Strategic Planning",
    description: "Developed infographic systems, strategic charts, and branded communication publications to support economic corridor planning and investment review.",
    tools: ["Adobe Illustrator", "Excel", "InDesign"],
    keyAccomplishments: [
      "Visualized macro-economic forecasts and freight flow metrics for key strategic routes.",
      "Co-authored corridor graphic guides, setting guidelines for future ADB publications.",
      "Designed custom corridor mapping charts used in regional trade ministerial conferences."
    ]
  },
  {
    id: 6,
    role: "Creative Graphic and Data Visual Developer",
    period: "Sep 2018 – Nov 2018",
    year: 2018,
    rate: "$300 / day",
    rateUSD: 300,
    employer: "Asian Development Bank",
    sector: "Development Bank",
    supervisor: "Fatima Ali / Asif Turanzai",
    project: "Vision 2025 — First Five-Year Achievements Catalogue",
    description: "Documented national development achievements under Vision 2025 with publication-quality visualization systems, infographics, and narrative report layouts.",
    tools: ["Adobe Illustrator", "InDesign", "Excel"],
    keyAccomplishments: [
      "Transformed complex socio-economic indexes into reader-friendly charts.",
      "Created a catalog template containing 50+ pages of statistics on energy and infrastructure.",
      "Ensured pixel-perfect alignment and color accuracy in files sent to printing houses."
    ]
  },
  {
    id: 5,
    role: "Creative Graphic and Data Visual Designer",
    period: "Mar 2017 – May 2017",
    year: 2017,
    rate: "$300 / day",
    rateUSD: 300,
    employer: "Community Resilience Initiative",
    sector: "Government",
    supervisor: "Naveed Alam Yousafzai",
    project: "Mapping of Nullahs and Rivers, AJK",
    description: "Built structured atlas and cartographic visualization systems for flood risk assessment and community resilience planning, integrating spatial data with technical report design.",
    tools: ["QGIS", "ArcGIS", "Adobe Illustrator", "InDesign"],
    keyAccomplishments: [
      "Generated detailed hydrological maps for flood inundation scenarios.",
      "Engineered clean cartographic templates to represent riverbank erosion rates.",
      "Wrote and compiled the accompanying design layout for policy briefs."
    ]
  },
  {
    id: 4,
    role: "Animation, Creative Graphic & Data Visual Developer",
    period: "Jul 2017 – Sep 2017",
    year: 2017,
    rate: "$250 / day",
    rateUSD: 250,
    employer: "HOPE 87 — Islamabad",
    sector: "NGO",
    supervisor: "Zohaib Ahmad",
    project: "Interactive Presentation for HOPE 87",
    description: "Produced animated presentation systems and motion graphic visualization assets for an international conference, enhancing engagement with professional storytelling design.",
    tools: ["Adobe After Effects", "Premiere Pro", "PowerPoint", "Photoshop"],
    keyAccomplishments: [
      "Animated 2D timelines depicting humanitarian projects across Pakistan.",
      "Designed dynamic slide systems with audio transitions for keynote presentations.",
      "Delivered formatted visual materials for distribution at conference venues."
    ]
  },
  {
    id: 3,
    role: "Creative Graphic and Data Visual Designer",
    period: "Feb 2016 – Apr 2016",
    year: 2016,
    rate: "$250 / day",
    rateUSD: 250,
    employer: "National Disaster Management Authority",
    sector: "Government",
    supervisor: "Idress Masood",
    project: "MHVRA Data Segregation & Atlas Development",
    description: "Organized spatial and statistical datasets into coherent analytical frameworks with thematic risk mapping, atlas layouts, and data visualization products for disaster coordination.",
    tools: ["QGIS", "Excel", "Adobe InDesign", "Illustrator"],
    keyAccomplishments: [
      "Sorted raw risk variables from national surveys into structured database formats.",
      "Drafted 15 regional hazard maps with color-coded risk layers.",
      "Designed custom layouts for the National Disaster Management Atlas."
    ]
  },
  {
    id: 2,
    role: "Director Innovation & Designs",
    period: "Sep 2015 – Nov 2015",
    year: 2015,
    rate: "PKR 20,000",
    rateUSD: 70,
    employer: "Alhasan Systems (Pvt.) Ltd",
    sector: "Private",
    supervisor: "Syed Mehdi Bukhari",
    project: "Pakistan Development Perspective (PDP)",
    description: "Designed district-level development profiles by integrating socio-economic indicators, spatial datasets, and planning narratives into polished stakeholder communications.",
    tools: ["Adobe Illustrator", "InDesign", "Photoshop", "Excel"],
    keyAccomplishments: [
      "Supervised a design team formatting district-level development dossiers.",
      "Created standardized indicators and infographics representing poverty and education.",
      "Synthesized geographic maps with textual profiles into a high-end publication."
    ]
  },
  {
    id: 1,
    role: "Print Designer / Web Graphic Developer",
    period: "Jun 2014 – Aug 2014",
    year: 2014,
    rate: "PKR 18,000",
    rateUSD: 60,
    employer: "iMMAP (USAID funded)",
    sector: "International NGO",
    supervisor: "Nathan Rive",
    project: "PESA — Pakistan Emergency Situation Analysis",
    description: "Visualized emergency and humanitarian datasets through structured atlas and profile development to support coordination and crisis response planning.",
    tools: ["Adobe InDesign", "Adobe Illustrator", "Photoshop", "Excel"],
    keyAccomplishments: [
      "Designed infographics illustrating the volume and locations of humanitarian aid.",
      "Formatted weekly situation update cards containing health and nutrition charts.",
      "Designed map layouts detailing crisis hotspots for inter-agency disaster meetings."
    ]
  }
];

export const serviceAreas = [
  {
    id: "geo-motion-graphics",
    title: "Geo Motion Graphics",
    tag: "Visual Systems",
    short: "Spatial storytelling & animated maps",
    summary:
      "I convert geospatial datasets into polished motion graphics, interactive map sequences, and report-ready visual systems that make spatial programs easy to understand.",
    page: {
      heading: "Animated Mapping & Geospatial Motion Graphics",
      intro:
        "Geospatial Motion Graphics and Animated Mapping Specialist with experience in creating professional animated maps, location-based visual storytelling, 2D/3D geospatial animations, and cinematic geographic visualizations for presentations, documentaries, digital media, and data-driven communication.",
      skills: [
        "Animated cartography and geospatial storytelling.",
        "Creation of dynamic map animations, travel routes, migration paths, logistics flows, and location-based visual narratives.",
        "Development of cinematic flythroughs, zoom transitions, and geographic visualizations.",
        "Integration of GIS datasets into motion graphics workflows.",
        "Production of broadcast-quality geographic animations and explainer videos.",
        "2D and 3D map visualization for spatial communication and data presentation.",
        "Motion design, visual effects, and geographic data-driven animation.",
      ],
      tools: [
        "Adobe After Effects",
        "GEOlayers 3",
        "Helium",
        "Red Giant Mir",
        "Google Earth Studio",
        "ArcGIS Pro",
        "Mapbox Studio",
      ],
      professionalSummary:
        "Experienced in Geospatial Motion Graphics, Animated Cartography, and Location-Based Visual Storytelling using Adobe After Effects, GEOlayers 3, Helium, Red Giant Mir, Google Earth Studio, and GIS technologies. Skilled in producing high-quality animated maps, 3D terrain visualizations, geographic flythroughs, route animations, spatial data visualizations, and cinematic mapping content for research, media production, corporate presentations, and digital communication projects. Able to transform complex geographic and GIS datasets into engaging, visually compelling, and informative animated experiences.",
    },
  },
  {
    id: "product-interface-design",
    title: "Product & Interface Design",
    tag: "Digital Products",
    short: "Web/mobile dashboards & experience design",
    summary:
      "I design and build polished data products, dashboards, and user interfaces that help teams interact with analytics, monitor performance, and make faster decisions.",
    page: {
      heading: "Product & Interface Design",
      intro:
        "Full-Stack and Cross-Platform Development Professional with experience in modern web, mobile, and software development technologies. Skilled in building scalable applications, responsive user interfaces, mobile solutions, API integrations, and AI-enabled software systems across multiple platforms.",
      skills: [
        "Front-end development using React.js, JavaScript (ES6+), TypeScript, HTML5, CSS3, and modern UI frameworks.",
        "Modern web application development with Next.js for server-side rendering, static site generation, and high-performance web experiences.",
        "Fast and optimized application development using Vite build tools and modern frontend workflows.",
        "Backend scripting, automation, data processing, and AI integration using Python.",
        "Cross-platform mobile application development using Flutter for Android and iOS deployment.",
        "Native Android application development using Android SDK and Android Studio.",
        "Native iOS application development using Swift and Apple development frameworks.",
        "REST API integration, cloud services connectivity, authentication systems, and database interaction.",
        "Responsive design, mobile-first development, and modern software architecture principles.",
      ],
      tools: [
        "React",
        "Next.js",
        "Vite",
        "Python",
        "Flutter",
        "Android Studio",
        "Swift",
        "Visual Studio Code",
        "Cursor",
      ],
      professionalSummary:
        "Software Developer with expertise in modern web, mobile, and cross-platform application development using React.js, Next.js, Vite, Python, Flutter, Android, and Swift iOS technologies. Experienced in building responsive web applications, scalable mobile solutions, API-driven systems, automation workflows, and AI-integrated applications. Strong understanding of software engineering principles, UI/UX implementation, application performance optimization, and end-to-end product development across web and mobile ecosystems.",
    },
  },
  {
    id: "devops-cloud-automation",
    title: "DevOps & Cloud Automation",
    tag: "Delivery Workflows",
    short: "Automation, CI/CD and cloud deployment",
    summary:
      "I build reliable delivery pipelines, containerized infrastructure, and cloud automation so launches are repeatable, secure, and easier to maintain.",
    page: {
      heading: "DevOps & Cloud Automation",
      intro:
        "DevOps Engineer / Cloud Automation Professional with experience in containerization, CI/CD pipeline implementation, automated deployment workflows, infrastructure management, and modern software delivery practices. Skilled in streamlining development operations, improving deployment reliability, and accelerating software release cycles through automation and DevOps methodologies.",
      skills: [
        "Continuous Integration (CI) and Continuous Deployment (CI/CD) pipeline design and implementation.",
        "Application containerization and environment management using Docker.",
        "Automated build, testing, deployment, and release management workflows.",
        "Infrastructure automation and deployment orchestration.",
        "Version control, branching strategies, and collaborative development workflows.",
        "Cloud-native application deployment and scalable infrastructure concepts.",
        "Monitoring, logging, performance optimization, and system reliability practices.",
        "DevSecOps awareness, deployment security, and operational best practices.",
        "Agile development support and software delivery lifecycle management.",
      ],
      tools: [
        "Docker",
        "Git",
        "GitHub Actions",
        "Jenkins",
        "GitLab CI/CD",
        "Kubernetes",
        "Visual Studio Code",
        "Cursor",
      ],
      professionalSummary:
        "DevOps and Cloud Automation Professional with expertise in Docker containerization, CI/CD pipeline development, automated deployment workflows, infrastructure automation, and modern software delivery practices. Experienced in implementing continuous integration and continuous deployment solutions, managing containerized applications, optimizing development lifecycles, and supporting scalable cloud-native architectures. Skilled in Git-based workflows, DevOps automation, release management, monitoring, and operational excellence across development and production environments.",
    },
  },
];
