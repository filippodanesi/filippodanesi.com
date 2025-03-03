export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};
export type Link = {
    text: string;
    href: string;
    external?: boolean;
    className?: string;
};
export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};
export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};
export type TagDescription = {
    [key: string]: string;
};
export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
};
const siteConfig: SiteConfig = {
    title: 'Filippo Danesi',
    subtitle: 'I optimize online presence through SEO, content & AI-driven strategies.',
    description: 'SEO with over five years of experience in technical SEO and content strategy. Expertise in improving organic visibility and delivering data-driven results.',
    image: {
        src: '/og-image.jpg',
        alt: 'Filippo Danesi \\ SEO Strategist & AI Specialist'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Blog',
            href: 'https://www.serp-secrets.com/',
            external: true
        },
        {
            text: 'Contact',
            href: '/contact/'
        }
    ],
    footerNavLinks: [
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/filippodanesi/'
        },
        {
            text: 'Github',
            href: 'https://github.com/filippodanesi/'
        },
        {
            text: 'X/Twitter',
            href: 'https://x.com/filippodanesi'
        }
    ],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/filippodanesi/'
        },
        {
            text: 'GitHub',
            href: 'https://github.com/filippodanesi/'
        },
        {
            text: 'Twitter',
            href: 'https://x.com/filippodanesi'
        }
    ],
hero: {
    title: 'Filippo Danesi',
    text: `> SEO is my passion, driven by data and innovation.

My SEO adventure began with a love of data and a desire to bridge the technology-user experience gap. What started as curiosity developed into a five-year odyssey across different markets and challenges, each new one teaching me something new about the ever-evolving world of search.

Today, I blend old-school SEO wisdom with cutting-edge AI innovation, not because it's hip, but because I've seen firsthand how the two can unveil levels of growth unthinkable before. Whether I'm coordinating complex domain migrations or adjusting content strategies, I'm driven by the thrill of solving complex puzzles and the satisfaction of seeing businesses thrive online.

What gets me most excited is finding the intersection of engineering and search optimization. I love diving deep into data, experimenting with new tech, and building solutions that work today but are ready for tomorrow's issues. Every project is an opportunity to push limits and transform raw data into impactful growth strategies.`,
        image: {
            src: '/jason-leung-7aukRRZb5o0-unsplash.jpg',
            alt: 'A close up of a blue and white background',
        },
        actions: [
            {
                text: "Check out my CV",
                href: "/Filippo-Danesi_Resume.pdf",
                className: "download-cv",
                external: true
            },
            {
                text: 'Visit my Blog',
                href: 'https://www.serp-secrets.com/',
                external: true
            }
        ]
    },
    subscribe: {
        title: 'Stay Updated',
        text: 'Subscribe to my newsletter for SEO insights and updates.',
        formUrl: '#'
    }
};
export default siteConfig;
