import JohnSmith from '@/assets/img/team/members/john_smith.png';
import JaneDoe from '@/assets/img/team/members/jane-doe.png';
import MichaelBrown from '@/assets/img/team/members/michael-brown.png';
import EmilyJohnson from '@/assets/img/team/members/emily-johnson.png';
import BrainWilliams from '@/assets/img/team/members/brian-williams.png';
import SarahKim from '@/assets/img/team/members/sarah-kim.png';

interface TeamMember {
  name: string;
  position: string;
  photo: ImageMetadata;
  linkedIn: string;
  description: string;
}

export const TeamMembers: TeamMember[] = [
  {
    name: 'John Smith',
    position: 'CEO and Founder',
    photo: JohnSmith,
    linkedIn: 'https://www.linkedIn.com/in/arina-manakina-b52b9332b/',
    description:
      '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy.',
  },
  {
    name: 'Jane Doe',
    position: 'Director of Operations',
    photo: JaneDoe,
    linkedIn: 'https://www.linkedIn.com/in/arina-manakina-b52b9332b/',
    description:
      '7+ years of experience in project management and team leadership. Strong organizational and communication skills.',
  },
  {
    name: 'Michael Brown',
    position: 'Senior SEO Specialist',
    photo: MichaelBrown,
    linkedIn: 'https://www.linkedIn.com/in/arina-manakina-b52b9332b/',
    description:
      '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization.',
  },
  {
    name: 'Emily Johnson',
    position: 'PPC Manager',
    photo: EmilyJohnson,
    linkedIn: 'https://www.linkedIn.com/in/arina-manakina-b52b9332b/',
    description:
      '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis.',
  },
  {
    name: 'Brian Williams',
    position: 'Social Media Specialist',
    photo: BrainWilliams,
    linkedIn: 'https://www.linkedIn.com/in/arina-manakina-b52b9332b/',
    description:
      '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement.',
  },
  {
    name: 'Sarah Kim',
    position: 'Content Creator',
    photo: SarahKim,
    linkedIn: 'https://www.linkedIn.com/in/arina-manakina-b52b9332b/',
    description:
      '2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries.',
  },
];
