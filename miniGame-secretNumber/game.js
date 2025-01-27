// Функция для загадывания случайного числа от 1 до 100
const generateSecretNumber = () => Math.floor(Math.random() * 100) + 1;

// Функция для выполнения одного шага угадывания
const guessNumber = (min, max) => Math.floor((min + max) / 2);

// Главная функция игры 
function secretNumberGame() {
    const secretNumber = generateSecretNumber();
    console.log(`Компьютер 1 загадал число: ${secretNumber}.\n`);

    let min = 1;
    let max = 100;

    while (true) {
        const guess = guessNumber(min, max);  // Получаем число для угадывания в каждой итерации
        console.log(`Компьютер 2: Пробую число ${guess}.`);

        if (guess === secretNumber) {
            console.log(`Компьютер 1: Угадал!`);
            break;
        } else if (guess > secretNumber) {
            console.log(`Компьютер 1: Меньше.\n`);
            max = guess - 1;
        } else {
            console.log(`Компьютер 1: Больше.\n`);
            min = guess + 1;
        }
    }
}

secretNumberGame(); // Запуск игры
