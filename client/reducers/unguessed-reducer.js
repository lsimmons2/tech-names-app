
import _ from 'lodash';


let unguessedReducer = function(unguessed = [], action) {

  switch (action.type){

    case 'REMOVE':
      return _.remove(unguessed, function(pair){
        return pair === action.pair
      })

    default:
      return unguessed;

  }

}

export default unguessedReducer
