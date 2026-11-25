// Drafted from the course names for courses that have no Word document. The client should review these.
const EXTRAS = {
  "computer-basic": {
    intro: "Build the everyday computer skills every student and professional needs: confident use of Windows and the Microsoft Office tools used in schools, offices, and businesses.",
    learn: [
      ["Windows Essentials", "Navigating the desktop, managing files and folders, changing settings, and keeping your computer organized."],
      ["Microsoft Word", "Creating, formatting, and printing professional documents such as letters, CVs, and reports."],
      ["Microsoft Excel", "Entering data, building tables, and using basic formulas and charts to organize and calculate."],
      ["Microsoft PowerPoint", "Designing clear slide presentations with text, images, and simple animations."],
    ],
    who: ["Complete beginners who are new to computers", "Children and teenagers learning essential computer skills", "Students preparing for school and exam work", "Job seekers and office staff who need Microsoft Office skills"],
    why: "Computer literacy is the starting point for almost every course and career. Strong Windows and Office skills help you study, work, and communicate faster.",
    careers: ["Administrative Assistant", "Data Entry Clerk", "Office Assistant", "Receptionist / Front Desk Officer"],
  },
  "google-canva": {
    intro: "Learn to work, collaborate, and design online with Google Suite and Canva. Create documents, spreadsheets, and presentations in the cloud, then make eye-catching visuals without any design background.",
    learn: [
      ["Google Docs & Drive", "Writing and sharing documents, and storing and organizing files in the cloud."],
      ["Google Sheets & Slides", "Building spreadsheets and presentations, and working on them together in real time."],
      ["Google Meet & Forms", "Hosting online meetings and creating forms and surveys to collect responses."],
      ["Canva Design", "Using templates, fonts, and colors to design social media posts, flyers, and presentations."],
    ],
    who: ["Beginners who want to work online and in the cloud", "Students and teachers collaborating on class work", "Small business owners creating their own flyers and posts", "Children and teenagers learning practical digital skills"],
    why: "Google Suite and Canva are easy to learn and used everywhere, from classrooms to businesses. They let you produce professional work quickly from any device.",
    careers: ["Virtual / Administrative Assistant", "Social Media Content Creator", "Office Administrator", "Entry-Level Freelance Designer"],
  },
  "scratch-robotics": {
    intro: "A fun, hands-on introduction to coding for children. Using Scratch, young learners build games and animations and discover how robots follow instructions.",
    learn: [
      ["Coding with Scratch", "Snapping together code blocks to make characters move, talk, and react."],
      ["Games & Animations", "Building simple games and stories while learning loops, events, and conditions."],
      ["Logical Thinking", "Breaking problems into small steps and fixing mistakes, the core skill behind all programming."],
      ["Robotics Basics", "Learning how robots receive instructions and carry out tasks."],
    ],
    who: ["Children who are curious about computers and games", "Parents who want screen time to build real skills", "Young learners with no coding experience"],
    why: "Coding builds problem-solving, creativity, and confidence. Starting early with Scratch gives children a strong foundation for future programming languages.",
    careers: ["Future Software Developer", "Robotics Engineer", "Game Designer", "Creative Technologist"],
  },
  "mobile-app": {
    intro: "Learn to build mobile app interfaces with React and manage your code with version control, the way professional developers do.",
    learn: [
      ["React Fundamentals", "Components, props, state, and hooks, the building blocks of modern apps."],
      ["Building App Screens", "Designing responsive screens, navigation, forms, and lists that work well on phones."],
      ["Working with Data", "Fetching information from APIs and displaying it in your app."],
      ["Version Control (Git & GitHub)", "Saving, tracking, and sharing your code, and collaborating with other developers."],
    ],
    who: ["Beginners and teenagers ready to start app development", "Frontend developers moving into mobile apps", "Students building portfolio projects", "Entrepreneurs with an app idea"],
    why: "Mobile apps are how most people use technology every day. React skills and a Git workflow are in demand for developers building apps and web products.",
    careers: ["Mobile App Developer", "React Developer", "Frontend Developer", "Freelance App Developer"],
  },
  "backend": {
    intro: "Learn how websites and apps work behind the scenes. With Python and Node js you will build servers, work with databases, and create the APIs that power real applications.",
    learn: [
      ["Python Programming", "Core Python: variables, functions, data structures, and problem solving."],
      ["Node js Servers", "Building server-side applications and routes with Node js."],
      ["Databases & APIs", "Storing and retrieving data, and creating APIs that apps can use."],
      ["Authentication & Security Basics", "Handling user sign-in and protecting application data."],
    ],
    who: ["Learners who know programming basics and want to go deeper", "Frontend developers moving into full-stack work", "Computer science students building practical skills", "Anyone who wants to build the logic behind apps"],
    why: "Every app needs a backend to store data, handle users, and run business logic. Python and Node js are widely used, which makes this a strong path into software engineering.",
    careers: ["Backend Developer", "Software Engineer", "API Developer", "Full-Stack Developer (with frontend skills)"],
  },
}

export const withExtras = (c) => {
  const x = EXTRAS[c.slug]
  return x && (!c.learn || c.learn.length === 0) ? { ...c, ...x } : c
}