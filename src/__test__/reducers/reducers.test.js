import reducer from '../../reducers';
import ProductMock from '../../__mocks__/productMock';

describe('Reducers', () => {
  test('Retornar initial state', () => {
    //   Si se revisa el reducer, si no recibe un action envía el estado tal cual está
    expect(reducer({}, '')).toEqual({});
  });

  test('ADD_TO_CART', () => {
    const INITIAL_STATE = {
      cart: [],
    };
    const PAYLOAD = ProductMock;
    const ACTION = {
      type: 'ADD_TO_CART',
      payload: PAYLOAD,
    };
    const EXPECTED = {
      cart: [
        ProductMock,
      ],
    };
    expect(reducer(INITIAL_STATE, ACTION)).toEqual(EXPECTED);
  });

  test('REMOVE_FROM_CART', () => {
    const INITIAL_STATE = {
      cart: [ProductMock],
    };
    const ACTION = {
      type: 'REMOVE_FROM_CART',
      payload: ProductMock,
    };
    const EXPECTED = {
      cart: [],
    };
    expect(reducer(INITIAL_STATE, ACTION)).toEqual(EXPECTED);
  });
});
