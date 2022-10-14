import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages';
const RootNavigator: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
    </Routes>
  );
};

export default RootNavigator;
