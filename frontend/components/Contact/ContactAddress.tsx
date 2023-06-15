import { Heading, Paragraph } from 'components/Base';
import { ContactLink } from 'components/ContackLink';
import { Badge } from 'components/badge';
import { BsTelephoneFill } from 'react-icons/bs';
import { MdLocationOn, MdEmail } from 'react-icons/md';

export const ContactAddress: React.FC = () => {
  return (
    <div className="flex flex-col space-y-12">
      <div>
        <Badge className="mb-2 px-5">Get a Quote</Badge>
        <Heading color="blue">Love to hear from you, Get in touch!</Heading>
      </div>
      <ContactLink
        link="/"
        size="md"
        label={
          <Paragraph size="xs">
            No 4B (SKD), National Road #5, Sangkat Km 6 Khan Russey Keo, Phnom Penh, Cambodia
          </Paragraph>
        }
        icon={MdLocationOn}
        iconSize="69%"
        iconWhite
        allowBackground
      />
      <ContactLink
        link="tel:012 246 786"
        size="md"
        label={<Paragraph size="xs">012 246 786</Paragraph>}
        icon={BsTelephoneFill}
        iconSize="50%"
        iconWhite
        allowBackground
      />
      <ContactLink
        link="mailto:apollologistic@gmail.com"
        size="md"
        iconWhite
        iconSize="50%"
        icon={MdEmail}
        allowBackground
        label={<Paragraph size="xs">apollologistic.com</Paragraph>}
      />
    </div>
  );
};
