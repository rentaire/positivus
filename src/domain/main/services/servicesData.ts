import type { StyleType } from '@/types/StyleType.ts';
import DarkIllustration from '@/assets/img/services/dark-iIllustration.png';
import LightIllustration from '@/assets/img/services/light-illustration.png';

export interface ServiceCard {
  title: string[];
  picture: ImageMetadata;
  style: StyleType;
}

export const ServicesData: ServiceCard[] = [
  {
    title: ['Search engine', 'optimization'],
    picture: DarkIllustration,
    style: 'light',
  },
  {
    title: ['Pay-per-click', 'advertising'],
    picture: DarkIllustration,
    style: 'accent',
  },
  {
    title: ['Social Media', 'Marketing'],
    picture: LightIllustration,
    style: 'dark',
  },
  {
    title: ['Email', 'Marketing'],
    picture: DarkIllustration,
    style: 'light',
  },
  {
    title: ['Content', 'Creation'],
    picture: DarkIllustration,
    style: 'accent',
  },
  {
    title: ['Analytics and ', 'Tracking'],
    picture: LightIllustration,
    style: 'dark',
  },
];
