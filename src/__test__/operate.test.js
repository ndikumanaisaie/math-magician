import operate from '../logic/operate';

describe('operate', () => {
  test('return addition', () => {
    expect(operate(10, 2, '+')).toBe('12');
  });
  test('return substraction', () => {
    expect(operate(10, 2, '-')).toBe('8');
  });
  test('return multiplication', () => {
    expect(operate(10, 2, 'x')).toBe('20');
  });
  test('return division', () => {
    expect(operate(10, 2, '÷')).toBe('5');
  });
  test('return modulus', () => {
    expect(operate(10, 2, '%')).toBe('0');
  });
});
