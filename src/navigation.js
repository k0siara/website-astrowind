import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    // {
    //   text: 'Store',
    //   href: getPermalink('/store'),
    // },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'O mnie',
      href: getPermalink('/o-mnie'),
    },
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
    { text: 'Privacy Policy', href: getPermalink('/privacy-policy') },
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
  © 2025 Patryk Kosieradzki
  `,
};
