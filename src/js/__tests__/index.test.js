import ErrorRepository from '../../index';

test('error found', () => {
  const errorsDataBase = new ErrorRepository();
  errorsDataBase.errorsArray.set(404, 'страница не найдена');
  errorsDataBase.errorsArray.set(400, 'рандомная ошибка');

  expect(errorsDataBase.translate(404)).toBe('страница не найдена');
});

test('error not found', () => {
  const errorsDataBase = new ErrorRepository();
  errorsDataBase.errorsArray.set(404, 'страница не найдена');
  errorsDataBase.errorsArray.set(400, 'рандомная ошибка');

  expect(errorsDataBase.translate(401)).toBe('Unknown error');
});
