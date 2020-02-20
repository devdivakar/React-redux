
function listReducer(state = [], action) {
    switch (action.type) {
      case 'List':
          return action.data['data'];
        break;
      default: return state;
    }

    }
export default listReducer;