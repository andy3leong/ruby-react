import { findIndex } from 'lodash';
import * as cx from '../actions/constants';
import { success } from '../helpers/async';

const initialState = {
  users: [],
  paginate: null,
};

export default (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case success(cx.GET_USERS):
      return Object.assign({}, state, {
        users: action.payload.data,
        paginate: action.payload.paginate,
      });
    case success(cx.GET_USER): {
      const users = state.users.slice();
      const idx = findIndex(users, { id: action.payload.user.id });

      if (idx > -1) {
        users[idx] = action.payload.user;
      } else {
        users.push(action.payload.user);
      }

      return Object.assign({}, state, { users });
    }
    case success(cx.CREATE_USER):
      newState = state.users.slice();
      newState.push(action.payload.user);
      return Object.assign({}, state, {
        users: newState,
      });
    case success(cx.UPDATE_USER):
      newState = state.users.slice().map(user =>
        (user.id === action.payload.data.id
          ? action.payload.data
          : user),
      );
      return Object.assign({}, state, {
        users: newState,
      });
    case success(cx.DELETE_USER):
      newState = state.users.filter(user =>
        (user.id !== action.payload.id),
      );
      return Object.assign({}, state, {
        users: newState,
      });
    default:
      return state;
  }
};
