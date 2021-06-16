import { useLocation } from 'react-router-dom';
import authRedir from '../util/authRedir';

const useAuthRedirect = () => {
  const loc = useLocation();

  const query = new URLSearchParams(loc.search);
  const redir = query.get('gotoOnAuth');
  if (redir) {
    authRedir.set(redir);
    // history.push(loc.pathname);
  }
};

export default useAuthRedirect;
