import type { Config } from "@/src/types";

export const zhConfig: Config = {
  name: "尚  程",
  welcome: "👋 你好，我是",
  titles: ["理论物理研究员", "世界探索者", "量子爱好者"],
  avatar:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
  bgImage:
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop",
  medias: [
    {
      icon: "fa-solid fa-envelope",
      name: "RIKEN 邮箱",
      link: "mailto:cheng.shang@riken.jp",
    },
    {
      icon: "fa-brands fa-google",
      name: "谷歌邮箱",
      link: "mailto:shangc1204@gmail.com",
    },
    {
      icon: "fa-brands fa-orcid",
      name: "ORCID",
      link: "https://orcid.org/0000-0001-8393-2329",
    },
    {
      icon: "fa-solid fa-graduation-cap",
      name: "谷歌学术",
      link: "https://scholar.google.com/citations?user=-k8PWr8AAAAJ&hl=zh-CN",
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
      { label: "个人简介", anchor: "#profile" },
      { label: "教育经历", anchor: "#education" },
      { label: "新闻动态", anchor: "#news" },
      { label: "研究成果", anchor: "#publications" },
      { label: "相册", anchor: "#gallery" },
    ],
  },
  footer: {
    copyright: "© 2025 尚 程. 保留所有权利。",
    description: "以物理之名，致敬热爱。",
  },
  contents: [
    {
      type: "profile",
      id: "profile",
      title: "个人简介",
      icon: "fa-user-tie",
      data: {
        affiliation: "RIKEN Hakubi 研究团队 分析量子复杂性研究组",
        contact: [
          { label: "RIKEN 邮箱", value: "cheng.shang@riken.jp" },
          { label: "Gmail", value: "shangc1204@gmail.com" },
          { label: "东京大学邮箱", value: "c-shang@iis.u-tokyo.ac.jp" },
        ],
        interests: ["街舞 (Breaking)", "五子棋", "音乐", "跑步"],
        quote: "理论物理是对通过逻辑与美感来理解现实基本结构的追求。",
      },
    },
    {
      type: "experience",
      id: "education",
      title: "教育经历",
      icon: "fa-graduation-cap",
      data: [
        {
          type: "work",
          place: "量子计算中心，分析量子复杂性 RIKEN Hakubi 研究团队",
          time: "2024 年 10 月 - 至今",
          title:
            "博士后，和 <a href='https://kuwahara-quantum.com/en/' target='_blank'>桑原知剛</a> 博士",
        },
        {
          type: "work",
          place: "量子计算中心，分析量子复杂性 RIKEN Hakubi 研究团队",
          time: "2023 年 4 月 - 2024 年 9 月",
          title:
            "初级研究员，和 <a href='https://kuwahara-quantum.com/en/' target='_blank'>桑原知剛</a> 博士",
        },
        {
          type: "study",
          place: "东京大学，日本",
          time: "2021 年 10 月 - 2024 年 9 月",
          title:
            "博士，和 <a href='http://hatano-lab.iis.u-tokyo.ac.jp/index-e.html' target='_blank'>羽田野直道</a> 教授",
          content: "物理系",
        },
        {
          type: "study",
          place: "留日预校，中国",
          time: "2020 年 10 月 - 2021 年 8 月",
          content: "中国留日预校 MEXT 博士奖学金候选人",
        },
        {
          type: "study",
          place: "东北师范大学，中国",
          time: "2017 年 9 月 - 2020 年 6 月",
          title:
            "理学硕士，和 <a href='https://cqs.nenu.edu.cn/' target='_blank'>衣学喜</a> 教授",
          description: "物理学院",
        },
      ],
    },
    {
      type: "banner",
      id: "cfp",
      title: "特刊征稿",
      icon: "fa-bullhorn",
      subtitle: "Special Collection: Exception Points in non-Hermitian Systems",
      data: {
        content:
          "**期刊**: Discover Physics (Springer Nature)\n\n如有疑问，请联系: cheng.shang@riken.jp 或 shenhz458@nenu.edu.cn",
        deadline: "2026 年 4 月 21 日",
        actions: [
          {
            label: "投稿与详情",
            link: "https://link.springer.com/collections/djheehghia",
            primary: true,
          },
        ],
      },
    },
    {
      type: "timeline",
      id: "news",
      title: "新闻动态",
      icon: "fa-newspaper",
      data: [
        {
          year: "2025",
          content:
            "我们的工作“[拓扑量子电池](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.134.180401)”入选 [PRL Trending](https://x.com/PhysRevLett/status/1924474721149542443)。",
        },
        {
          year: "2025",
          content:
            "我们的工作“[拓扑量子电池](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.134.180401)”被 [RIKEN](https://www.riken.jp/press/2025/20250513_2/index.html) 发布新闻稿报道。",
        },
        {
          year: "2024",
          content:
            "10 月 1 日，作为特别研究员（博士后）加入[桑原团队](https://kuwahara-quantum.com/en/people/)。",
        },
        {
          year: "2024",
          content: "9 月 20 日，获东京大学博士学位（证书编号：HAKU RI 7661）。",
        },
        {
          year: "2022",
          content: "作为组委会成员，组织“统计与量子物理秋冬学校”研讨会。",
        },
      ],
    },
    {
      type: "list",
      id: "awards",
      title: "荣誉与奖项",
      icon: "fa-trophy",
      config: { listType: "ul", listStyle: "check" },
      data: [
        {
          text: "**2024** 邀请报告，[第 21 届赝厄密哈密顿量量子物理学国际研讨会 (PHHQP-XXI)](https://events.physics.uoc.gr/event/1/page/5-speakers)",
        },
        {
          text: "**2023** 最佳海报奖，[第 5 届量子物理与量子信息科学国际研讨会 (QPQIS-2023)](http://www.baqis.ac.cn/news/detail/?cid=1879)",
        },
        { text: "**2021** 日本政府 (MEXT) 博士奖学金" },
        { text: "**2019** 中国研究生国家奖学金" },
      ],
    },
    {
      type: "cards",
      id: "theses",
      title: "学位论文",
      icon: "fa-book",
      data: [
        {
          title: "开放量子系统中的退相干抑制：共振与拓扑效应",
          subtitle: "博士论文",
          link: "http://hatano-lab.iis.u-tokyo.ac.jp/thesis/dron2024/thesis_shang.pdf",
        },
        {
          title: "基于可控光力系统的非互易传输",
          subtitle: "硕士论文",
          link: "https://kns.cnki.net/kcms2/article/abstract?v=sKJ9SXrFdEp3keNUa73wzZt2qsRh5sWMxp5xQXa5xpBeTgFa1dFLKxs8M76AJIPfu9z0sGis4GQV4nGLHFPKoy1SHuG1EKoQBfxTZbDpPTdVr8t6MkR_5gBEUgaza4vOHMjGLqFT4ignRy17YZpEbU2JEKK8t6AyW5ra24e4BX52qtBj5VUVcz2R5MufKnOYWiJbdYuAjEI=&language=CHS",
        },
      ],
    },
    {
      type: "list",
      id: "publications",
      title: "期刊论文",
      icon: "fa-scroll",
      config: { listType: "ol", listStyle: "none" },
      data: [
        {
          text: "[Zhi-Guang Lu, Guo-Qing Tian, Xin-You Lü, and Cheng Shang, Topological Quantum Batteries, Phys. Rev. Lett. 134, 180401 (2025)](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.134.180401)",
        },
        {
          text: "[Bo-Wang Zhang, Cheng Shang, J. Y. Sun, Zhuo-Cheng Gu, and X. X. Yi, Manipulating spectral transitions and photonic transmission in a non-Hermitian optical system through nanoparticle perturbations, Phys. Rev. A 111, 063702 (2025)](https://journals.aps.org/pra/abstract/10.1103/PhysRevA.111.063702)",
        },
        {
          text: "[Cheng Shang and Hong-Chao Li, Resonance-dominant optomechanical entanglement in open quantum systems, Physical Review Applied 21 (4), 044048 (2024)](https://journals.aps.org/prapplied/abstract/10.1103/PhysRevApplied.21.044048)",
        },
        {
          text: "[Zhi-Guang Lu, Cheng Shang, Ying Wu, and Xin-You Lü, Analytical approach to higher-order correlation functions in U(1) symmetric systems, Physical Review A 108, 053703 (2023)](https://journals.aps.org/pra/abstract/10.1103/PhysRevA.108.053703)",
        },
      ],
    },
    {
      type: "list",
      id: "preprints",
      title: "预印本论文",
      icon: "fa-clock-rotate-left",
      config: { listType: "ol", listStyle: "none" },
      data: [
        {
          text: "[Donghoon Kim et al., Spectral Small-Incremental-Entangling, arXiv:2509.12014 (2025)](https://arxiv.org/abs/2509.12014)",
        },
        {
          text: "[Cheng Shang et al., Operator Spreading and Information Propagation: Equivalence and Beyond, arXiv:2505.07955 (2025)](https://arxiv.org/abs/2505.07955)",
        },
      ],
    },
    {
      type: "list",
      id: "acknowledgments",
      title: "获致谢工作",
      icon: "fa-heart",
      config: { listType: "ol", listStyle: "none" },
      data: [
        {
          text: "[Yue-Zhou Li, Stochastic inflation as an open quantum system, arXiv: 2507.02070 (2025)](https://arxiv.org/abs/2507.02070)",
        },
        {
          text: "[Tomotaka Kuwahara, Clustering of conditional mutual information, arXiv: 2407.05835 (2024)](https://arxiv.org/abs/2407.05835)",
        },
      ],
    },
    {
      type: "list",
      id: "patents",
      title: "专利",
      icon: "fa-certificate",
      config: { listType: "ul", listStyle: "check" },
      data: [
        {
          text: "[Cheng Shang et al., 测灰度机械随机数生成器及其使用方法, CN Patent CN108,958,706 B (2023)](https://patents.google.com/patent/CN108958706B/zh)",
        },
      ],
    },
    {
      type: "gallery",
      id: "gallery",
      title: "相册",
      icon: "fa-images",
      data: [
        {
          url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1000&auto=format&fit=crop",
          title: "学术会议报告",
          location: "希腊，哈尼亚",
          date: "2024",
          description:
            "在 PHHQP-XXI 研讨会上分享关于开放量子系统的研究。在这一充满历史气息的海滨城市与全球同行交流，碰撞出许多科研灵感的火花。",
        },
        {
          url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop",
          title: "山间漫步",
          location: "日本阿尔卑斯山",
          date: "2023",
          description:
            "在自然的怀抱中寻找平衡。徒步远行是我在繁忙科研之余，清空思绪、重新获取能量的最佳方式。",
        },
        {
          url: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=1000&auto=format&fit=crop",
          title: "街舞练功房",
          location: "东京",
          date: "2024",
          description:
            "动态与复杂性同样存在于肢体动作中。多年的街舞练习让我学会了自律，更在节奏与对抗中找到了另一种表达自我的语言。",
        },
        {
          url: "https://images.unsplash.com/photo-1543168256-418811576931?q=80&w=1000&auto=format&fit=crop",
          title: "五子棋博弈",
          location: "京都",
          date: "2023",
          description:
            "逻辑的优雅在棋盘上流淌。五子棋是物理研究之外极佳的思维训练方式。",
        },
        {
          url: "https://images.unsplash.com/photo-1502224562085-639556652f33?q=80&w=1000&auto=format&fit=crop",
          title: "晨跑时光",
          location: "东京湾",
          date: "2024",
          description:
            "跑步让我保持头脑清醒，是开启一天高强度理论研究的最好方式。",
        },
        {
          url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1000&auto=format&fit=crop",
          title: "物理系图书馆",
          location: "东京大学",
          date: "2024",
          description: "知识的殿堂，我的博士论文大部分内容在这里成型。",
        },
      ],
    },
    {
      type: "paragraph",
      id: "closing",
      title: "未来展望",
      icon: "fa-star",
      data: "我始终期待在 **量子复杂性** 与 **开放量子系统** 的交叉领域展开合作。如果您对科研讨论或共同探索宇宙的基本结构感兴趣，欢迎通过邮箱与我联系。",
    },
  ],
};
