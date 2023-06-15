import classNames from 'classnames';
import Link from 'next/link';
import { ReactNode } from 'react';
import { IconType } from 'react-icons';

interface Props {
  size?: 'sm' | 'md';
  label: ReactNode;
  icon: IconType;
  iconSize?: string | number;
  iconWhite?: boolean;
  allowBackground?: boolean;
  link: string;
}

export const ContactLink: React.FC<Props> = props => {
  const { size = 'sm', label, icon: Icon, link, iconSize, iconWhite, allowBackground } = props;

  return (
    <Link target="_blank" href={link} className="flex items-center space-x-3">
      <div>
        <div
          className={classNames(
            'flex items-center justify-center rounded-full',
            { 'h-12 w-12': size === 'sm' },
            { 'h-16 w-16': size === 'md' },
            { 'bg-blue': allowBackground }
          )}
        >
          <Icon size={iconSize} className={classNames('text-blue', { 'text-white': iconWhite })} />
        </div>
      </div>
      <div>{label}</div>
    </Link>
  );
};
