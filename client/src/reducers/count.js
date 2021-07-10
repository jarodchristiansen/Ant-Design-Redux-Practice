const INITIAL_STATE = {
    count: 0
  }
  

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'INCREMENT':
          return {
            count: state.count + 1
          };
          case 'DECREMENT':
            return {
              count: state.count - 1
            };
            case 'CLEAR':
              return {
                count: state.count * 0
              }
            default: 
              return state;
      }
  }