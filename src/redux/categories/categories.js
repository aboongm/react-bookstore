const STATUS = 'STATUS';

export const checkStatusAction = () => ({
  type: STATUS,
});

const categoriesReducer = (state = '', action) => {
  const information = 'UNDER-CONSTRUCTION';
  switch (action.type) {
    case STATUS:
      return information;
    default:
      return state;
  }
};

export default categoriesReducer;
