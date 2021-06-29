import {createStore} from 'redux';
import {contactsReducer} from './actions/reducers/contacts';

export const store = createStore(contactsReducer);