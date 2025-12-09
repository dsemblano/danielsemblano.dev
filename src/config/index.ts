import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Daniel Semblano — Full Stack Developer",
  author: "Daniel Semblano",
  description:
    "Full Stack Developer with experience in SEO, JAMstack (Astro, React, Node.js), and the Roots.io stack (Trellis, Bedrock, Sage) for WordPress and WooCommerce e-commerces websites, delivering performant, scalable, and maintainable web solutions.",
  lang: "en",
  siteLogo: "/eu1-small.jpg",
  navLinks: [
    { text: "Projects", href: "#projects" },
    { text: "Experience", href: "#experience" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Twitter", href: "https://x.com/dsemblano" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/danielsemblano/" },
    { text: "Github", href: "https://github.com/dsemblano" },
    // { text: "Youtube", href: "https://github.com/immois/astro-zen" },
    // { text: "Dribbble", href: "https://github.com/immois/astro-zen" },
  ],
  socialImage: "/og.png",
  canonicalURL: "https://danielsemblano.dev",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Daniel Semblano",
    specialty: "Full Stack Developer",
    summary:
      "Full Stack Developer with experience in SEO, JAMstack (Astro, React, Node.js), and the Roots.io stack (Trellis, Bedrock, Sage) for WordPress and WooCommerce e-commerces websites, delivering performant, scalable, and maintainable web solutions.",
    email: "hello@danielsemblano.dev",
  },
  experience: [ 
    {
      company: "Néctar da Amazônia",
      position: "Full Stack Developer",
      startDate: "01/02/2025",
      endDate: "ongoing",
      summary: [
        "Creation and development of the websites carloslobato.com.br and pros90amapa.org.br using the Roots.io stack (now deactivated).",
        "Support on social media, administration of the Twitter accounts for both, etc.",
      ],
    },
    {
      company: "Intelmax-IP​",
      position: "Freelancer Web Developer",
      startDate: "15/11/2021",
      endDate: "21/02/2022",
      summary: [
        "SEO improvements and added features to intelmax-ip.com website located in Dubai.",
      ],
    },
    {
      company: "Paradox Zero",
      position: "Full Stack Developer",
      startDate: "01/03/2016",
      endDate: "29/07/2016",
      summary: [
        "Full Stack Wordpress Developer, LAMP,starter theme Underscores and JointsWP.",
      ],
    },
    {
      company: "Pitang IT",
      position: "Web Developer",
      startDate: "18/02/2014",
      endDate: "16/02/2016",
      summary: [
        "Projects with PHP, Drupal (7) and Liferay.",
      ],
    },
    {
      company: "Mirai Totalle",
      position: "Web Developer",
      startDate: "01/11/2011",
      endDate: "22/11/2013",
      summary: [
        "Web Developer for Gastroonline website (magazine about cousine).",
        "User support,network, email, hardware, etc.",
      ],
    },
    {
      company: "Refinaria Promocional",
      position: "Web Developer",
      startDate: "01/05/2010",
      endDate: "25/03/2011",
      summary: [
        "Web developer using CodeIgniter, Zend, Drupal CMS (6 and 7) and WordPress.",
      ],
    },
    {
      company: "Ometz Group",
      position: "Web Developer",
      startDate: "24/07/2008",
      endDate: "05/02/2009",
      summary: [
        "Web Developer using CodeIgniter, Expression Engine and Wordpress.",
      ],
    },
  ],
  projects: [
    {
      name: "Néctar da Amazônia",
      summary: "A startup based in Amapá, Brazil, working to foster sustainable development in the Amazon through honey production, meliponiculture (stingless beekeeping), and bioeconomy focused initiatives. Website built with roots.io stack (WordPress) and WooCommerce",
      linkPreview: "https://nectardaamazonia.com.br/",
      linkSource: "https://github.com/dsemblano/nectardaamazonia",
      image: "/projetonectar.png",
    },
    {
      name: "Tijolo CWB Restaurante",
      summary: "An contemporary slow food restaurant, basead in Curitiba - Paraná Brazil, focused on delivering high-quality dishes made with locally sourced ingredients. Website built with roots.io stack (WordPress)",
      linkPreview: "https://tijolocwb.com.br/",
      linkSource: "https://github.com/dsemblano/tijolocwb",
      image: "/tijolo2.png",
    },
    {
      name: "SFCO 179 Multispace",
      summary: "Multispace basead in Curitiba - Paraná Brazil, that offers a restaurant (Tijolo CWB Restaiurant), coffee shop, event space, chocolate factory, video and photo rental in the Historic Center of Curitiba. Website built with roots.io stack (WordPress)",
      linkPreview: "https://sfco179.com.br/",
      linkSource: "https://github.com/dsemblano/sfco179",
      image: "/sfco.png",
    },
    {
      name: "Incrível História",
      summary: "Website built for  historical content and facts in a serious, educational, and impartial manner. Brazilian and World history. Website built with roots.io stack (WordPress)",
      linkPreview: "https://incrivelhistoria.com.br/",
      linkSource: "https://github.com/dsemblano/incrivelhistoria.com.br",
      image: "/ih.png", 
    }
  ],
  about: {
    description: `
      I'm a Full-Stack Developer who builds modern, performant, and accessible websites using Astro, React, Node.js, and the Roots.io stack (Bedrock, Sage, and a clean CI/CD workflow) for Wordpress and Woocommerce sites. For years, Linux has been my daily environment, shaping the way I approach development with a focus on clarity, automation, and maintainability.

My work spans from frontend design systems and SEO-driven sites to backend automation, WooCommerce customizations, and ACF-powered solutions. I enjoy owning the full lifecycle of a project: planning, architecture, UI/UX, development, optimization, and deployment.
    `,
    image: "/eu1.jpg",
  },
};
