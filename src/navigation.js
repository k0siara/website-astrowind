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
    { 
      text: 'Konsultacja', 
      variant: 'primary', 
      href: 'https://tally.so/r/wkxqyo',
    }
  ],
};

export const footerData = {
  links: [
    {
      title: 'Oferta',
      links: [
        { text: 'Dla firm i zespołów', href: '/#oferta' },
        { text: 'Szkolenia i warsztaty', href: '/#oferta' },
        { text: 'Mentoring 1:1', href: '/#oferta' },
      ],
    },
    {
      title: 'Dla developerów',
      links: [
        { text: 'Newsletter', href: 'https://mobiledevnews.com' },
        { text: 'Blog', href: '/blog' },
      ],
    },
    {
      title: 'O autorze',
      links: [
        { text: 'O mnie', href: '/o-mnie' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Regulamin', href: getPermalink('/regulamin') },
    { text: 'Polityka prywatności', href: getPermalink('/polityka-prywatnosci') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/patrykkosieradzki/' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/patryk.kosieradzki' }, 
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: 'https://twitter.com/p_kosieradzki' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/profile.php?id=61554168906380' },
  ],
  footNote: `
    © 2025 Patryk Kosieradzki
  `,
};
