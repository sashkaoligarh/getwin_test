import React, { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { filterComponentProps } from './index';
import { useUrlSearchParams } from '../../../../hooks';
import config from '../../../../config';
const FilterViewComponent = (props: filterComponentProps) => {
  const searchParams: any = new URLSearchParams(location.search);
  const [type, setType] = useState('All types');
  const isMounted = useRef(false);
  const { addQuery, removeQuery } = useUrlSearchParams();
  const {
    setPokemonsTypes,
    types,
    setPokemonsListByType,
    loadingTypes,
    setPokemonsList,
    setPage,
  } = props;

  useEffect(() => {
    if (!isMounted.current) {
      setPokemonsTypes();
    }

    return () => {
      isMounted.current = true;
    };
  }, []);

  useEffect(() => {
    if (searchParams.get('type') !== null && types.length > 0) {
      setType(
        types.find((item: any) => {
          return (
            item.url === `${config.apiUrl}type/${searchParams.get('type')}/`
          );
        }).url,
      );
    }
  }, [types]);
  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value);
    if (event.target.value === 'All types') {
      removeQuery('type');
      setPokemonsList({
        offset: 0,
        limit: 20,
      });
      return;
    }
    const parsed = new URL(event.target.value);
    setPage(1);
    addQuery('page', 1);
    addQuery('type', parsed.pathname.split('/')[4]);

    setPokemonsListByType(event.target.value, {
      offset: 0,
      limit: 20,
    });
  };

  if (loadingTypes) return <>loading</>;
  if (types.length <= 0) return null;

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Type</InputLabel>
        <Select
          sx={{ backgroundColor: '#fff' }}
          value={type}
          label="Age"
          onChange={handleChange}>
          <MenuItem value={'All types'}>All types</MenuItem>
          {types.map((item: any) => (
            <MenuItem key={item.name} value={item.url}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default FilterViewComponent;
