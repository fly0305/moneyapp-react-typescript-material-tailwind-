import { useSelector } from 'react-redux';
import FeatureState from '../redux/featureSlice/FeatureState';
import { RootState } from '../redux/store';

const useFeatureFlag = (flagName: keyof FeatureState) => {
  const selector = (state: RootState) => state.features[flagName];

  const flag = useSelector(selector);

  return flag;
};

export default useFeatureFlag;
