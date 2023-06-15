import { BaseError } from 'components/Error/BaseError';

const Error500 = () => (
  <BaseError
    error="500"
    title="Oops, Something Went Wrong"
    subtitle="Try to refresh this page feel free to contact us if the problem persists."
    isBack
  />
);

export default Error500;
