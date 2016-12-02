function getId(state){
  return state.names.reduce((maxId, name) => {
    return Math.max(name.id, maxId)
  }, -1) + 1
}

let reducer = function(state, action) {
  switch (action.type){
    case 'ADD_NAME':
      return Object.assign({}, state, {
        names: [
          {
            name: action.name,
            real: false,
            id: getId(state)
          }, ...state.names]
      })

    case 'COMPLETE_NAME':
      return Object.assign({}, state, {
        names: state.names.map( name => {
          return name.id === action.id ?
            Object.assign({}, name, {real: !name.real}) : name;
        })
      })

    case 'DELETE_NAME':
      return Object.assign({}, state, {
        names: state.names.filter( name => {
          return name.id !== action.id
        })
      })

    default:
      return state;
  }
}

export default reducer
