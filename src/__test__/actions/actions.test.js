import actions from '../../actions';
import ProductMock from '../../__mocks__/productMock';

describe('Actions', () => {
  test('addToCart Action', () => {
    const PAYLOAD = ProductMock;
    const EXPECTED = {
      type: 'ADD_TO_CART',
      payload: PAYLOAD,
    };
    expect(actions.addToCart(PAYLOAD)).toEqual(EXPECTED);
  });

  test('removeFormCart Action', () => {
    const PAYLOAD = ProductMock;
    const EXPECTED = {
      type: 'REMOVE_FROM_CART',
      payload: PAYLOAD,
    };
    expect(actions.removeFromCart(PAYLOAD)).toEqual(EXPECTED);
  });
});
