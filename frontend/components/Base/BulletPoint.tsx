import { Heading } from './Heading';

export const BulletPoint: React.FC<{ label: string }> = ({ label }) => {
  return (
    <div className="flex items-center space-x-4">
      <img src="/icons/apollo-icons.png" alt="apollo-icon" />
      <Heading order="h5" color="blue" weight="semibold">
        {label}
      </Heading>
    </div>
  );
};
