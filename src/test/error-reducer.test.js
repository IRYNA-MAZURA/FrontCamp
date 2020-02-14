import error from '../reducers/error';
import { ERROR, SET_SEARCH } from '../constants/REDUX';

const initialState = {
    errorText: ''
}
describe('app reducer', () => {
    it('should return the errorText', () => {
      expect(error(undefined, {
          type: ERROR,
          errorText: 'error'
        })).toEqual({errorText: 'error'})
    });
    it('should return the initialState', () => {
        expect(error(initialState, {
            type: SET_SEARCH,
            errorText: ''
          })).toEqual(initialState)
      });
})