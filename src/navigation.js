import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Newsletter',
      href: 'https://mobiledevnews.com',
      target: '_blank',
    },
    {
      text: 'Społeczność',
      href: 'https://discord.gg/v5CKHVrCDS',
      target: '_blank',
    },
  ],
  actions: [
    { 
      text: 'Czysty Webinar 📲', 
      variant: 'primary', 
      href: getPermalink('/webinar-architektura-na-androidzie'),
    }
  ],
};

export const footerData = {
  links: [
    { text: 'Polityka Prywatności', href: getPermalink('/polityka-prywatnosci') },
  ],
  secondaryLinks: [
    { text: 'Polityka Prywatności', href: getPermalink('/polityka-prywatnosci') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/patrykkosieradzki/' },
    
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/patryk.kosieradzki' }, 
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: 'https://twitter.com/p_kosieradzki' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/profile.php?id=61554168906380' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
  © 2024 Patryk Kosieradzki
  `,
};
