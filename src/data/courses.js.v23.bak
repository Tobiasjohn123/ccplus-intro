// prices: only age groups that have a price are listed (no "-----" entries).
// Edit a price, duration or text here and every page updates.
export const AGE_GROUPS = [
  { key: "children", label: "Children" },
  { key: "teenagers", label: "Teenagers" },
  { key: "adult", label: "Adults" },
]

const OUT = { learn: [], who: [], why: "", careers: [] }

const RAW = [
  { slug: "computer-basic", name: "Computer Basic Class", tag: "Microsoft Office Suite | Windows Mastery", weeks: "4 \u2013 6 weeks",
    prices: { children: 30000, teenagers: 30000, adult: 40000 },
    intro: "This course covers the Microsoft Office Suite and Windows.", ...OUT },
  { slug: "google-canva", name: "Google Suite & Canva Mastery", tag: "Google Suite | Canva", weeks: "4 \u2013 6 weeks",
    prices: { children: 30000, teenagers: 35000, adult: 40000 },
    intro: "This course covers Google Suite and Canva.", ...OUT },
  { slug: "scratch-robotics", name: "Coding \u2013 Scratch & Robotics", tag: "Scratch | Robotics", weeks: "4 \u2013 6 weeks",
    prices: { children: 80000 },
    intro: "A coding and robotics course using Scratch.", ...OUT },

  { slug: "graphics-design", name: "Graphics Design (Photoshop & AI)", tag: "Photoshop | AI | Photo Editing | Logo & Brand Design", weeks: "4 \u2013 6 weeks",
    prices: { children: 60000, teenagers: 60000, adult: 60000 },
    intro: "Learn graphics design with Photoshop and AI, from editing images to creating logos and marketing visuals.",
    learn: [
      ["Photo Manipulation & Retouching", "Object extraction, image restoration, skin retouching, color grading, and non-destructive editing with layers and masks."],
      ["Poster & Ad Design", "Digital ad banners, creative posters, event flyers, and promotional media."],
      ["Vector Graphics & Pen Tool Mastery", "Precision pathing, shape building, anchor point editing, and scalable illustrations."],
      ["Logo & Brand Identity Design", "Memorable logos, brand guidelines, icon sets, and vector brand marks."],
    ],
    who: ["Beginners moving into professional creative software", "Marketers creating high-fidelity ad creatives", "Graphic designers offering professional brand identity design"],
    why: "Photoshop is the industry standard for photo editing and raster artwork. Vector graphics never lose quality at any size, which makes them essential for logos, packaging, and brand identity work.",
    careers: ["Graphic Designer", "Photo Retoucher / Image Editor", "Brand Identity Designer", "Visual Content Specialist"] },
  { slug: "graphics-canva", name: "Graphic Design \u2013 Canva Mastery (Lv. 1)",
    tag: "Canva Workspace | Visual Brand Assets | Social Media Graphics | Content Creation & Layouts", weeks: "4 weeks",
    prices: { adult: 50000 },
    intro: "A fast, practical entry into visual design: design fundamentals, visual hierarchy, and using Canva to create high-quality marketing materials quickly.",
    learn: [
      ["Canva Workspace & Fundamentals", "Templates, custom dimensions, element alignment, typography, and color composition."],
      ["Visual Brand Assets", "Cohesive brand identities, color palettes, custom logos, and branded promotional material."],
      ["Social Media Graphics", "Banners, flyers, carousels, and stories for Instagram, Facebook, LinkedIn, and X."],
      ["Content Creation & Layouts", "Business presentations, PDF ebooks, marketing documents, and print materials."],
    ],
    who: ["Absolute beginners with no graphics background", "Social media managers, content creators, and copywriters", "Small business owners handling their own marketing", "Anyone who wants fast, high-quality graphics for web and print"],
    why: "Canva is the global standard for rapid content creation. It lets you produce professional marketing assets on tight deadlines without complex design software.",
    careers: ["Social Media Content Designer", "Junior Graphic Assistant", "Canva Specialist / Freelance Creator", "Digital Content Associate"] },

  { slug: "graphics-photoshop", name: "Graphic Design \u2013 Adobe Photoshop (Lv. 2)",
    tag: "Photo Manipulation & Editing | Raster Graphics | Poster & Ad Design | Advanced Branding Assets", weeks: "8 weeks",
    prices: { adult: 80000 },
    intro: "An intensive 8-week training for creative minds ready for professional-grade software: manipulate images, blend graphics, adjust lighting and color, and design high-impact visual media.",
    learn: [
      ["Photo Manipulation & Retouching", "Object extraction, image restoration, skin retouching, color grading, and non-destructive editing with layers and masks."],
      ["Raster Graphics & Compositing", "Combining image layers, blending modes, texture overlays, and complex effects."],
      ["Poster & Ad Design", "Digital ad banners, creative posters, event flyers, and promotional media."],
      ["Advanced Branding Assets", "High-resolution mockups, product packaging concepts, and custom marketing creative."],
    ],
    who: ["Beginners moving into professional creative software", "Photographers and visual artists refining their editing skills", "Design enthusiasts who want deep mastery of raster assets", "Marketers creating high-fidelity ad creatives"],
    why: "Photoshop is the industry standard for photo editing and raster artwork. It gives you the freedom to turn ideas into professional-grade visuals for brands and agency clients.",
    careers: ["Graphic Designer", "Photo Retoucher / Image Editor", "Creative Advertising Designer", "Visual Content Specialist"] },

  { slug: "graphics-illustrator", name: "Graphic Design \u2013 Adobe Illustrator (Lv. 3)",
    tag: "Vector Graphics & Illustration | Logo & Identity Design | Typography & Layouts | Print-Ready Asset Export", weeks: "8 weeks",
    prices: { adult: 80000 },
    intro: "Gain professional control over vector graphics and brand identity: crisp, infinitely scalable designs from custom icons and illustrations to full branding suites and print-ready material.",
    learn: [
      ["Vector Graphics & Pen Tool Mastery", "Precision pathing, shape building, anchor point editing, and scalable illustrations."],
      ["Logo & Brand Identity Design", "Memorable logos, brand guidelines, icon sets, and vector brand marks."],
      ["Advanced Typography & Layouts", "Custom font manipulation, kerning, hierarchy, and editorial layouts."],
      ["Print-Ready Preparation & Export", "High-resolution print files, CMYK vs RGB, die-lines, and scalable digital exports."],
    ],
    who: ["Graphic designers offering professional brand identity design", "Illustrators and artists turning sketches into vector graphics", "UI designers and brand strategists who need precise icons and vector assets", "Professionals completing their Adobe Creative Suite skillset"],
    why: "Vector graphics never lose quality at any size, which makes them essential for logos, billboards, packaging, and brand identity work.",
    careers: ["Brand Identity Designer", "Vector Illustrator", "Senior Graphic Designer", "Creative Director / Art Director"] },

  { slug: "ethical-ai", name: "Ethical AI & Prompt Engineering",
    tag: "10+ AI Tools | 5x Workplace Productivity | Winning Prompts | AI Ethics & Governance | Real Practical Skills", weeks: "6 weekends",
    prices: { teenagers: 50000, adult: 50000 }, promo: true, cert: "Certified AI Expert credential",
    intro: "An intensive 6-weekend practical program on how to work, create, and solve business problems with AI: communicate effectively with generative models, streamline workflows, and apply responsible AI practices.",
    learn: [
      ["Mastering 10+ AI Tools", "Hands-on with leading generative AI platforms for text, images, research, automation, and data analysis."],
      ["Crafting Winning Prompts", "Role-based prompting, context structuring, and iterative refinement for precise, high-quality outputs."],
      ["5x Workplace Productivity", "Streamlining daily tasks, automating content creation, drafting communications, and speeding up research."],
      ["AI Ethics & Governance", "Data privacy, intellectual property, bias mitigation, and responsible AI use."],
      ["Real Practical Applications", "Applying AI workflows to real business scenarios, marketing campaigns, data projects, and admin work."],
    ],
    who: ["Professionals, managers, and admin staff who want to automate tasks", "Content creators, digital marketers, and copywriters scaling content", "Educators, researchers, and students speeding up learning and research", "Entrepreneurs, freelancers, and business owners building AI-powered efficiency", "Anyone who wants to stay ahead in an AI-driven job market"],
    why: "AI is reshaping every sector. Prompt engineering lets you automate routine tasks, solve problems faster, and increase your output so you stay competitive in the modern workforce.",
    careers: ["Prompt Engineer / AI Workflow Specialist", "AI Productivity Consultant", "Digital Operations Manager", "AI-Powered Content Strategist", "Automation & Efficiency Specialist"] },

  { slug: "data-excel", name: "Data Analytics \u2013 Excel Foundation",
    tag: "Data Cleaning | Advanced Formulas | Pivot Tables | Dynamic Dashboards", weeks: "5 weeks",
    prices: { teenagers: 60000, adult: 60000 },
    intro: "A practical, step-by-step introduction to analyzing data with Excel: clean raw data, run complex calculations, and turn numbers into dynamic reports.",
    learn: [
      ["Data Cleaning & Preparation", "Organizing messy datasets, removing duplicates, formatting data, and preparing sheets for analysis."],
      ["Advanced Formulas & Functions", "Lookup functions (VLOOKUP, XLOOKUP), logical statements (IF, AND, OR), and statistical calculations."],
      ["Data Summarization & Analysis", "Summarizing large volumes of data quickly with Pivot Tables and Pivot Charts."],
      ["Dynamic Dashboards", "Designing clear, visual dashboards that present insights to management."],
    ],
    who: ["Beginners entering data analytics", "Students and graduates wanting essential technical skills", "Administrative, finance, and operations personnel", "Business owners who need better record analysis", "Anyone who wants confidence working with data"],
    why: "Excel remains the standard tool for data management in organizations of all sizes. It gives you the foundation to structure information, run quick analyses, and communicate insights without a programming background.",
    careers: ["Entry-Level Data Analyst", "Excel Specialist / Reporting Analyst", "Operations Assistant", "Administrative Data Analyst"] },

  { slug: "data-powerbi-sql", name: "Data Analytics \u2013 Power BI & SQL",
    tag: "Database Querying | Relational Data | Business Intelligence | Interactive Dashboards", weeks: "6 weeks",
    prices: { teenagers: 70000, adult: 70000 },
    intro: "Extract structured data with SQL and turn it into live, interactive dashboards in Power BI for business decision-making.",
    learn: [
      ["SQL Database Querying", "Writing foundational queries (SELECT, WHERE, GROUP BY, ORDER BY) to extract specific data."],
      ["Relational Data & Joining", "Combining datasets across tables using SQL joins and relational logic."],
      ["Power BI & Data Modeling", "Importing data into Power BI, cleaning with Power Query, and linking tables."],
      ["Interactive Dashboards & Reporting", "Dynamic dashboards with filters, slicers, and KPIs for corporate reporting."],
    ],
    who: ["Learners who know spreadsheet basics and want to work with larger databases", "Business analysts automating routine reporting", "Professionals aiming for Business Intelligence (BI) roles", "IT, operations, and finance professionals handling relational data"],
    why: "Modern companies store data in backend databases, not just spreadsheets. SQL lets you fetch data from the source, and Power BI turns it into automated dashboards that help leaders monitor performance in real time.",
    careers: ["Business Intelligence (BI) Analyst", "SQL Data Analyst", "Data Reporting Specialist", "Business Operations Analyst"] },

  { slug: "data-tableau-python", name: "Data Analytics \u2013 Tableau & Python",
    tag: "Advanced Visualization | Data Manipulation | Statistical Analysis | Automated Workflows", weeks: "6 weeks",
    prices: { teenagers: 100000, adult: 100000 },
    intro: "For analytical minds ready to use programming and visual analytics on complex data: manipulate datasets with Python and build enterprise-grade dashboards in Tableau.",
    learn: [
      ["Python for Data Analytics", "Python fundamentals, data structures, and key libraries like Pandas and NumPy."],
      ["Data Wrangling & Automation", "Cleaning, merging, filtering, and preparing large datasets with code."],
      ["Exploratory Data Analysis (EDA)", "Finding patterns, trends, and correlations using statistics and visual libraries."],
      ["Tableau Visualization", "Charts, calculated fields, custom parameters, and enterprise-level dashboards."],
    ],
    who: ["Analysts upgrading from manual tools to code-based workflows", "Professionals moving into Advanced Analytics or Data Science", "Tech enthusiasts, developers, and researchers working with complex data", "Anyone who wants mastery of top-tier enterprise data software"],
    why: "Python is a premier language for data automation and complex calculations. Combined with the visual storytelling of Tableau, it builds skills that global tech companies and corporate analytics teams look for.",
    careers: ["Data Analyst / Senior Data Analyst", "Quantitative Analyst", "Analytics Consultant", "Data Science Associate"] },

  { slug: "data-science", name: "Data Science Masterclass",
    tag: "Python Programming | Statistics & Probability | Machine Learning & AI | Predictive Modeling & Deployment", weeks: "10 weekends",
    prices: { adult: 170000 },
    intro: "An intensive, end-to-end program that takes you from core programming to building and deploying machine learning models that solve real business problems.",
    learn: [
      ["Python for Data Science", "Clean, efficient Python and core libraries for data manipulation, cleaning, and exploratory analysis."],
      ["Statistics & Probability", "Core statistical principles, hypothesis testing, probability distributions, and data modeling logic."],
      ["Machine Learning & AI", "Supervised and unsupervised learning, training models, and building AI applications."],
      ["Predictive Modeling & Deployment", "Forecasting trends, evaluating model accuracy, and deploying working models."],
    ],
    who: ["Data analysts moving into machine learning and predictive analytics", "Software developers and IT professionals expanding into Data Science and AI", "STEM students and graduates building specialized tech skills", "Anyone passionate about solving business problems with data and automation"],
    why: "Data Science powers AI, business automation, predictive analytics, and data-driven decisions, with career options in tech, finance, health, and global industries.",
    careers: ["Data Scientist", "Machine Learning Engineer", "Predictive Analytics Specialist", "Data Science Consultant", "AI Analytics Specialist"] },

  { slug: "hr-analytics", name: "HR Analytics & Management",
    tag: "HR Fundamentals | Talent Acquisition | HR Analytics (Excel & Power BI) | KPI Reporting | Performance & Payroll | AI for HR", weeks: "7 weeks",
    prices: { adult: 70000 },
    intro: "Equips HR professionals and administrators to manage talent effectively and drive data-backed HR strategy using Excel, Power BI, and AI tools.",
    learn: [
      ["HR Management Fundamentals", "People management, organizational policies, workplace structure, and the employee lifecycle."],
      ["Recruitment & Talent Acquisition", "Hiring pipelines, sourcing candidates, structured interviewing, and onboarding."],
      ["HR Analytics (Excel & Power BI)", "Structuring HR data, measuring turnover and retention, and analyzing workforce metrics."],
      ["HR Dashboards & KPI Reporting", "Interactive dashboards that present human capital KPIs clearly to executives."],
      ["Performance & Payroll Management", "Performance frameworks, evaluation metrics, and structured payroll systems."],
      ["AI for HR Professionals", "Using AI tools for HR communication, job descriptions, policy drafting, and talent workflows."],
    ],
    who: ["HR assistants, generalists, and specialists adding analytical and tech skills", "Business administrators, team leaders, and operations managers handling workforce decisions", "Career switchers entering HR and Talent Acquisition", "Entrepreneurs and small business owners building internal HR systems"],
    why: "HR has become a strategic, data-driven function. Organizations want people who can analyze employee data, track attrition, optimize hiring costs, automate payroll workflows, and use AI to improve productivity.",
    careers: ["HR Analyst / HR Data Specialist", "Human Resources Generalist / Manager", "Talent Acquisition Specialist", "HR Operations Specialist", "People Analytics Coordinator"] },

  { slug: "marketing-beginner", name: "Digital Marketing \u2013 Beginner",
    tag: "Content Marketing | Social Media Marketing | Email Marketing | Digital Marketing Strategy | Analytics", weeks: "5 weekends",
    prices: { teenagers: 60000, adult: 60000 },
    intro: "For anyone who wants to understand how businesses attract, engage, and convert customers online: create content, manage social media, communicate with customers, plan strategy, and read your marketing data.",
    learn: [
      ["Content Marketing", "Content planning and strategy, and writing content that attracts and engages customers."],
      ["Social Media Marketing", "Major platforms, social media strategies, content scheduling, and audience engagement."],
      ["Email Marketing", "Email fundamentals, building an audience, effective emails, and campaigns."],
      ["Digital Marketing Strategy", "Knowing your audience, setting goals, choosing channels, and building campaigns."],
      ["Digital Marketing Analytics", "Measuring campaign performance, key metrics, and using data to improve decisions."],
    ],
    who: ["Beginners interested in digital marketing", "Students and graduates", "Business owners and entrepreneurs", "Social media managers, content creators, and freelancers", "Anyone who wants a career in digital marketing"],
    why: "Customers increasingly discover and interact with businesses online. These skills let you market your own business, work for companies, freelance for clients, or build a career in digital marketing.",
    careers: ["Digital Marketing Specialist", "Social Media Manager", "Content Marketer", "Email Marketing Specialist", "Digital Marketing Assistant", "Freelance Digital Marketer"] },

  { slug: "marketing-advanced", name: "Digital Marketing \u2013 Advanced",
    tag: "Canva & Web Building | Funnel Design | Campaign Execution | Client Management | Graphic Design & Video Editing", weeks: "7 weekends",
    prices: { teenagers: 90000, adult: 90000 },
    intro: "Move beyond the fundamentals and learn to execute complete digital marketing campaigns: create assets, build conversion-focused funnels, run campaigns, manage clients, and report results.",
    learn: [
      ["Canva Mastery & Web Building", "Advanced Canva design, marketing materials, social content, and the basics of business websites."],
      ["Funnel Design", "Marketing funnels, customer journeys, lead-generation funnels, and conversion-focused landing pages."],
      ["Campaign Execution", "Planning, audience targeting, content creation, monitoring performance, and optimizing results."],
      ["Client Management & Reporting", "Working with clients, managing projects, tracking performance, and writing professional reports."],
      ["Graphic Design & Video Editing", "Marketing graphics, social visuals, promotional materials, and video editing fundamentals."],
    ],
    who: ["Digital marketers who already know the basics", "Social media managers and content creators", "Business owners, entrepreneurs, and freelancers", "Graphic designers adding marketing skills", "Anyone who wants to manage digital marketing projects for businesses"],
    why: "Posting on social media is only one part of digital marketing. Businesses need people who can develop strategy, build customer journeys, run campaigns, analyze results, and report to clients or management.",
    careers: ["Digital Marketing Specialist", "Digital Marketing Strategist", "Social Media Manager", "Campaign Manager", "Content Strategist", "Marketing Consultant", "Client Account Manager", "Freelance Digital Marketer"] },

  { slug: "web-frontend", name: "Web Development \u2013 Frontend (Lv. 1)",
    tag: "HTML5 & CSS3 | JavaScript Fundamentals | Responsive Web Design | Version Control (Git & GitHub)", weeks: "6 weeks",
    prices: { children: 100000, teenagers: 100000, adult: 100000 },
    intro: "Build core web coding skills to design and deploy modern, responsive websites: how sites are constructed, how to write clean client-side code, and how to build user-friendly experiences.",
    learn: [
      ["HTML5 & CSS3", "Structuring pages, styling interfaces, Flexbox and Grid, and modern layouts."],
      ["JavaScript Fundamentals", "Interactivity, manipulating the DOM, handling events, and functional logic."],
      ["Responsive Web Design", "Mobile-friendly sites that adapt to phones, tablets, and desktops."],
      ["Version Control (Git & GitHub)", "Managing code, tracking updates, and collaborating with Git and GitHub."],
    ],
    who: ["Absolute beginners aiming for a software engineering career", "Graphic and UI/UX designers expanding into front-end code", "Students and graduates wanting hands-on programming experience", "Anyone who wants to build and manage websites independently"],
    why: "Every business needs a functional, appealing web presence. Frontend skills open entry-level software roles, let you build client projects, and prepare you for full-stack engineering.",
    careers: ["Junior Frontend Developer", "Web Designer / Developer", "Website Administrator", "Freelance Web Developer"] },

  { slug: "web-fullstack", name: "Web Development \u2013 Full-Stack (Lv. 2)",
    tag: "React.js | Node.js & Express | Database Management (MongoDB/SQL) | RESTful APIs & Web Deployment", weeks: "10 weeks",
    prices: { adult: 160000 },
    intro: "An intensive, practical program for complete web application development: modern JavaScript frameworks, backend server logic, API creation, and database management.",
    learn: [
      ["React.js", "Dynamic single-page applications with components, hooks, and state management."],
      ["Node.js & Express", "Server-side applications, backend middleware, and scalable server logic."],
      ["Database Management", "Database schemas, relational or NoSQL data (SQL/MongoDB), and CRUD operations."],
      ["RESTful APIs & Deployment", "Creating and consuming APIs, user authentication, and deploying apps to cloud servers."],
    ],
    who: ["Graduates of Level 1 Frontend or developers with HTML, CSS, and JavaScript knowledge", "Frontend developers moving into full-stack roles", "Software enthusiasts building end-to-end web products", "Professionals preparing for advanced web development roles"],
    why: "Companies prefer versatile developers who understand both the user experience and the backend. Full-stack skills position you for high-demand engineering roles.",
    careers: ["Full-Stack Developer / Engineer", "Backend Developer", "React.js Developer", "Web Application Engineer", "Software Engineering Consultant"] },

  { slug: "mobile-app", name: "Coding \u2013 Mobile App Development", tag: "React js | Version Control", weeks: "2 months",
    prices: { children: 100000, teenagers: 100000, adult: 100000 },
    intro: "This course covers mobile app development with React js and version control.", ...OUT },
  { slug: "backend", name: "Coding \u2013 Backend Development", tag: "Python | Node js", weeks: "2 months",
    prices: { teenagers: 200000, adult: 200000 },
    intro: "This course covers backend development with Python and Node js.", ...OUT },

  { slug: "ui-ux", name: "UI/UX Design Masterclass",
    tag: "User-Centered Design | Design Fundamentals | Design Systems & Accessibility | Digital Product Design | Design Tools | Portfolio", weeks: "10 weekends",
    prices: { adult: 140000 }, note: "All classes are recorded.",
    intro: "An intensive 10-week hands-on program through the full design process: user research, wireframing, interactive prototyping, design systems, and a professional portfolio.",
    learn: [
      ["User-Centered Design", "User research, user journeys, personas, and solving UX challenges."],
      ["Design Fundamentals", "Typography, color theory, layout grids, visual hierarchy, and UI composition."],
      ["Design Systems & Accessibility", "Reusable component libraries, scalable design systems, and accessible digital products."],
      ["Digital Product Design", "User flows, interactive wireframes, and high-fidelity prototypes for mobile and web."],
      ["Design Tools & Software", "Hands-on work with industry-standard tools such as Figma."],
      ["Design Thinking & Portfolio", "Human-centered frameworks on real projects, and a portfolio to show employers."],
    ],
    who: ["Beginners moving into digital product design", "Graphic designers expanding into UI/UX", "Web developers improving interface design", "Entrepreneurs and product managers designing software products", "Anyone building a high-growth tech career"],
    why: "Every app, website, and software platform relies on UI/UX designers to make experiences intuitive and appealing, with options at startups, corporations, or as a freelancer.",
    careers: ["UI/UX Designer", "Digital Product Designer", "User Experience Researcher", "Visual / Interaction Designer", "Freelance Product Designer"] },

  { slug: "cyber-fundamentals", name: "Cybersecurity \u2013 Fundamentals & Networking (Lv. 1)",
    tag: "Linux & Windows Security | Networking & IP Addressing | Network Security & Security Tools", weeks: "6 weeks",
    prices: { teenagers: 100000, adult: 120000 },
    intro: "Build core security and networking skills to launch your tech career: how modern networks operate, how systems are configured, and how to defend core environments against common cyber threats.",
    learn: [
      ["Linux & Windows Security", "Securing dual-OS environments, managing user access controls, and applying hardening techniques."],
      ["Networking & IP Addressing", "OSI layers, TCP/IP protocols, subnetting, IP addressing, and how data moves across secure networks."],
      ["Network Security & Tools", "Essential security software, firewalls, basic vulnerability scans, and defending network perimeters."],
    ],
    who: ["Beginners aiming to launch a career in cybersecurity", "IT support technicians and network administrators upgrading their skills", "Computer science and technology students wanting hands-on experience", "Anyone curious about how cyber threats work and how to prevent them"],
    why: "As digital adoption grows, organizations face more cyber threats every day. Strong fundamentals in networking and system security make you eligible for entry-level tech roles and prepare you for specialized security tracks.",
    careers: ["Junior Cybersecurity Analyst", "Network Security Technician", "Systems Support Specialist", "IT Security Assistant"] },

  { slug: "cyber-career", name: "Cybersecurity \u2013 Career Tracks (Lv. 2)",
    tag: "SOC Analysis | Ethical Hacking | Incident Response & Advanced Security", weeks: "9 weeks",
    prices: { teenagers: 160000, adult: 180000 },
    intro: "Master specialized defensive and offensive security skills for professional roles: threat detection, ethical penetration testing, and rapid incident handling.",
    learn: [
      ["SOC (Security Operations Center) Analysis", "Monitoring real-time security logs, analyzing SIEM alerts, and spotting suspicious activity on corporate networks."],
      ["Ethical Hacking & Penetration Testing", "Finding system vulnerabilities, understanding attack vectors, and testing perimeters safely."],
      ["Incident Response & Mitigation", "Containing breaches, limiting damage, investigating root causes, and carrying out recovery."],
    ],
    who: ["Graduates of the Level 1 program or professionals with foundational networking knowledge", "IT administrators moving into specialized cybersecurity roles", "Security enthusiasts choosing a red team or blue team track", "Professionals preparing for advanced security operations roles"],
    why: "Organizations need specialists who can respond instantly to incidents and test perimeters before attackers do. SOC analysis, ethical hacking, and incident response put you in high-demand roles.",
    careers: ["SOC Analyst (Tier 1 / Tier 2)", "Junior Penetration Tester / Ethical Hacker", "Incident Response Analyst", "Cybersecurity Consultant", "Information Security Officer"] },

  { slug: "virtual-assistant", name: "Certified Virtual Assistant Program",
    tag: "Virtual Professional Support | CRM | Social Media Management | Email Management | Scheduling | Customer Service", weeks: "7 weekends",
    prices: { adult: 70000 }, note: "Flexible payment options available.",
    intro: "Executive-level support skills for remote work: manage remote business operations, streamline communication, handle administrative duties, and support clients and executives worldwide.",
    learn: [
      ["Virtual Professional Support", "Executive assistant fundamentals, calendar organization, travel management, and document handling."],
      ["Customer Relationship Management (CRM)", "Client communications, database records, and positive customer interactions."],
      ["Social Media Management", "Scheduling content, engaging communities, and keeping a professional brand presence."],
      ["Virtual Team Collaboration", "Remote productivity software, team communication tools, and workflow coordination."],
      ["Virtual Filing & Data Management", "Cloud file storage, digital archives, and secure, searchable documentation."],
      ["Email Management & Scheduling", "Inbox management, professional correspondence, and calendars across time zones."],
      ["Customer Service Excellence", "Prompt, professional support across chat, email, and virtual channels."],
    ],
    who: ["People who want flexible remote work from home", "Administrative assistants, secretaries, and receptionists moving into remote roles", "Freelancers offering structured executive assistance", "Students and graduates building administrative and digital skills", "Anyone seeking a flexible entry into the remote workforce"],
    why: "Remote work has created strong demand for virtual assistants who can run daily operations independently, with opportunities to freelance on global platforms or work with international business leaders.",
    careers: ["Executive Virtual Assistant", "Administrative Support Specialist", "Remote Operations Coordinator", "Customer Support / Client Success Specialist", "Freelance Virtual Assistant"] },
]

