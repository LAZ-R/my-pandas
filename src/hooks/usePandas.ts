import axios from 'axios';
import { useQuery } from 'react-query';

const usePandas = () => {
  const { isLoading, error, data } = useQuery('pandasData', () => 
  axios
  .get('http://localhost:3004/pandas')
  .then((res) => res.data)
  );

  return {
    data,
    isLoading,
    error,
  };
};

export default usePandas;