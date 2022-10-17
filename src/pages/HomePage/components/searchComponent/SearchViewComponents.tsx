import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { useDebounce } from '../../../../hooks';
import config from '../../../../config';
import { CircularProgress } from '../../../../components';
import './styles.scss';
import { searchComponentProps } from './index';
const SearchViewComponent = (props: searchComponentProps) => {
  const { setPokemonInfo, loadingGetInfo } = props;
  const [search, setSearch] = React.useState<string>('');
  const debounce = useDebounce(search, 500);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  useEffect(() => {
    if (search !== '') {
      setPokemonInfo(`${config.apiUrl}pokemon/${search}`);
    }
  }, [debounce]);
  return (
    <div className="input-container">
      <TextField
        sx={{ backgroundColor: '#fff', width: '400px' }}
        label="Search pokemon"
        multiline
        maxRows={1}
        value={search}
        onChange={handleChange}
      />
      <div className="loader">
        {loadingGetInfo && search.length > 0 ? <CircularProgress /> : null}
      </div>
    </div>
  );
};

export default SearchViewComponent;
