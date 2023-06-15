import classNames from 'classnames';
import Link from 'next/link';

export interface DownloadAppButtonProps {
  link: string;
  store: 'appstore' | 'googleplay';
}

export interface Props {
  data: DownloadAppButtonProps[];
  alignCenterRes?: boolean;
}

export const DownloadAppButton: React.FC<Props> = ({ data, alignCenterRes = true }) => (
  <div
    className={classNames(`mt-6 flex flex-wrap items-center`, {
      'justify-center lg:justify-start': alignCenterRes
    })}
  >
    {data?.map((x, i) => (
      <Link
        key={`store-${i}`}
        href={x.link || ''}
        target="_blank"
        title={x.link ? undefined : 'Available Soon'}
        className="m-2"
      >
        <img
          src={`/stores/${x.store}.png`}
          alt={`image-${i}`}
          className={classNames('h-10 w-auto cursor-pointer sm:h-12 xl:h-14', {
            'cursor-not-allowed': !x.link
          })}
        />
      </Link>
    ))}
  </div>
);
