export default (state = {}, action) => {
  const { names, location, issue, id } = action;
  switch (action.type) {
  
    // ADD TICKET
    case 'ADD_TICKET':
      return Object.assign({}, state, {
        [id]: {
          names: names,
          location: location,
          issue: issue,
          id: id
        }
      });
      
    // DELETE TICKET
    case 'DELETE_TICKET':
      let newState = { ...state };
      delete newState[id];
      return newState;

  default:
    return state;
  }
};