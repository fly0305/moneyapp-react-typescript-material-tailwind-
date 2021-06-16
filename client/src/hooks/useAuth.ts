import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const useAuth = () => {
  const selector = (state: RootState) => state.auth.isAuthenticated;

  return useSelector(selector);
};

export default useAuth;