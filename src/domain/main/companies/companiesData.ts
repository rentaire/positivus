import Amazon from '@/assets/img/companies/amazon.png';
import Dribble from '@/assets/img/companies/dribble.png';
import Hubspot from '@/assets/img/companies/hubspot.png';
import Airwallex from '@/assets/img/companies/airwallex.png';
import Netflix from '@/assets/img/companies/netflix.png';
import Notion from '@/assets/img/companies/notion.png';
import Trello from '@/assets/img/companies/trello.png';
import Uber from '@/assets/img/companies/uber.png';
import Zoom from '@/assets/img/companies/zoom.png';

interface CompaniesData {
  name: string;
  photo: ImageMetadata;
}

export const CompaniesData: CompaniesData[] = [
  {
    name: 'amazon',
    photo: Amazon,
  },
  {
    name: 'dribble',
    photo: Dribble,
  },
  {
    name: 'hubspot',
    photo: Hubspot,
  },
  {
    name: 'airwallex',
    photo: Airwallex,
  },
  {
    name: 'netflix',
    photo: Netflix,
  },
  {
    name: 'notion',
    photo: Notion,
  },
  {
    name: 'trello',
    photo: Trello,
  },
  {
    name: 'uber',
    photo: Uber,
  },
  {
    name: 'zoom',
    photo: Zoom,
  },
];
