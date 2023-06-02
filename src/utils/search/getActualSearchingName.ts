const getActualSearchingName = (brand: string[] | undefined, searchTerm: string[] | undefined) => {
  if (typeof brand !== 'undefined' && typeof brand?.length !== 'undefined' && brand?.length > 0) {
    if (brand?.length > 1) {
      return `${brand[0]} and others...`;
    } else {
      return brand[0];
    }
  } else {
    if (
      typeof searchTerm !== 'undefined' &&
      typeof searchTerm?.length !== 'undefined' &&
      searchTerm?.length > 0
    ) {
      return `${searchTerm[0]}`;
    } else {
      return 'All shoes';
    }
  }
};

export default getActualSearchingName;
