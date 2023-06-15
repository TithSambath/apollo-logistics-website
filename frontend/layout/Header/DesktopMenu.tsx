/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
// import { LangSwitcher } from './LangSwitcher';
import { Container, Button } from 'components/Base';
import { Brand } from 'components/Brand';

interface NavLinkProps {
  href: string;
  name: string;
  active?: boolean;
}

const NavLink: React.FC<NavLinkProps> = props => (
  <Link
    href={props.href}
    className={classNames(
      'group translate-y-0 font-heading text-lg font-semibold transition-all duration-300 hover:-translate-y-1',
      props.active ? 'text-primary-500' : 'text-white'
    )}
  >
    <div>{props.name}</div>
    <div className="invisible mx-auto my-1 w-11 rounded-lg border-b-4 border-orange opacity-0 transition-all group-hover:visible group-hover:opacity-100" />
  </Link>
);

interface DesktopMenuProps {
  data: { title: string; slug: string; type?: string }[];
}

export const DesktopMenu: React.FC<DesktopMenuProps> = props => {
  const router = useRouter();

  return (
    <Container className="hidden flex-row items-center lg:flex lg:justify-between">
      <Brand />
      <div className="flex items-center lg:space-x-12">
        {props.data.map((x, i) => {
          if (x?.type === 'button') return <Button key={`nav-${i}`}>Contact Us</Button>;

          return (
            <NavLink
              key={`nav-${i}`}
              href={x.slug}
              name={x.title}
              active={router.query?.slug === x.slug}
            />
          );
        })}
        {/* <LangSwitcher /> */}
      </div>
    </Container>
  );
};
