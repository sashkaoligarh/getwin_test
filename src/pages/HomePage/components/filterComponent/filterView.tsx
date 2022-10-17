import React, { useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const FilterViewComponent = (props: any) => {
  const isMounted = useRef(false);
  const {
    setPokemonsTypes,
    types,
    setPokemonsListByType,
    loadingGetPokemonInfo,
    setPokemonsList,
  } = props;
  const [type, setType] = React.useState('All types');
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
    if (event.target.value === 'All types') {
      setPokemonsList({
        offset: 0,
        limit: 20,
      });
      return;
    }
    setPokemonsListByType(event.target.value);
  };
  if (loadingGetPokemonInfo === true) return <>loading</>;
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
