import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';

interface ListingProps {}

const Listing: React.FC<ListingProps> = () => {
  const [exists, setExists] = useState<boolean>(true);

  if (!exists) {
    return <Typography variant={'h1'}>This listing doesnt exist</Typography>;
  }

  return (
    <div className={'flex flex-col min-h-screen xl:w-3/4 md:mx-auto md:p-16'}>
      Listings table page
    </div>
  );
};
export default Listing;
