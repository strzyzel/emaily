import { FETCH_USER } from '../actions/types';

export default function(state = null, action){
 
    let isEmpty = (obj)=>{
        for(let key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    };
 
 
    switch(action.type){
        case FETCH_USER:
            // return action.payload || false;
            return isEmpty(action.payload.passport) ? false: action.payload;
        default:
            return state;
    }
 
}

// export default function(state = null, action) {
//   switch (action.type) {
//     case FETCH_USER:
//       return action.payload || false;
//     default:
//       return state;
//   }
// }