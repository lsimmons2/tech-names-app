function getId(names){
  return names.reduce((maxId, name) => {
    return Math.max(name.id, maxId)
  }, -1) + 1
}

let nameReducer = function(names = [], action) {
  switch (action.type){

    case 'ADD_NAME':
      return [
        {
          name: action.name,
          real: false,
          id: getId(names)
        }, ...names
      ]

    case 'COMPLETE_NAME':
      return names.map( name => {
          return name.id === action.id ?
            Object.assign({}, name, {real: !name.real}) : name;
      })

    case 'DELETE_NAME':
      return names.filter( name => {
          return name.id !== action.id
      })

    default:
      return names;

  }
}

export default nameReducer
