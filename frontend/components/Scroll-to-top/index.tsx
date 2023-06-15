import { useEffect, useState } from 'react';
import { HiOutlineArrowUp } from 'react-icons/hi';

const ScrollToTop: React.FC = () => {
  const [stick, setStick] = useState(false);
  const onClickHandler = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    let position = window.pageYOffset;

    const scrollHandler = () => {
      let scrollPos = window.pageYOffset;
      if (scrollPos < 200) {
        setStick(false);
      } else if (scrollPos < position) {
        setStick(true);
      } else {
        setStick(false);
      }
      position = scrollPos;
    };

    window.addEventListener('scroll', function () {
      scrollHandler();
    });
    return () => {
      window.removeEventListener('scroll', function () {
        scrollHandler();
      });
    };
  }, [stick]);

  return (
    <button className={`scroll-to-top ${stick ? 'show' : ''} `} onClick={onClickHandler}>
      <HiOutlineArrowUp size={40} className="mx-auto" />
    </button>
  );
};

export default ScrollToTop;
