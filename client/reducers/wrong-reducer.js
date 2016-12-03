
let wrongReducer = function(wrong = [], action) {

  switch (action.type){

    case 'GUESSED':
      return [
        action.pair, ...wrong
      ]

    default:
      return wrong;

  }

}

export default wrongReducer
