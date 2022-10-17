import { useNavigate } from 'react-router-dom';

const useUrlSearchParams = () => {
  const searchParams: any = new URLSearchParams(location.search);
  const navigate = useNavigate();
  const addQuery = (key: any, value: any) => {
    if (searchParams.get(key) === value) {
      removeQuery(key);
    } else {
      searchParams.set(key, value);
      navigate({
        pathname: '/',
        search: searchParams.toString(),
      });
    }
  };

  const removeQuery = (key: any) => {
    searchParams.delete(key);
    navigate({
      pathname: '/',
      search: searchParams.toString(),
    });
  };
  return {
    addQuery,
    removeQuery,
  };
};

export default useUrlSearchParams;
