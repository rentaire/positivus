interface Contacts {
  label: string;
  href: string;
  text: string;
}

export const Contacts: Contacts[] = [
  {
    label: 'Email',
    href: 'mailto:',
    text: 'info@positivus.com',
  },
  {
    label: 'Phone',
    href: 'tel:',
    text: '555-567-8901',
  },
  {
    label: 'Address',
    href: 'https://github.com/rentaire',
    text: '1234 Main St \n Moonstone City, Stardust State 12345',
  },
];
