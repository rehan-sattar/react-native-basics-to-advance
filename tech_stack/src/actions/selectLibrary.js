import { SELECT_LIBRARY } from './types';

export const selectLibrary = libraryId => ({
  type: SELECT_LIBRARY,
  payload: libraryId
});
