import { Container } from 'components/Base';
import { ContactHeader } from './ContactHeader';
import { ContactAddress } from './ContactAddress';
import { ContactForm } from './ContactForm';

export const Contact: React.FC = () => {
  return (
    <Container padding="top-bottom">
      <ContactHeader />
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 xl:gap-36">
        <ContactAddress />
        <ContactForm />
      </div>
    </Container>
  );
};
