import React, { useEffect } from 'react';
import FilterViewComponent from './components/filterComponent';

const HomePageView = (props: any) => {
  useEffect(() => {
    props.setPokemonsList();
  }, []);
  console.log('props', props);
  return (
    <>
      dasdasass
      <FilterViewComponent />
    </>
  );
};

export default HomePageView;
