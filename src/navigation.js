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
      text: '11.07.2024 / 20:00 👀', 
      variant: 'primary', 
      href: getPermalink('/webinar-architektura-na-androidzie'),
    }
  ],
};

export const footerData = {
  links: [
    { text: 'Polityka Prywatności', href: getPermalink('/polityka-prywatnosci') },
    { text: 'Regulamin', href: getPermalink('/regulamin') },
  ],
  secondaryLinks: [
    { text: 'Polityka Prywatności', href: getPermalink('/polityka-prywatnosci') },
    { text: 'Regulamin', href: getPermalink('/regulamin') },
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
