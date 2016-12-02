let actions = {
  addName: function(name){
    return {
      type: 'ADD_NAME',
      name: name
    }
  },
  completeName: function(id){
    return {
      type: 'COMPLETE_NAME',
      id: id
    }
  },

  deleteName: function(id){
    return {
      type: 'DELETE_NAME',
      id: id
    }
  }
}

// store.dispatch(addName('some name'))

export default actions
