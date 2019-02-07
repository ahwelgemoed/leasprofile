import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';

// My Reducers //
// TODO
const firebaseConfig = {
  apiKey: 'AIzaSyAHeJhaGSVYySm1PIeJ5WIco9Zty6Ppzus',
  authDomain: 'leasportfolio-c85d6.firebaseapp.com',
  databaseURL: 'https://leasportfolio-c85d6.firebaseio.com',
  projectId: 'leasportfolio-c85d6',
  storageBucket: 'leasportfolio-c85d6.appspot.com',
  messagingSenderId: '544623041812'
};
// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
};
// Initialize firebase instance
firebase.initializeApp(firebaseConfig);
// Initialize other services on firebase instance
const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  reduxFirestore(firebase) // <- needed if using firestore
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

// Create Inital store with reducers and initial state
const initialState = {};
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
