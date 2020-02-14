import search from '../reducers/search';
import { ERROR, SET_SEARCH, CHANGE_SEARCH_VALUE, CHANGE_SEARCH_BY } from '../constants/REDUX';

const initialState = {
    value: '',
    searchBy: 'title'
}
describe('app reducer', () => {
    it('should return the value and searchBy', () => {
      expect(search(initialState, {
          type: SET_SEARCH,
          value: 'dracula',
          searchBy: 'title'
        })).toEqual({value: 'dracula', searchBy: 'title'})
    });
    it('should return the initialState and value', () => {
        expect(search(initialState, {
            type: CHANGE_SEARCH_VALUE,
            value: 'dracula',
            searchBy: 'title'
          })).toEqual({...initialState, value: 'dracula'});
    });
    it('should return the initialState and searchBy', () => {
        expect(search(initialState, {
            type: CHANGE_SEARCH_BY,
            value: 'dracula',
            searchBy: 'genre'
        })).toEqual({...initialState, searchBy: 'genre'})
    });
    it('should return the initialState', () => {
        expect(search(initialState, {
            type: ERROR,
            value: 'dracula',
            searchBy: 'genre'
        })).toEqual(initialState)
    });
})