import type { Config } from "@/src/types";

export const enConfig: Config = {
  name: "SHANG CHENG",
  welcome: "👋 Hi there, I am",
  titles: ["Theoretical Physics Researcher", "World Explorer"],
  avatar:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
  bgImage:
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop",
  medias: [
    {
      icon: "fa-solid fa-envelope",
      name: "RIKEN Email",
      link: "mailto:cheng.shang@riken.jp",
    },
    {
      icon: "fa-brands fa-google",
      name: "Gmail",
      link: "mailto:shangc1204@gmail.com",
    },
    {
      icon: "fa-brands fa-orcid",
      name: "ORCID",
      link: "https://orcid.org/0000-0001-8393-2329",
    },
    {
      icon: "fa-solid fa-graduation-cap",
      name: "Google Scholar",
      link: "https://scholar.google.com/citations?user=-k8PWr8AAAAJ",
    },
    {
      icon: "fa-solid fa-flask-vial",
      name: "iNSPIRE",
      link: "https://inspirehep.net/authors/2662928",
    },
    {
      icon: "fa-brands fa-x-twitter",
      name: "X",
      link: "https://x.com/Shangc1204",
    },
  ],
  navbar: {
    links: [
      { label: "Profile", anchor: "#profile" },
      { label: "Education", anchor: "#education" },
      { label: "News", anchor: "#news" },
      { label: "Theses", anchor: "#theses" },
      { label: "Publications", anchor: "#publications" },
      { label: "Gallery", anchor: "#gallery" },
    ],
  },
  footer: {
    copyright: "© 2025 SHANG CHENG. All rights reserved.",
    description: "Built with Physics and Love.",
  },
  contents: [
    {
      type: "profile",
      id: "profile",
      title: "Profile",
      icon: "fa-user-tie",
      data: {
        affiliation: "Analytical Quantum Complexity RIKEN Hakubi Research Team",
        contact: [
          { label: "RIKEN Email", value: "cheng.shang@riken.jp" },
          { label: "Gmail", value: "shangc1204@gmail.com" },
          { label: "UTokyo Email", value: "c-shang@iis.u-tokyo.ac.jp" },
        ],
        interests: ["B-boying (Breaking)", "Gomoku", "Music", "Running"],
        quote:
          "Theoretical physics is the pursuit of understanding the fundamental structure of reality through logic and beauty.",
      },
    },
    {
      type: "experience",
      id: "education",
      title: "Education",
      icon: "fa-graduation-cap",
      data: [
        {
          type: "work",
          place: "Center for Quantum Computing, RIKEN Hakubi Research Team",
          time: "Oct. 2024 - Present",
          title:
            "Postdoctoral Researcher, with Dr. <a href='https://kuwahara-quantum.com/en/' target='_blank'>Tomotaka Kuwahara</a>",
        },
        {
          type: "work",
          place: "Center for Quantum Computing, RIKEN Hakubi Research Team",
          time: "Apr. 2023 - Sep. 2024",
          title:
            "Junior Research Associate, with Dr. <a href='https://kuwahara-quantum.com/en/' target='_blank'>Tomotaka Kuwahara</a>",
        },
        {
          type: "study",
          place: "The University of Tokyo, Japan",
          time: "Oct. 2021 - Sep. 2024",
          title:
            "Ph.D. with Prof. <a href='http://hatano-lab.iis.u-tokyo.ac.jp/index-e.html' target='_blank'>Naomichi Hatano</a>",
          content: "Department of Physics",
        },
        {
          type: "study",
          place: "Northeast Normal University, China",
          time: "Sep. 2017 - Jun. 2020",
          title:
            "Master of Science, with Prof. <a href='https://cqs.nenu.edu.cn/' target='_blank'>XueXi Yi</a>",
          description: "School of Physics",
        },
      ],
    },
    {
      type: "banner",
      id: "cfp",
      title: "Call for Papers",
      icon: "fa-bullhorn",
      subtitle: "Special Collection: Exception Points in non-Hermitian Systems",
      data: {
        content:
          "**Journal**: Discover Physics (Springer Nature)\n\nFor inquiries, please contact: cheng.shang@riken.jp or shenhz458@nenu.edu.cn",
        deadline: "21 April, 2026",
        actions: [
          {
            label: "Submit & Learn More",
            link: "https://link.springer.com/collections/djheehghia",
            primary: true,
          },
        ],
      },
    },
    {
      type: "timeline",
      id: "news",
      title: "News",
      icon: "fa-newspaper",
      data: [
        {
          year: "2025",
          content:
            'Our work on "[Topological Quantum Batteries](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.134.180401)" was featured in [PRL Trending](https://x.com/PhysRevLett/status/1924474721149542443).',
        },
        {
          year: "2024",
          content:
            "Joined the Kuwahara team as a Postdoctoral Researcher on October 1st.",
        },
        {
          year: "2024",
          content:
            "Received Ph.D. degree from the University of Tokyo on September 20.",
        },
      ],
    },
    {
      type: "cards",
      id: "theses",
      title: "Theses",
      icon: "fa-book",
      data: [
        {
          title:
            "Suppression of Decoherence in Open Quantum Systems: Resonance and Topological Effects",
          subtitle: "Doctoral Dissertation",
          link: "http://hatano-lab.iis.u-tokyo.ac.jp/thesis/dron2024/thesis_shang.pdf",
        },
        {
          title:
            "Nonreciprocal Transmission Based on Modulated Optomechanical Systems",
          subtitle: "Master’s Thesis",
          link: "https://service.cnki.net/KCMS/detail/detail.aspx?dbcode=CMFD&dbname=CMFD202101&filename=1020826922.nh&uniplatform=OVERSEA",
        },
      ],
    },
    {
      type: "list",
      id: "publications",
      title: "Publications",
      icon: "fa-scroll",
      config: { listType: "ol", listStyle: "none" },
      data: [
        {
          text: "Zhi-Guang Lu, Guo-Qing Tian, Xin-You Lü, and Cheng Shang, Topological Quantum Batteries, Phys. Rev. Lett. 134, 180401 (2025)",
          link: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.134.180401",
        },
        {
          text: "Bo-Wang Zhang, Cheng Shang, J. Y. Sun, Zhuo-Cheng Gu, and X. X. Yi, Manipulating spectral transitions and photonic transmission in a non-Hermitian optical system through nanoparticle perturbations, Phys. Rev. A 111, 063702 (2025)",
          link: "https://journals.aps.org/pra/abstract/10.1103/PhysRevA.111.063702",
        },
      ],
    },
    {
      type: "gallery",
      id: "gallery",
      title: "Gallery",
      icon: "fa-images",
      data: [
        {
          url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1000&auto=format&fit=crop",
          title: "PHHQP-XXI Workshop",
          location: "Chania, Greece",
          date: "2024",
          description:
            "Presenting my research on open quantum systems. The discussions overlooking the Mediterranean were truly inspiring.",
        },
        {
          url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop",
          title: "Mountain Hiking",
          location: "Japan Alps",
          date: "2023",
          description:
            "Recharging amidst the breathtaking landscapes of the Japan Alps. Nature provides a perfect backdrop for deep reflection.",
        },
        {
          url: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=1000&auto=format&fit=crop",
          title: "Breaking Practice",
          location: "Tokyo",
          date: "2024",
          description:
            "Dynamics exist in movement too. Breaking (B-boying) has been my passion for years, teaching me discipline and creative expression.",
        },
        {
          url: "https://images.unsplash.com/photo-1543168256-418811576931?q=80&w=1000&auto=format&fit=crop",
          title: "Gomoku Strategy",
          location: "Kyoto",
          date: "2023",
          description:
            "The elegance of logic in a board game. Gomoku is a great way to train strategic thinking outside of physics.",
        },
        {
          url: "https://images.unsplash.com/photo-1502224562085-639556652f33?q=80&w=1000&auto=format&fit=crop",
          title: "Early Morning Run",
          location: "Tokyo Bay",
          date: "2024",
          description:
            "Running helps me maintain a clear mind. It is the best way to start a day of intense theoretical research.",
        },
        {
          url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1000&auto=format&fit=crop",
          title: "Physics Library",
          location: "UTokyo",
          date: "2024",
          description:
            "The sanctuary of knowledge where most of my doctoral dissertation took shape.",
        },
      ],
    },
    {
      type: "paragraph",
      id: "closing",
      title: "Looking Forward",
      icon: "fa-star",
      data: "I am always looking for collaborative opportunities at the intersection of **quantum complexity** and **open quantum systems**. Feel free to reach out for research discussions or joint explorations of the fundamental structures of our universe.",
    },
  ],
};
