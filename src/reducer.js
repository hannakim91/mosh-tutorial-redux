function reducer(state = [], action) {
  switch(action.type) {
    case "ADD_BUG":
      return [...state, { description: action.payload.description}]
    case "REMOVE_BUG":
      return state.filter(bug => bug.id !== action.payload.id)
    default:
      return state
  }

}

// if state is undefined, it'll use [] instead

// if statement version:
  // if (action.type === 'ADD_BUG') {
  //   return [...state, { description: action.payload.description}]
  // }
  // else if (action.type === 'REMOVE_BUG') {
  //   return state.filter(bug => bug.id !== action.payload.id)
  // }
  // return state