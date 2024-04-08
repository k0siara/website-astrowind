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
      text: 'Podcast',
      href: 'https://androidtalks.com',
      target: '_blank',
    },
  ],
  actions: [
    { 
      text: 'Darmowy Ebook 📚', 
      variant: 'primary', 
      href: 'https://mobiledevnews.com', 
      target: '_blank' ,
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
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/profile.php?id=61554168906380' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/patryk.kosieradzki' }, 
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: 'https://twitter.com/p_kosieradzki' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/patrykkosieradzki/' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
  © 2024 Patryk Kosieradzki
  `,
};
