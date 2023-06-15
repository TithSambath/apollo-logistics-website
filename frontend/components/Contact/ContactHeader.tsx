import { Heading } from 'components/Base';
import { ContactLink } from 'components/ContackLink';
import { FaFacebook } from 'react-icons/fa';
import { SiTelegram } from 'react-icons/si';

export const ContactHeader: React.FC = () => {
  return (
    <div className="mb-24 flex flex-col items-center space-y-9">
      <Heading
        order="h2"
        color="blue"
        className="text-center"
        dangerouslySetInnerHTML={{ __html: 'Stay <span>connected</span> with us' }}
      />
      <div className="flex flex-col space-y-6 sm:flex-row sm:space-x-6 sm:space-y-0">
        <ContactLink
          link="/"
          label={
            <Heading order="h4" color="black">
              Apollo eLogistic
            </Heading>
          }
          icon={FaFacebook}
          iconSize="100%"
        />
        <ContactLink
          link="/"
          label={
            <Heading order="h4" color="black">
              Apollo eLogistic
            </Heading>
          }
          icon={SiTelegram}
          iconSize="100%"
        />
      </div>
      <br />
      <hr id="contact" className="w-full border-gray-400" />
    </div>
  );
};
