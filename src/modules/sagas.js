import { fork, all } from 'redux-saga/effects';
import { switchLanguageSagas } from './translation';
import { loginSagas, logoutSagas, registerDeviceTokenSagas } from './authentication';
import { getProfileSagas } from './profile';
import { loadDataSagas } from './dataLoader';
import { getUserCoursesSagas, getUserSessionsSagas } from './courses';
import {
  getMessagesReceivedSagas,
  getMessagesSentSagas,
  updateMessageStatusSagas,
  getUsersStatusSagas,
  sendMessageSagas,
} from './messages';

export default function* rootSaga() {
  yield all([
    fork(switchLanguageSagas),
    fork(loginSagas),
    fork(logoutSagas),
    fork(getProfileSagas),
    fork(loadDataSagas),
    fork(getUserCoursesSagas),
    fork(getUserSessionsSagas),
    fork(getMessagesReceivedSagas),
    fork(getMessagesSentSagas),
    fork(registerDeviceTokenSagas),
    fork(updateMessageStatusSagas),
    fork(getUsersStatusSagas),
    fork(sendMessageSagas),
  ]);
}
