import Link from 'next/link';
import { Heading } from './Base';

export const Brand: React.FC<{ size?: 'sm' | 'md' }> = ({ size = 'sm' }) => (
  <Link href="/" className="flex items-center space-x-5">
    <img src="/logo/logo-primary.png" className="z-10 w-16" alt="Logo" />
    <div>
      <Heading order={size === 'sm' ? 'h4' : 'h3'}>APOLLO</Heading>
      <Heading order={size === 'sm' ? 'h8' : 'h6'}>eLOGISTICS</Heading>
    </div>
  </Link>
);
