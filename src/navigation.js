import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Szkolenia',
      href: getPermalink('/szkolenia'),
    },
    {
      text: 'O mnie',
      href: getPermalink('/o-mnie'),
    },
    {
      text: 'Do pobrania',
      href: getPermalink('/do-pobrania'),
    },
    {
      text: 'Wiedza',
      links: [
        {
          text: 'Społeczność',
          href: 'https://discord.gg/v5CKHVrCDS',
          target: '_blank',
        },
        {
          text: 'Newsletter',
          href: 'https://mobiledevnews.com',
          target: '_blank',
        },
        {
          text: 'Blog',
          href: getBlogPermalink(),
        },
      ],
    },
  ],
  actions: [
    { 
      text: 'Darmowe materiały', 
      variant: 'primary', 
      href: 'https://archiwum.mobiledevnews.com',
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
