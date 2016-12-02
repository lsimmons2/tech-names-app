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
  },

  createNewUserId: function(){
    return {
      type: 'CREATE_USER_ID',
      id: Math.round(Math.random()*100)
    }
  }
}

// store.dispatch(addName('some name'))

export default actions
