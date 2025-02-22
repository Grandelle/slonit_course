const { capitalizeFirstLetter, truncateString, isSubstring } = require('./myStringFunctions');

describe('capitalizeFirstLetter', () => {
  test('возвращает пустую строку, если входная строка пустая', () => {
    expect(capitalizeFirstLetter('')).toBe('');
  });

  test('преобразует первую букву в заглавную', () => {
    expect(capitalizeFirstLetter('hello')).toBe('Hello');
    expect(capitalizeFirstLetter('javaScript')).toBe('JavaScript');
  });

  test('не изменяет строку, если первая буква уже заглавная', () => {
    expect(capitalizeFirstLetter('World')).toBe('World');
  });
});

describe('truncateString', () => {
  test('возвращает исходную строку, если её длина меньше или равна лимиту', () => {
    expect(truncateString('Hello', 10)).toBe('Hello');
  });

  test('обрезает строку и добавляет троеточие, если длина строки превышает лимит и есть подходящий символ для обрезки', () => {
    const input = "Hello world, how are you?";
    // При maxLength = 13, подстрока: "Hello world," 
    // Последний подходящий символ - запятая (или пробел), результат: "Hello world..."
    expect(truncateString(input, 13)).toBe("Hello world...");
  });

  test('обрезает строго по лимиту, если в первой части отсутствуют разделители', () => {
    const input = "HelloWorldWithoutSpaces";
    // При maxLength = 10, ожидаем: input.slice(0, 10) + "..."
    expect(truncateString(input, 10)).toBe(input.slice(0, 10) + "...");
  });
});

describe('isSubstring', () => {
  test('возвращает true, если первая строка содержит вторую', () => {
    expect(isSubstring("JavaScript", "Script")).toBe(true);
  });

  test('возвращает true, если вторая строка содержит первую', () => {
    expect(isSubstring("Script", "JavaScript")).toBe(true);
  });

  test('возвращает false, если ни одна строка не является подстрокой другой', () => {
    expect(isSubstring("Hello", "World")).toBe(false);
  });

  test('возвращает true, если одна из строк пустая (так как пустая строка считается подстрокой)', () => {
    expect(isSubstring("", "abc")).toBe(true);
    expect(isSubstring("abc", "")).toBe(true);
  });
});
