const { sumOfNumericFields, sortedNumericFieldNames } = require('./myObjectMethods');

describe('sumOfNumericFields', () => {
    test('Должна возвращать сумму всех числовых полей объекта', () => {
        const obj = { a: 10, b: 5, c: "строка", d: true, e: 20 };
        expect(sumOfNumericFields(obj)).toBe(35);
    });

    test('Должна возвращать 0, если числовых полей нет', () => {
        const obj = { a: "текст", b: null, c: undefined, d: false };
        expect(sumOfNumericFields(obj)).toBe(0);
    });

    test('Должна работать с отрицательными числами', () => {
        const obj = { a: -10, b: 20, c: -5, d: 5 };
        expect(sumOfNumericFields(obj)).toBe(10);
    });

    test('Должна работать с пустым объектом', () => {
        expect(sumOfNumericFields({})).toBe(0);
    });
});

describe('sortedNumericFieldNames', () => {
    test('Должна возвращать массив имен числовых полей, отсортированный по убыванию значений', () => {
        const obj = { a: 3, b: 7, c: 1, d: "не число", e: 5 };
        expect(sortedNumericFieldNames(obj)).toEqual(["b", "e", "a", "c"]);
    });

    test('Должна возвращать пустой массив, если числовых полей нет', () => {
        const obj = { a: "текст", b: null, c: undefined, d: {} };
        expect(sortedNumericFieldNames(obj)).toEqual([]);
    });

    test('Должна учитывать отрицательные числа при сортировке', () => {
        const obj = { a: -3, b: -1, c: -10, d: 0 };
        expect(sortedNumericFieldNames(obj)).toEqual(["d", "b", "a", "c"]);
    });

    test('Должна работать с пустым объектом', () => {
        expect(sortedNumericFieldNames({})).toEqual([]);
    });

    test('Должна корректно работать с одинаковыми значениями', () => {
        const obj = { a: 2, b: 2, c: 3, d: 1 };
        expect(sortedNumericFieldNames(obj)).toEqual(["c", "a", "b", "d"]);
    });
});
