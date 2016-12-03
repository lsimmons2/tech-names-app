
let rightReducer = function(right = [], action) {

  switch (action.type){

    case 'GUESSED':
      return [
        action.pair, ...right
      ]

    default:
      return right;

  }

}

export default rightReducer
