import React from 'react';
import { mount, shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import ProviderMock from '../../__mocks__/providerMock';
import Header from '../../components/Header';

describe('<Header />', () => {
  test('Render del Header', () => {
    const HEADER = shallow(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );
    expect(HEADER.length).toEqual(1);
  });

  test('Render del título', () => {
    const HEADER = mount(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );
    expect(HEADER.find('.Header-title').text()).toEqual('Platzi Store');
  });
});

describe('Header Snapshot', () => {
  test('Comprobar el Snapshot de Header', () => {
    const HEADER = create(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );

    expect(HEADER.toJSON()).toMatchSnapshot();
  });
});
