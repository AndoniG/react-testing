import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/providerMock';
import ProductMock from '../../__mocks__/productMock';
import Product from '../../components/Product';

describe('<Product />', () => {
  test('Render del componente Product', () => {
    const PRODUCT = shallow(
      <ProviderMock>
        <Product />
      </ProviderMock>,
    );

    expect(PRODUCT.length).toEqual(1);
  });

  test('Comprobar el botón de comprar', () => {
    // jest.fn() indica que no nos interesa que se ejecute el código interno de la función
    const ADD_TO_CART = jest.fn();
    const WRAPPER = mount(
      <ProviderMock>
        <Product product={ProductMock} handleAddToCart={ADD_TO_CART} />
      </ProviderMock>,
    );

    WRAPPER.find('button').simulate('click');
    expect(ADD_TO_CART).toHaveBeenCalledTimes(1);
  });
});
