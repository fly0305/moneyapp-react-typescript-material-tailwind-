import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const useUserGroup = (groupName: string) => {
  const selector = (state: RootState) =>
    state.auth.user?.groups?.indexOf(groupName) !== -1 &&
    state.auth.user?.groups?.indexOf(groupName) !== undefined;

  return useSelector(selector);
};

export default useUserGroup;
