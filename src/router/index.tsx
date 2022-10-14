import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

const RootNavigator: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<div></div>}></Route>
      </Routes>
    </>
  );
};

export default RootNavigator;
