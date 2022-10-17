import React, { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { filterComponentProps } from './index';

const FilterViewComponent = (props: filterComponentProps) => {
  const [type, setType] = useState('All types');
  const isMounted = useRef(false);
  const {
    setPokemonsTypes,
    types,
    setPokemonsListByType,
    loadingGetPokemonInfo,
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

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value);
    setPage(1);
    if (event.target.value === 'All types') {
      setPokemonsList({
        offset: 0,
        limit: 20,
      });
      return;
    }
    setPokemonsListByType(event.target.value, {
      offset: 0,
      limit: 20,
    });
  };

  if (loadingGetPokemonInfo) return <>loading</>;
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
