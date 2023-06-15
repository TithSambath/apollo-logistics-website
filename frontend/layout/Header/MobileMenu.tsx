import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
// import { LangSwitcher } from './LangSwitcher';
import { Container } from 'components/Base';
import { LuMenu } from 'react-icons/lu';
import { CgClose } from 'react-icons/cg';

interface SmallNavLinkProps {
  href: string;
  name: string;
  active?: boolean;
  onClick: () => void;
}

interface MobileMenuProps {
  data: { title: string; slug: string }[];
}

const SmallNavLink: React.FC<SmallNavLinkProps> = props => (
  <Link
    href={props.href}
    onClick={() => props.onClick()}
    className={classNames(
      'text-based block px-3 py-2 font-heading hover:underline',
      props.active ? 'text-orange' : 'text-white'
    )}
  >
    {props.name}
  </Link>
);

export const MobileMenu: React.FC<MobileMenuProps> = props => {
  const router = useRouter();
  const [isNavOpen, setIsNavOpen] = useState(false);

  function handleNavBar() {
    setIsNavOpen(!isNavOpen);
  }

  useEffect(() => {
    document.addEventListener('click', (event: any) => {
      if (event.target.id !== 'menu-btn') setIsNavOpen(false);
    });
    return document.addEventListener('click', (event: any) => {
      if (event.target.id !== 'menu-btn') setIsNavOpen(false);
    });
  }, []);

  return (
    <div>
      <div
        className={classNames('flex h-24 flex-col justify-center lg:hidden', {
          'bg-blue/30 backdrop-blur-sm': isNavOpen
        })}
        id="mobile-menu"
      >
        <Container>
          <div className="flex items-center justify-between">
            <Link href="/">
              <div className="flex items-center space-x-5">
                <img src="/logo/logo-primary.png" className="z-10 h-12" alt="Logo" />
                <div className="font-bold text-white">
                  <p className="text-xl">APOLLO</p>
                  <p className="text-xs">eLOGISTICS</p>
                </div>
              </div>
            </Link>
            {/* --- NavButton --- */}
            <div className="flex space-x-4">
              {/* <LangSwitcher /> */}
              <button
                id="menu-btn"
                onClick={() => handleNavBar()}
                type="button"
                className="block rounded-md lg:hidden"
              >
                {isNavOpen && (
                  <div className="pointer-events-none flex text-white">
                    <CgClose size={32} aria-hidden="true" />
                  </div>
                )}
                {!isNavOpen && (
                  <div className="pointer-events-none text-white">
                    <LuMenu size={32} aria-hidden="true" />
                  </div>
                )}
              </button>
            </div>
          </div>
        </Container>
      </div>

      <div id="mobile-menu" className={classNames('lg:hidden', isNavOpen ? '' : 'hidden')}>
        <div className="absolute z-30 w-full bg-blue/30 backdrop-blur-sm">
          <Container className="!p-0">
            <div className="grid grid-cols-2 items-center px-5 py-3">
              {props.data.map((x, i) => (
                <SmallNavLink
                  key={`sm-nav-${i}`}
                  href={x.slug}
                  name={x.title}
                  active={router.query.slug === x.slug}
                  onClick={handleNavBar}
                />
              ))}
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};
