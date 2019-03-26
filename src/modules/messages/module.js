// @flow
import { globalActionTypes } from '../globalActionTypes';

export const actionTypes = {
  GET_USER_MESSAGES_RECEIVED_ACTION: {
    SUCCESS: 'GET_USER_MESSAGES_RECEIVED_SUCCESS',
    REQUEST: 'GET_USER_MESSAGES_RECEIVED_REQUEST',
    API_LOADING_START: 'GET_USER_MESSAGES_RECEIVED_API_LOADING_START',
    API_LOADING_STOP: 'GET_USER_MESSAGES_RECEIVED_API_LOADING_STOP',
  },
  GET_USER_MESSAGES_SENT_ACTION: {
    SUCCESS: 'GET_USER_MESSAGES_SENT_SUCCESS',
    REQUEST: 'GET_USER_MESSAGES_SENT_REQUEST',
    API_LOADING_START: 'GET_USER_MESSAGES_SENT_API_LOADING_START',
    API_LOADING_STOP: 'GET_USER_MESSAGES_SENT_API_LOADING_STOP',
  },
  DELETE_USER_MESSAGE_ACTION: {
    SUCCESS: 'DELETE_USER_MESSAGE_SUCCESS',
    REQUEST: 'DELETE_USER_MESSAGE_REQUEST',
    API_LOADING_START: 'DELETE_USER_MESSAGE_API_LOADING_START',
    API_LOADING_STOP: 'DELETE_USER_MESSAGE_API_LOADING_STOP',
  },
  UPDATE_MESSAGE_STATUS_ACTION: {
    SUCCESS: 'UPDATE_MESSAGE_STATUS_SUCCESS',
    REQUEST: 'UPDATE_MESSAGE_STATUS_REQUEST',
    API_LOADING_START: 'UPDATE_MESSAGE_STATUS_API_LOADING_START',
    API_LOADING_STOP: 'UPDATE_MESSAGE_STATUS_API_LOADING_STOP',
  },
  GET_USERS_ACTION: {
    SUCCESS: 'GET_USERS_SUCCESS',
    REQUEST: 'GET_USERS_REQUEST',
    API_LOADING_START: 'GET_USERS_API_LOADING_START',
    API_LOADING_STOP: 'GET_USERS_API_LOADING_STOP',
  },
  SEND_MESSAGE_ACTION: {
    REQUEST: 'SEND_MESSAGE_REQUEST',
    API_LOADING_START: 'SEND_MESSAGE_API_LOADING_START',
    API_LOADING_STOP: 'SEND_MESSAGE_API_LOADING_STOP',
  },
};

export const getUserMessagesReceivedActionCreator = () =>
  ({
    type: actionTypes.GET_USER_MESSAGES_RECEIVED_ACTION.REQUEST,
  });

export const getUserMessagesSentActionCreator = () =>
  ({
    type: actionTypes.GET_USER_MESSAGES_SENT_ACTION.REQUEST,
  });

export const deleteUserMessageActionCreator = (messageId: string, msgType: string, callback: any) =>
  ({
    type: actionTypes.DELETE_USER_MESSAGE_ACTION.REQUEST,
    messageId,
    msgType,
    callback,
  });

export const updateMessageStatusActionCreator = (messageId: string, msgStatus: string) =>
  ({
    type: actionTypes.UPDATE_MESSAGE_STATUS_ACTION.REQUEST,
    messageId,
    msgStatus,
  });

export const getUsersActionCreator = (search: string) => ({
  type: actionTypes.GET_USERS_ACTION.REQUEST,
  search,
});

export const sendMessageActionCreator = (messageObject: any, callback: any) => ({
  type: actionTypes.SEND_MESSAGE_ACTION.REQUEST,
  messageObject,
  callback,
});

export const setUserListActionCreator = (userList: any) => ({
  type: actionTypes.GET_USERS_ACTION.SUCCESS,
  userList,
});

const initialState: MessagesStateType = {
  messagesReceived: [],
  messagesSent: [],
  userList: [],
  apiLoading: false,
};

export function messagesReducer(state: MessagesStateType = initialState, action: any) {
  switch (action.type) {
    case actionTypes.GET_USERS_ACTION.API_LOADING_START:
    case actionTypes.GET_USER_MESSAGES_SENT_ACTION.API_LOADING_START:
    case actionTypes.GET_USER_MESSAGES_RECEIVED_ACTION.API_LOADING_START:
      return { ...state, apiLoading: true };
    case actionTypes.GET_USERS_ACTION.API_LOADING_STOP:
    case actionTypes.GET_USER_MESSAGES_RECEIVED_ACTION.API_LOADING_STOP:
    case actionTypes.GET_USER_MESSAGES_SENT_ACTION.API_LOADING_STOP:
      return { ...state, apiLoading: false };
    case actionTypes.GET_USER_MESSAGES_RECEIVED_ACTION.SUCCESS:
      return {
        ...state,
        messagesReceived: action.messages,
      };
    case actionTypes.GET_USER_MESSAGES_SENT_ACTION.SUCCESS:
      return {
        ...state,
        messagesSent: action.messages,
      };
    case actionTypes.GET_USERS_ACTION.SUCCESS:
      return {
        ...state,
        userList: action.userList,
      };
    case globalActionTypes.LOGOUT_ACTION.SUCCESS:
      return initialState;
    default:
      return state;
  }
}
