import { useHistory } from 'react-router-dom';

export const useNavigateToBack = () => {
  const history = useHistory();

  history.goBack();
};
