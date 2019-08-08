import { combineReducers } from 'redux';
import LibarayReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
  libraries: LibarayReducer,
  selectedLibraryId: SelectionReducer
});
