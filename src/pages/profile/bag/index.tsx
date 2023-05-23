// pages
import BagPage from './BagPage';

// interface
import { BagContextProvider } from '@/contexts/bagContext';

const Bag = () => {
  return (
    <BagContextProvider>
      <BagPage />
    </BagContextProvider>
  );
};

export default Bag;
