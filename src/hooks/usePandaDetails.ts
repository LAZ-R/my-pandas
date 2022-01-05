import axios from 'axios';
import { useQuery } from 'react-query';

const usePandaDetails = (id:string | undefined) => {
  const { isLoading, error, data } = useQuery(["pandas", id], () => 
  axios
  .get('http://localhost:3004/pandas/' + id)
  .then((res) => res.data)
  );

  return {
    data,
    isLoading,
    error,
  };
};

export default usePandaDetails;