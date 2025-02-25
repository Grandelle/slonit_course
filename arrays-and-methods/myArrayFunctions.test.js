const { mySlice, myIndexOf, myIncludes } = require('./myArrayFunctions');

describe('mySlice', () => {
    test('извлекает подмассив в указанном диапазоне', () => {
        expect(mySlice([10, 20, 30, 40, 50], 1, 4)).toEqual([20, 30, 40]);
    });

    test('обрабатывает отрицательные значения start и end', () => {
        expect(mySlice([10, 20, 30, 40, 50], -4, -1)).toEqual([20, 30, 40]);
    });

    test('обрабатывает индексы, выходящие за границы массива', () => {
        expect(mySlice([10, 20, 30, 40, 50], -10, 10)).toEqual([10, 20, 30, 40, 50]);
    });

    test('возвращает пустой массив, если start >= end', () => {
        expect(mySlice([10, 20, 30, 40, 50], 3, 2)).toEqual([]);
    });
});

describe('myIndexOf', () => {
    test('находит индекс элемента', () => {
        expect(myIndexOf([10, 20, 30, 40, 50], 30)).toBe(2);
    });

    test('возвращает -1, если элемент не найден', () => {
        expect(myIndexOf([10, 20, 30, 40, 50], 60)).toBe(-1);
    });

    test('обрабатывает отрицательный начальный индекс', () => {
        expect(myIndexOf([10, 20, 30, 40, 50], 30, -3)).toBe(2);
    });

    test('обрабатывает начальный индекс, выходящий за границы массива', () => {
        expect(myIndexOf([10, 20, 30, 40, 50], 10, 10)).toBe(-1);
    });
});

describe('myIncludes', () => {
    test('возвращает true, если элемент содержится в массиве', () => {
        expect(myIncludes([10, 20, 30, 40, 50], 30)).toBe(true);
    });

    test('возвращает false, если элемент не содержится в массиве', () => {
        expect(myIncludes([10, 20, 30, 40, 50], 60)).toBe(false);
    });

    test('обрабатывает отрицательный начальный индекс', () => {
        expect(myIncludes([10, 20, 30, 40, 50], 40, -2)).toBe(true);
    });

    test('обрабатывает начальный индекс, выходящий за границы массива', () => {
        expect(myIncludes([10, 20, 30, 40, 50], 10, 10)).toBe(false);
    });
});
