import { Button, Container, Heading, Paragraph } from 'components/Base';
import { Badge } from 'components/badge';
import Image from 'next/image';
import Link from 'next/link';
import { RxDoubleArrowRight } from 'react-icons/rx';

interface CircleProps extends React.PropsWithChildren {
  label: string;
}

export const Circular: React.FC<CircleProps> = ({ label, children }) => (
  <div className="group relative flex h-48 w-48 items-center justify-center lg:h-64 lg:w-64">
    <div className="absolute z-50 h-full w-full rounded-full border-4 border-orange transition-all duration-300 ease-in-out group-hover:h-36 group-hover:w-36 lg:group-hover:h-52 lg:group-hover:w-52" />
    <div className="h-44 w-44 overflow-hidden rounded-full bg-white shadow-lg lg:h-[230px] lg:w-[230px]">
      <div className="absolute z-40 flex h-44 w-44 items-center justify-center rounded-full bg-blue/60 p-5 text-center opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 lg:h-[230px] lg:w-[230px]">
        <Heading order="h3">{label}</Heading>
      </div>
      <div className="aspect-h-1 aspect-w-1 z-30">{children}</div>
    </div>
  </div>
);

interface ContentProps {
  title: string;
  description: string;
  quoteUrl: string;
}

const Content: React.FC<ContentProps> = ({ title, description, quoteUrl }) => {
  return (
    <div className="my-12 flex max-w-2xl flex-col items-center  space-y-6 sm:space-y-12">
      <div>
        <Badge className="mx-auto mb-6 px-5">Who we are</Badge>
        <Heading color="blue" className="mb-6 text-center">
          {title}
        </Heading>
        <Paragraph size="sm" className="text-center">
          {description}
        </Paragraph>
      </div>
      <Link href="#contact">
        <Button
          size="lg"
          intent="secondary"
          right={
            <div className="ml-3 rounded-full bg-orange p-1 transition-colors duration-300 ease-in-out group-hover:bg-blue">
              <RxDoubleArrowRight />
            </div>
          }
        >
          Get a Quote
        </Button>
      </Link>
    </div>
  );
};

interface Props {
  data: ContentProps;
}

export const About: React.FC<Props> = ({ data }) => {
  return (
    <Container
      id="about"
      type="fluid"
      margin="top"
      padding="bottom"
      className="relative overflow-hidden bg-[url('/images/about/map.png')] bg-cover bg-no-repeat bg-origin-content"
    >
      <Container className="flex min-h-[864px] flex-col items-center justify-between xl:flex-row">
        <div className="relative self-start">
          <Circular label="Air Transport">
            <Image
              fill
              src="/images/about/air-transport.jpg"
              alt="air-transport"
              sizes="100%"
              style={{ objectFit: 'cover', objectPosition: 'left' }}
            />
          </Circular>
          <img
            className="absolute -left-[70%] bottom-0"
            src="/images/about/air-transport-vector.png"
            alt="vector"
          />
        </div>

        <Content {...data} />

        <div className="relative self-end xl:mt-44 xl:self-center">
          <Circular label="Truck Transport">
            <Image
              fill
              src="/images/about/truck-transport.jpg"
              alt="air-transport"
              sizes="100%"
              style={{ objectFit: 'cover', objectPosition: 'left' }}
            />
          </Circular>
          <img
            className="absolute -right-[80%] bottom-10"
            src="/images/about/land-transport-vector.png"
            alt="vector"
          />
        </div>
      </Container>
    </Container>
  );
};
