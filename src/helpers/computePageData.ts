const computePageData = (page: number) => {
  const limit = 20;
  if (page === 1) {
    return {
      offset: 0,
      limit: limit,
    };
  }
  if (page === null) {
    return {
      offset: 0,
      limit: limit,
    };
  }
  if (page === 0) {
    return {
      offset: 0,
      limit: limit,
    };
  }
  return {
    offset: page === 1 ? 0 : (page - 1) * limit,
    limit: limit,
  };
};

export default computePageData;
