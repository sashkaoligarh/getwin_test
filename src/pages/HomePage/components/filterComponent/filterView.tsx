import React, { useEffect } from 'react';

const FilterViewComponent = (props: any) => {
  useEffect(() => {
    props.setPokemonsTypes();
  }, []);
  return <>filter</>;
};

export default FilterViewComponent;
