import React from 'react';

interface editAccountFields {
  photo?: string;
  firstName?: string;
  lastName?: string;
}

const EditAccount: React.FC<editAccountFields> = () => {


  return (
    <div className={'p-4 sm:w-3/4 lg:w-1/2 sm:mx-auto pt-20'}>
      <div
        className={
          'flex items-center fixed top-0 inset-x-0 px-4 py-2 bg-gray-50 shadow md:mt-16 md:bg-white md:px-32 lg:px-64 2xl:px-96'
        }
      >
      Edit Account
      </div>
    </div>

  );
};

export default EditAccount;
