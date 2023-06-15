import { BaseError } from 'components/Error/BaseError';

const Error404 = () => (
  <BaseError
    error="404"
    title="Page Not Found"
    subtitle="The page you are looking for might have been removed had its name changed or is temporarily unavailable"
  />
);

export default Error404;
