import { getPermalink, getBlogPermalink, getAsset, getHomePermalink } from './utils/permalinks';

export const headerData = {
  links: [
    // {
    //   text: 'Najnowszy Numer',
    //   href: getPermalink('/issues/51'),
    // },
    // {
    //   text: 'Archiwum',
    //   href: getBlogPermalink(),
    // },
    {
      text: 'O autorze',
      href: getPermalink('/o-autorze'),
    },
  ],
};

export const footerData = {
  links: [
    { text: 'Polityka Prywatności', href: "https://patrykkosieradzki.com/polityka-prywatnosci" },
    { text: 'Regulamin', href: "https://patrykkosieradzki.com/regulamin" },
  ],
  secondaryLinks: [
    { text: 'Polityka Prywatności', href: "https://patrykkosieradzki.com/polityka-prywatnosci" },
    { text: 'Regulamin', href: "https://patrykkosieradzki.com/regulamin" },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/patrykkosieradzki/' },
    
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/patryk.kosieradzki' }, 
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: 'https://twitter.com/p_kosieradzki' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/profile.php?id=61554168906380' },
  
  ],
  footNote: `
  Copyright © 2023–2025 <a href="https://patrykkosieradzki.com">Patryk Kosieradzki</a>. Wszelkie prawa zastrzeżone.
  `,
};
