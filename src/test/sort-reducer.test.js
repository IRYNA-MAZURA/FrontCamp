import sort from '../reducers/sort';
import { CHANGE_SORT_TYPE, ERROR } from '../constants/REDUX';

const initialState = {
    sortType: 'release_date',
    types: [
        'release_date',
        'vote_average'
    ]
}
describe('app reducer', () => {
    it('should return initialState, type, sortType', () => {
      expect(sort(initialState, {
          type: CHANGE_SORT_TYPE,
          sortType: 'release_date'
        })).toEqual({...initialState, sortType: 'release_date'})
    });
    it('should return the initialState', () => {
        expect(sort(initialState, {
            type: ERROR,
            sortType: 'release_date'
          })).toEqual(initialState);
    });
})