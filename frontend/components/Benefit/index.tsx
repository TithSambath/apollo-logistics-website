import { Container } from 'components/Base/Container';
import { Heading } from 'components/Base/Heading';
import { Paragraph } from 'components/Base/Paragraph';
import Image from 'next/image';

interface Props {
  data: {
    title: string;
    benefits: Array<{ title: string; description: string }>;
  };
}

export const Benefit: React.FC<Props> = ({ data }) => (
  <div className="relative">
    <div className="aspect-h-16 absolute inset-0">
      <Image src="/images/benefit.png" alt="no image" fill style={{ objectFit: 'cover' }} />
      <div className="absolute inset-0 bg-blue bg-opacity-90" />
    </div>
    <div className="relative">
      <Heading className="pt-14 text-center 2xl:pt-24">{data.title}</Heading>
      <Container>
        <div className="grid grid-cols-1 gap-20 py-10 md:grid-cols-2  lg:grid-cols-3 2xl:py-24 ">
          {data.benefits.map((x, i) => (
            <div key={i}>
              <Heading order="h4" weight="semibold">
                {x.title}
              </Heading>
              <div className="my-2 w-16 rounded-lg border-b-4 border-orange" />
              <Paragraph
                size="xs"
                color="white"
                className="py-4 text-base leading-7 text-slate-100 "
              >
                {x.description}
              </Paragraph>
            </div>
          ))}
        </div>
      </Container>
    </div>
  </div>
);
