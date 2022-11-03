import operate from '../logic/operate';

describe('operate', () => {
  test('return addition', () => {
    expect(operate(10, 2, '+')).toBe('10');
  });
  test('return substraction', () => {
    expect(operate(10, 2, '-')).toBe('2');
  });
  test('return multiplication', () => {
    expect(operate(10, 2, 'x')).toBe('24');
  });
  test('return division', () => {
    expect(operate(10, 2, '÷')).toBe('1.5');
  });
  test('return modulus', () => {
    expect(operate(10, 2, '%')).toBe('2');
  });
});
