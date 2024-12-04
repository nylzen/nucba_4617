import { TYPES } from "../action-types/action-types";

export const COUNTER_INITIAL_STATE = {
  counter: 0,
};

export const countReducer = (state, action) => {
  switch(action.type){
    case TYPES.INCREMENT:
      return { counter: state.counter + 1 }
    case TYPES.INCREMENT_5:
      return { counter: state.counter + 5 }
    case TYPES.MULTIPLY:
      return { counter: state.counter * 2 }
    case TYPES.DECREMENT:
      return { counter: state.counter - 1 }
    case TYPES.DECREMENT_5:
      return { counter: state.counter - 5 }
    case TYPES.DIVIDE:
      return { counter: state.counter / 2 }
    default:
      return state
  }
};
