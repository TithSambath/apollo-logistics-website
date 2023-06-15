import { Options, Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import Image from 'next/image';
import { Circle } from 'components/Circle';
import { Container, Heading } from 'components/Base';

const options: Options = {
  arrows: false,
  drag: 'free',
  perPage: 7,
  breakpoints: {
    300: {
      perPage: 1
    },
    500: {
      perPage: 2
    },
    700: {
      perPage: 3
    },
    1200: {
      perPage: 4
    },
    1300: {
      perPage: 5
    },
    1500: {
      perPage: 6
    }
  },
  autoScroll: {
    speed: 2
  }
};

interface Props {
  data: { id: number; image: string }[];
}

export const Client: React.FC<Props> = ({ data }) => {
  return (
    <Container type="fluid" padding="top-bottom" className="bg-[#FEF5EB] text-center">
      <Heading
        order="h2"
        color="blue"
        className="mb-14"
        dangerouslySetInnerHTML={{ __html: 'Our <span>Public Well-Known</span> Clients' }}
      />
      <Splide
        aria-label="Our Clients"
        options={options}
        hasTrack={false}
        className="client-pagination"
      >
        <SplideTrack className="pb-20">
          {data.map((x, i) => (
            <SplideSlide key={`client-${i}`} className="flex items-center justify-center">
              <Circle>
                <div className="aspect-h-1 aspect-w-1 mx-5">
                  <Image
                    src={x.image}
                    alt="Our client"
                    fill
                    style={{ objectFit: 'contain' }}
                    sizes="100%"
                  />
                </div>
              </Circle>
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </Container>
  );
};
