import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Daniel Semblano - Full Stack Developer and SEO specialist",
  author: "Daniel Semblano",
  description:
    "High-performance, secure and SEO-focused websites built with Astro, React or the Roots.io stack for WordPress and WooCommerce. Contact me!",
  lang: "en",
  siteLogo: "/ds.png",
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
    specialty: "Full Stack Developer and SEO specialist",
    summary:
      "High-performance sites SEO-focused: secure, semantic, and highly available using Astro, React, or Roots.io stack for WordPress and Woocommerce.",
    email: "hello@danielsemblano.dev",
  },
  experience: [ 
    {
      company: "Néctar da Amazônia",
      position: "Full Stack Developer",
      startDate: "01/02/2025",
      endDate: "ongoing",
      summary: [
        "A startup from Amapá, Brazil dedicated to honey and sustainable development in the Amazon, focusing on meliponiculture (stingless beekeeping) and solutions that promote the bioeconomy.",
        "Website redesigned, UI UX improvements and SEO.",
      ],
    },
    {
      company: "PROS AP",
      position: "Full Stack Developer",
      startDate: "26/04/2022",
      endDate: "30/10/2022",
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
      summary: "Brazilian startup working to foster sustainable development in the Amazon through honey stingless beekeeping production (meliponiculture) and bioeconomy focused initiatives. Website built with roots.io stack (WordPress) and WooCommerce",
      linkPreview: "https://nectardaamazonia.com.br/",
      linkSource: "https://github.com/dsemblano/nectardaamazonia",
      image: "/projetonectar.png",
    },
    {
      name: "Tijolo CWB Restaurante",
      summary: "An slow food contemporary restaurant, focused on delivering high quality dishes made with locally sourced ingredients. Website built with roots.io stack (WordPress).",
      linkPreview: "https://tijolocwb.com.br/",
      linkSource: "https://github.com/dsemblano/tijolocwb",
      image: "/tijolo2.png",
    },
    {
      name: "SFCO 179 Multispace",
      summary: "Multispace basead in Brazil that offers a restaurant (Tijolo CWB Restaurant), a coffee shop, a event space and a chocolate factory in the Historic Center of Curitiba. Website built with roots.io stack (WordPress).",
      linkPreview: "https://sfco179.com.br/",
      linkSource: "https://github.com/dsemblano/sfco179",
      image: "/sfco.png",
    },
    {
      name: "Incrível História",
      summary: "Website built for historical content and facts in a serious, educational, and impartial manner. Brazilian and World history. Built with roots.io stack (WordPress)",
      linkPreview: "https://incrivelhistoria.com.br/",
      linkSource: "https://github.com/dsemblano/incrivelhistoria.com.br",
      image: "/ih.png", 
    }
  ],
  about: {
    description: `
      I’m a Full-Stack Developer with 15+ years of experience building high-performance, secure, and SEO-optimized websites and applications. Over the years, I’ve worked across the full spectrum of web development: frontend architecture, design systems, UI/UX, backend integrations, DevOps automation, and custom WordPress/WooCommerce ecosystems using modern stacks like Astro, React, Node.js, and Roots.io.

      
      My approach combines technical depth with attention to detail-semantic HTML, accessibility, performance budgets, security best practices, and maintainable architectures. I enjoy owning projects: understanding the problem, designing a scalable solution, implementing it with high standards, optimizing performance, and deploying with reliability.
    `,
    image: "/daniesemblano.webp",
  },
};
