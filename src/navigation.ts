import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Homepage',
      href: getPermalink('/'),
    },
    {
      text: 'Recent Resarch',
      href: getPermalink('/research'),
    },
    {
      text: 'Beyond Coding + AI',
      href: getPermalink('/beyondcode'),
    },
    {
      text: 'AI in Entertainment',
      href: getPermalink('/entertainment'),
    },
    {
      text: 'ACM AI/ML Chapter',
      href: getPermalink('/acm'),
    },
  ],
};

export const footerData = {
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/ai-complex-lab/' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/AI-in-Complex-Systems-Lab' },
    { ariaLabel: 'Huggingface', icon: 'hf-logo', href: 'https://huggingface.co/AICmpxSysLab' },
  ],
};
