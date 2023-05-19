// pages
import BagPage from './BagPage';

// interface
import { BagContextProvider } from '@/contexts/bag/BagContext';

const Bag = () => {

  return (
    <BagContextProvider>
      <BagPage />
    </BagContextProvider>
  );
};

export default Bag;
