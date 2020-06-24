import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Footer from '../../components/Footer';

describe('<Footer/>', () => {
  const footer = mount(<Footer />);
  test('Component render', () => {
    expect(footer.length).toBe(1);
  });
  test('Class Footer-title found with text Platzi Store', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });
});

//Los ** tests de Snapshot** son de gran utilidad cuando se quiere asegurar que la UI no cambia inesperadamente.
describe('Footer Snapshot', () => {
  test('Comprobar la UI del componente Footer', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});
