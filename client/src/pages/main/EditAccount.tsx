import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { updateUser } from '../../redux/authSlice/thunks/updateUserThunk';
import { RootState, useAppDispatch } from '../../redux/store';

interface editAccountFields {
  photo?: string;
  firstName?: string;
  lastName?: string;
}

const EditAccount: React.FC = () => {
  const dispatch = useAppDispatch();

  const selector = (state: RootState) => ({
    photo: state.auth.user?.picture,
    firstName: state.auth.user?.fistName,
    lastName: state.auth.user?.lastName,
  });

  const state: editAccountFields = useSelector(selector);
  const history = useHistory();

  const handleExit = () => {
    history.push('/account');
  };

  const handleSubmit = async (data: editAccountFields) => {
    Object.entries(data).forEach(([k, newVal]) => {
      const existingVal = (state as any)[k];
      if (newVal === existingVal) {
        delete (data as any)[k];
      }
    });
    dispatch(updateUser(data));
  };

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
