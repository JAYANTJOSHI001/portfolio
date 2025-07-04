import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Jayant Joshi",
  initials: "JJ",
  url: "https://jayantjoshi.me",
  location: "Ludhiana, Punjab, India",
  locationLink: "https://maps.app.goo.gl/RG2ULtoGzbaawwCH9",
  description:
    "Crafting Solutions, One Line of Code at a Time.",
  summary:
    "**Curiosity, creativity, and code** – that's the triad that fuels my journey. As a B.Tech student at **NIT Jalandhar**, I've turned my passion for problem-solving into impactful, real-world tech solutions. Starting out as a **UI/UX designer**, I evolved into a **frontend developer** and now thrive in **full stack development**—building platforms like Resourcify to empower educators and enhancing performance systems during my SDE internship at iRoots. My drive to explore led me into the realm of **Machine Learning**, pushing the boundaries of what I could build. Whether I'm prototyping new ideas, optimizing user experiences, or scaling full-stack applications, I believe in merging **design thinking** with **engineering precision**. Making it to the Top 100 in the **Google Solution Challenge 2025** affirmed my belief in tech as a force for good—and I'm just getting started. Off the screen, you'll catch me sketching, ideating, or diving into the next big thing in tech. For me, it's about creating with purpose, learning endlessly, and leaving a meaningful mark through innovation.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "JavaScript",
    "Flutter",
    "Tailwind CSS",
    "Firebase",
    "React Native",
    "Express.js",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://medium.com/@jayantjoshi0001", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "jayantjoshi0001@gmail.com",
    tel: "+91-98882-37022",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/JAYANTJOSHI001",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jayant-joshi-642a79305/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/JayantJoshi_",
        icon: Icons.x,

        navbar: true,
      },
      Behance: {
        name: "Behance",
        url: "https://www.behance.net/jayantjoshi_",
        icon: Icons.behance,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:example@example.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "iRoots",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Software Engineer Intern",
      logoUrl: "#",
      start: "June 2024",
      end: "Aug 2024",
      description:
        "Developed a compiler module and a software optimization tool, boosting efficiency by 40%. Automated workflows, increasing productivity by 35%. Collaborated on redesigning system components to ensure scalability and seamless deployment.",
    },
  ],
  education: [
    {
      school: "Buildspace",
      href: "https://buildspace.so",
      degree: "s5",
      logoUrl: "/buildspace.jpg",
      start: "2023",
      end: "2024",
    },
    {
      school: "Dr BR Ambedkar National Institute of Technology, Jalandhar",
      href: "https://www.nitj.ac.in/",
      degree: "Bachelors of Technology in Chemical Engineering",
      logoUrl: "/nitj.png",
      start: "2023",
      end: "2027",
    },
  ],
  projects: [
    {
      title: "Myriad",
      href: "https://github.com/Jagjit0306/Myriad",
      dates: "Mar 2025",
      active: true,
      description:
        "An inclusive platform designed for specially-abled individuals, integrating AI-powered accessibility tools like speech-to-text, text-to-speech, Braille vibrations, and community-driven support.",
      technologies: [
        "Flutter",
        "Firebase",
        "Google Vision API",
        "Google Gemini API",
        "Google Maps API",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Jagjit0306/Myriad",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "APK",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://github.com/Jagjit0306/Myriad/releases/tag/v0.1.0",
        },
        {
          type: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=6TVBvX6TG5s",
        },
      ],
      image: "/Myriad.png",
      video: "",
    },
    {
      title: "Collab",
      href: "https://collllab.netlify.app/",
      dates: "Mar 2025",
      active: true,
      description:
        "A real-time collaborative coding platform with live code editing, GitHub integration, version control, and instant synchronization using WebSockets.",
      technologies: [
        "Next.js",
        "React.js",
        "TypeScript",
        "Node.js",
        "MongoDB",
        "Socket.IO",
        "Tailwind CSS",
        "Framer Motion",
      ],
      links: [
        {
          type: "Medium",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/@jayantjoshi0001/what-if-vs-code-was-multiplayer-9d2cf85a536a",
        },
        {
          type: "Website",
          href: "https://collllab.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/JAYANTJOSHI001/collab-code",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Collab.png",
      video: "",
    },    
    {
      title: "Deekode",
      href: "https://deekode.netlify.app/",
      dates: "Dec 2024 - Jan 2025",
      active: true,
      description:
        "Engineered an intuitive appointment scheduling system integrated with automated email confirmations and reminders. Created a dynamic dashboard for clients to track their financial documents, tax deadlines, and communication history with the firm.",
      technologies: [
        "Next.js",
        "Typescript",
        "Mongodb",
        "Express.js",
        "TailwindCSS",
        "Node.js",
        "Radix UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://deekode.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/deekode.png",
      video:
        "",
    },
    {
      title: "Resourcify",
      href: "https://resourcifycourse.netlify.app/",
      dates: "June 2024 - August 2024",
      active: true,
      description:
        "Implemented a feature-rich course management system with customizable templates and multimedia support, allowing educators to create engaging content through drag-and-drop functionality and rich text editing.",
      technologies: [
        "React.js",
        "Node.js",
        "Mongodb",
        "Express.js",
        "Chakra UI",
        "Stripe API",
      ],
      links: [
        {
          type: "Website",
          href: "https://resourcifycourse.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/JAYANTJOSHI001/Resourcify_Courses",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/resourcify.png",
      video: "",
    },
    {
      title: "Scrapcon",
      href: "https://devfolio.co/projects/scrapcon-8413",
      dates: "Feb 2025",
      active: true,
      description:
        "To transform the traditional scrap-selling ecosystem in India by connecting customers with verified scrap vendors through a digital platform.",
      technologies: [
        "Flutter",
        "Google Vision API",
        "Mongodb",
        "Google Gemini API",
        "Node.js",
        "Expres.js",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/gurshaan17/scrapconApp",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Scrapcon.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Top 100 in Google Solution Challenge",
      dates: "Jan 06th - July 2025",
      location: "Online",
      description:"An Adaptive Accessibility App for Specially Abled Individuals.",
      image:
        "/gsc.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        // {
        //   title: "Medium Article",
        //   icon: <Icons.globe className="h-4 w-4" />,
        //   href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        // },
        {
          title: "APK",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://github.com/Jagjit0306/Myriad/releases/tag/v0.1.0",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=6TVBvX6TG5s",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Jagjit0306/Myriad",
        },
      ],
    },
    {
      title: "HackTU",
      dates: "Feb 08rd - 09th, 2025",
      location: "Patiala, Punjab, India",
      description:
        "An app for scrap vendors.",
      image:
        "/889.webp",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        // {
        //   title: "Medium Article",
        //   icon: <Icons.globe className="h-4 w-4" />,
        //   href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        // },
        {
          title: "Devfolio",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devfolio.co/projects/scrapcon-8413",
        },
        // {
        //   title: "YouTube",
        //   icon: <Icons.youtube className="h-4 w-4" />,
        //   href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        // },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/gurshaan17/scrapconApp",
        },
      ],
    },
    {
      title: "SWOC",
      dates: "Jan 11th - 31th, 2025",
      location: "Online",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "/SWOC.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 11rd - 13th, 2025",
      location: "Online",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        // {
        //   title: "Github",
        //   icon: <Icons.github className="h-4 w-4" />,
        //   href: "https://github.com/cryptotrends/cryptotrends",
        // },
      ],
    },

  ],
} as const;
