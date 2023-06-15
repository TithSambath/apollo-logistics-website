import { Slider } from 'components/Slider';
import { MobileApp } from 'components/MobileApp';
import { Services } from 'components/Service';
import { NextPage } from 'next';
import { Client } from 'components/Client';
import { About } from 'components/About';
import { Contact } from 'components/Contact';
import { Benefit } from 'components/Benefit';
import { Footer } from 'layout/Footer';

import slide from '@public/data/slide.json';
import about from '@public/data/about-us.json';
import service from '@public/data/service.json';
import client from '@public/data/client.json';
import benefit from '@public/data/benefit.json';
import footer from '@public/data/footer.json';

const Page: NextPage = () => {
  return (
    <>
      <Slider data={slide.data} />
      <About data={about} />
      <Services data={service.data} />
      <MobileApp />
      <Benefit data={benefit} />
      <Client data={client.data} />
      <Contact />
      <Footer data={footer} />
    </>
  );
};

export default Page;
