const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const INCREMENT_SECOND = 'INCREMENT_SECOND'
const DECREMENT_SECOND = 'DECREMENT_SECOND'

const initialState = {
    count: 1,
    countSecond: 2
}

export const countReducer = (state = initialState, action) => {

    switch (action.type) {
      case INCREMENT:
        return {
          ...state,
          count: state.count + 1,
        };
        case DECREMENT:
        return {
          ...state,
          count: state.count - 1,
        };
        case INCREMENT_SECOND:
        return {
          ...state,
          countSecond: state.countSecond + 1,
        };
        case DECREMENT_SECOND:
        return {
          ...state,
          countSecond: state.countSecond - 1,
        };
      default:
        return state;
    }
}

export function incrementCount() {
    return {
        type: INCREMENT
    }
}

export function decrementCount() {
    return {
        type: DECREMENT
    }
}

export function incrementCountSecond() {
  return {
      type: INCREMENT_SECOND
  }
}

export function decrementCountSecond() {
  return {
      type: DECREMENT_SECOND
  }
}
