import LinkedIn from '@/assets/svg/linkedin.svg';
import Facebook from '@/assets/svg/facebook.svg';
import Twitter from '@/assets/svg/twitter.svg';
import type { Props } from 'astro';

export interface Socials {
  link: string;
  icon: ((props: Props) => any) & ImageMetadata;
}
export const Socials: Socials[] = [
  {
    link: 'https://github.com/rentaire',
    icon: LinkedIn,
  },
  {
    link: 'https://github.com/rentaire',
    icon: Facebook,
  },
  {
    link: 'https://github.com/rentaire',
    icon: Twitter,
  },
];
