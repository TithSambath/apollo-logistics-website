import { DesktopMenu } from './DesktopMenu';
import { MobileMenu } from './MobileMenu';

const data = [
  { title: 'Home', slug: '/' },
  { title: 'About Us', slug: '#about' },
  { title: 'Services', slug: '#service' },
  { title: 'Contact', slug: '#contact', type: 'button' }
];

export const Header: React.FC = () => {
  return (
    <nav className="absolute z-30 w-full">
      <div className="inset-x-0 z-30 mt-[-2px] -translate-y-0.5">
        <DesktopMenu data={data} />
        <MobileMenu data={data} />
      </div>
    </nav>
  );
};
