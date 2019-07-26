interface infoState {
  search: string
}

const INITIAL_STATE = {
  search: 'hook'
}

type Action =
 | {
   type: 'CHANGE_SEARCH',
   value: string
 }

function info(state: infoState = INITIAL_STATE, action:Action) {
  switch(action.type){
    case 'CHANGE_SEARCH': {
      return {...state, search: action.value}
    }
    
    default: return state
  }
}

export {
  info,
  infoState
}