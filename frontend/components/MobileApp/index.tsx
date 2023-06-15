import { BulletPoint, Container, Heading, Paragraph } from 'components/Base';
import { DownloadAppButton } from 'components/DownloadAppButton';
import Image from 'next/image';
import { data } from './data';

export const MobileApp: React.FC = () => {
  return (
    <Container className="pb-12 lg:pb-0" padding="top">
      <div className="grid grid-cols-1 gap-9 lg:grid-cols-2 xl:gap-x-9">
        <div className="aspect-h-1 aspect-w-[1.04] lg:-left-[30%]">
          <Image fill src="/images/trusted.png" alt="trusted" priority />
        </div>
        <div className="lg:col-start-2">
          <div>
            <Heading color="blue" dangerouslySetInnerHTML={{ __html: data.title }}></Heading>
            <br />
            <Paragraph size="xs">{data.description}</Paragraph>
            <div className="my-6 grid grid-cols-2 gap-3 xl:my-9 xl:gap-6">
              {data.benefits.map((x, i) => (
                <BulletPoint key={`bullet-${i}`} label={x} />
              ))}
            </div>
            <DownloadAppButton data={data.downloads as never} />
          </div>
        </div>
      </div>
    </Container>
  );
};
