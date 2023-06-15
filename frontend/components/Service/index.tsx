import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from 'next/image';
import { Heading, Paragraph, Container } from 'components/Base';

interface ServiceItemProps {
  image: string;
  label: string;
  description: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ image, label, description }) => {
  return (
    <div className="group relative">
      <div className="absolute z-10 h-full w-full bg-gradient-to-t from-blue to-blue/0 to-80% opacity-100 transition-opacity duration-300 ease-in-out group-hover:opacity-0"></div>
      <div className="absolute z-10 h-full w-full bg-gradient-to-t from-black/95 from-15% to-black/0 to-100% opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></div>
      <div className="aspect-h-1 aspect-w-[0.73] overflow-hidden">
        <Image
          className="transition duration-500 ease-in-out group-hover:scale-[1.15]"
          fill
          src={image}
          alt="port and icd"
          style={{ objectFit: 'cover' }}
          sizes="100%"
        />
      </div>
      <div className="absolute bottom-10 z-10 flex translate-y-0 flex-col items-center transition duration-500 ease-in-out group-hover:-translate-y-12">
        <Heading order="h4" className="mb-8 text-center">
          {label}
        </Heading>
        <div className="relative">
          <Paragraph
            size="xs"
            color="white"
            weight="light"
            className="visible line-clamp-3 px-6 text-center opacity-100 transition-all duration-500 ease-linear group-hover:invisible group-hover:opacity-0"
          >
            {description}
          </Paragraph>
          <Paragraph
            size="xs"
            color="white"
            weight="light"
            className="invisible absolute top-0 px-6 text-center opacity-0 transition-all duration-500 ease-linear group-hover:visible group-hover:opacity-100"
          >
            {description}
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

interface Props {
  data: ServiceItemProps[];
}

export const Services: React.FC<Props> = ({ data }) => {
  return (
    <Container type="fluid" id="service">
      <div className="flex flex-col items-center pb-12 lg:pb-24">
        <Heading color="blue" className="mb-3">
          Our Services
        </Heading>
        <Heading color="orange" order="h5">
          YOUR TRUSTED LOGISTIC SERVICES
        </Heading>
      </div>
      <Splide
        aria-label="Our Services"
        options={{
          perPage: 4,
          type: 'loop',
          drag: 'free',
          arrows: false,
          autoplay: true,
          breakpoints: {
            1280: {
              perPage: 3
            },
            1024: {
              perPage: 2
            },
            640: {
              perPage: 1
            }
          }
        }}
      >
        {data.map((x, i) => (
          <SplideSlide key={`service-${i}`}>
            <ServiceItem {...x} />
          </SplideSlide>
        ))}
      </Splide>
    </Container>
  );
};
