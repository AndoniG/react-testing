import getData from '../../utils/getData';

describe('Fetch API', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('Llamar una API y retornar datos', () => {

    fetch.mockResponseOnce(JSON.stringify({
      data: '12345',
    }));

    getData('https://google.com').then((res) => {
      expect(res.data).toEqual('12345');
    });

    // Verificar que si hay respuesta del sitio
    expect(fetch.mock.calls[0][0]).toEqual('https://google.com');
  });

});
