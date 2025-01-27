
function sumArray(arrayOfNumbers) {
    let sum = 0;

    // Проходим по каждому числу в массиве и добавляем его к общей сумме
    arrayOfNumbers.forEach(number => {
        sum += number;
    });

    return sum;
}

// Пример массива чисел
let numbers = [10000, 20000, 30000];

// Выводим сумму элементов массива на консоль
console.log(sumArray(numbers)); 
