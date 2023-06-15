import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import Image from 'next/image';
import { Heading, Button, Paragraph } from 'components/Base';
import Link from 'next/link';
import { RxDoubleArrowRight } from 'react-icons/rx';

interface SliderItemProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

const SliderItem: React.FC<SliderItemProps> = ({ image, title, subtitle, description }) => {
  return (
    <>
      <div className="aspect-h-3 aspect-w-2 relative object-cover md:aspect-h-9 md:aspect-w-16 lg:aspect-h-7 ">
        <Image src={image} alt="no image" fill className="w-full" style={{ objectFit: 'cover' }} />
      </div>
      <div className="absolute top-1/2 z-10 w-full -translate-x-1 -translate-y-1/2 px-4 lg:left-1/2 lg:-translate-x-1/2 lg:px-0">
        <div className="flex flex-col items-center justify-center space-y-3  lg:space-y-7">
          <Heading order="h4" weight="semibold" color="orange" className="text-center">
            {subtitle}
          </Heading>
          <Heading className="text-center">{title}</Heading>
          <Paragraph
            size="sm"
            className="line-clamp-2 w-4/5 text-center text-base text-white md:text-xl lg:w-2/4 2xl:w-1/3"
          >
            {description}
          </Paragraph>
          <Link href="#service">
            <Button
              size="lg"
              intent="secondary"
              className="!text-base lg:!text-lg"
              right={
                <div className="ml-3 rounded-full bg-orange p-1 transition-colors duration-300 ease-in-out group-hover:bg-blue">
                  <RxDoubleArrowRight />
                </div>
              }
            >
              View Services
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

interface Props {
  data: SliderItemProps[];
}

export const Slider: React.FC<Props> = ({ data }) => {
  return (
    <Splide
      aria-label="Carousel"
      options={{
        type: 'loop',
        autoplay: true,
        pauseOnHover: false,
        resetProgress: false,
        interval: 5000,
        arrows: false
      }}
      hasTrack={false}
      className="slide-pagination"
    >
      <SplideTrack>
        {data.map((x, i) => (
          <SplideSlide key={`slide-${i}`}>
            <SliderItem {...x} />
          </SplideSlide>
        ))}
      </SplideTrack>
    </Splide>
  );
};
