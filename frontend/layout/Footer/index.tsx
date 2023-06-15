import { Paragraph, Container, Heading } from 'components/Base';
import { Brand } from 'components/Brand';
import { DownloadAppButton } from 'components/DownloadAppButton';
import Link from 'next/link';
import { MdLocationOn } from 'react-icons/md';
// import dynamic from 'next/dynamic';
// const DynamicIcon = dynamic(() => import('components/DynamicIcon'), { ssr: false });

interface Props {
  data: {
    slogan: string;
    address: string;
    openHour: string;
    phone: string;
    socials: Array<{ link: string; type: string }>;
    downloads: Array<{ link: string; store: string }>;
  };
}

export const Footer: React.FC<Props> = props => {
  const { downloads, address, openHour, slogan, socials, phone } = props.data;

  return (
    <div className="bg-blue">
      <Container className="grid grid-cols-1 gap-x-10 gap-y-12 py-10 lg:grid-cols-3 lg:gap-x-16">
        <div>
          <Brand size="md" />
          <Paragraph weight="regular" size="xs" color="white" className="my-5 uppercase">
            {slogan}
          </Paragraph>
          <DownloadAppButton data={downloads as never} alignCenterRes={false} />
        </div>

        <div>
          <Heading order="h5" weight="light">
            Office Info
          </Heading>
          <div className="my-5 flex items-start space-x-3 text-white">
            <div className="mt-1">
              <MdLocationOn size="2rem" />
            </div>
            <Paragraph size="xs" color="white">
              {address}
            </Paragraph>
          </div>
          <Paragraph className="underline" size="xs" color="white" weight="light">
            Open hours:
          </Paragraph>
          <Paragraph size="xs" color="white" weight="light">
            {openHour}
          </Paragraph>
        </div>

        <div>
          <Heading order="h5" weight="light">
            Get in Touch
          </Heading>
          <div className="my-5 flex space-x-3">
            {/* // Todo: update to dynamic icon later */}
            {socials.map((x, i) => (
              <Link href={x.link} key={i} target="_blank">
                <img
                  src={`/socials/${x.type}.png`}
                  alt={`image-${i}`}
                  className="h-10 w-auto cursor-pointer"
                />
              </Link>
            ))}
          </div>
          <Paragraph size="xs" color="white" weight="light">
            Phone number: {phone}
          </Paragraph>
        </div>
      </Container>
      <div className="border-b-2 border-gray-100" />
      <div className="py-6">
        <Paragraph color="white" weight="regular" className="text-center" size="xs">
          Copyrights &copy; {new Date().getFullYear()}
        </Paragraph>
      </div>
    </div>
  );
};
