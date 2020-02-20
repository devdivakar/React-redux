

function detailReducer(state = {
    "id":'',
    "name":'',
    "value":'',
    "config":'',
    "status":'',
    "Desc":''
    }, action) {
    switch (action.type) {
      case 'Detail':
            return action.data;
        break;

      default: return state;
    }

    }
export default detailReducer;