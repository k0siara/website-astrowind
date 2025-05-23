import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'O mnie',
      href: getPermalink('/o-mnie'),
    },
    {
      text: 'Oferta',
      href: getPermalink('/#oferta'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    // {
    //   text: 'Store',
    //   href: getPermalink('/store'),
    // },
    // {
    //   text: 'Pobierz',
    //   href: getPermalink('/pobierz'),
    // },
  ],
  actions: [
    // { 
    //   text: 'Konsultacja', 
    //   variant: 'primary', 
    //   href: '#',
    // }
  ],
};

export const footerData = {
  links: [
    { text: 'Polityka prywatności', href: getPermalink('/polityka-prywatnosci') },
    { text: 'Regulamin', href: getPermalink('/regulamin') },
  ],
  secondaryLinks: [
    { text: 'Polityka prywatności', href: getPermalink('/polityka-prywatnosci') },
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
  © 2025 Patryk Kosieradzki
  `,
};
