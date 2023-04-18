export const handleSortReset = (setState, defaultState) => {
  setState(defaultState);
};

export const handleAlpha = (array, setState) => {
  const sortedArray = [...array].sort((a, b) => (a.name > b.name ? 1 : -1));
  setState(sortedArray);
};

export const handleReverseAlpha = (array, setState) => {
  const sortedArray = [...array].sort((a, b) => (a.name < b.name ? 1 : -1));
  setState(sortedArray);
};

export const handleNumeric = (array, setState) => {
  const sortedArray = [...array].sort((a, b) =>
    a.idade > b.idade ? 1 : a.idade == b.idade ? (a.name > b.name ? 1 : -1) : -1
  );
  setState(sortedArray);
};

export const handleReverseNumeric = (array, setState) => {
  const sortedArray = [...array].sort((a, b) =>
    a.idade < b.idade ? 1 : a.idade == b.idade ? (a.name < b.name ? 1 : -1) : -1
  );
  setState(sortedArray);
};