// Courses that only appear in the Word documents (not on the flyer). Remove a slug from this list to show it again.
const HIDDEN = ["graphics-canva", "graphics-photoshop", "graphics-illustrator", "data-science", "hr-analytics", "web-fullstack", "ui-ux", "virtual-assistant"]

export const COURSES = RAW.filter((c) => !HIDDEN.includes(c.slug)).map((c) => {
  const vals = Object.values(c.prices)
  return { ...c, price: Math.min(...vals), tiers: vals.map((n) => n / 1000 + "k").join(" / ") }
})

export const ageGroupsOf = (c) => AGE_GROUPS.filter((g) => c.prices[g.key])
// Payment test course (N300). Hidden from the public list. Open /register?course=payment-test to use it.
// Delete these two lines when testing is finished (and restore the courseBySlug line below).
export const TEST_COURSE = { slug: "payment-test", name: "Payment Test", tag: "Test payment", weeks: "-", prices: { adult: 300 }, price: 300, tiers: "0.3k", intro: "Test course used to try the payment flow.", learn: [], who: [], why: "", careers: [] }
export const courseBySlug = (slug) => COURSES.find((c) => c.slug === slug) || (slug === TEST_COURSE.slug ? TEST_COURSE : undefined)
export const tagText = (c) => (c.tag || "").split(" | ").join(" \u2022 ")
export const naira = (n) => "\u20A6" + Number(n).toLocaleString("en-NG")