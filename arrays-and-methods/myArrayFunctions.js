function mySlice(arr, start = 0, end = arr.length) {
    const result = [];
    const len = arr.length;

    // Приведение индексов к корректным значениям (отрицательные делаем в диапозоне от 0 до len)
    start = start < 0 ? Math.max(len + start, 0) : Math.min(start, len);
    end = end < 0 ? Math.max(len + end, 0) : Math.min(end, len);

    for (let i = start; i < end; i++) {
        result.push(arr[i]);
    }

    return result;
}

function myIndexOf(arr, item, from = 0) {
    const len = arr.length;
    from = from < 0 ? Math.max(len + from, 0) : from; // Приведение индекса к корректному значению

    for (let i = from; i < len; i++) {
        if (arr[i] === item) {
            return i;
        }
    }

    return -1;
}

function myIncludes(arr, item, from = 0) {
    const len = arr.length;
    from = from < 0 ? Math.max(len + from, 0) : from; // Приведение индекса к корректному значению

    for (let i = from; i < len; i++) {
        if (arr[i] === item) {
            return true;
        }
    }

    return false;
}

module.exports = { mySlice, myIndexOf, myIncludes };