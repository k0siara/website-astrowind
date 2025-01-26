import { getPermalink, getBlogPermalink, getAsset, getHomePermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Latest Issue',
      href: getHomePermalink(),
    },
    {
      text: 'Archive',
      href: getBlogPermalink(),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
  ],
};

export const footerData = {
  links: [
    { text: 'Privacy Policy', href: "https://patrykkosieradzki.com/privacy-policy" },
    { text: 'Regulations', href: getPermalink('/regulations') },
  ],
  secondaryLinks: [
    { text: 'Privacy Policy', href: "https://patrykkosieradzki.com/privacy-policy" },
    { text: 'Regulations', href: getPermalink('/regulations') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/patrykkosieradzki/' },
    
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/patryk.kosieradzki' }, 
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: 'https://twitter.com/p_kosieradzki' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/profile.php?id=61554168906380' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
  Copyright © 2023–2025 <a href="https://patrykkosieradzki.com">Patryk Kosieradzki</a>. All rights reserved.
  `,
};
