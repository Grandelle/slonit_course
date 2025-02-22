function capitalizeFirstLetter(str) {
    if (!str) return str; // Проверка на пустую строку
    return str[0].toUpperCase() + str.slice(1);
}
  
function truncateString(str, maxLength) {
    if (str.length <= maxLength) return str; // Если строка короткая, возвращаем её как есть

    // Берем подстроку длиной maxLength
    let subStr = str.slice(0, maxLength);
    
    // Определяем символы, по которым можно обрезать строку
    const breakChars = [' ', ',', '.', '!', '?', ':', ';'];
    let lastBreakIndex = -1;
    
    // Находим последний индекс любого из допустимых символов
    for (let char of breakChars) {
      let index = subStr.lastIndexOf(char);
      if (index > lastBreakIndex) {
        lastBreakIndex = index;
      }
    }
    
    // Если ни один из символов не найден, обрезаем строго по maxLength
    if (lastBreakIndex === -1) {
      return subStr + '...';
    }
    
    // Обрезаем строку до найденного индекса и убираем возможные пробелы или знаки препинания в конце
    let trimmed = str.slice(0, lastBreakIndex).replace(/[ ,.!?:;]+$/, '');
    return trimmed + '...';
}

function isSubstring(str1, str2) {
    // Проверяем, содержится ли str1 в str2 или наоборот
    return str1.includes(str2) || str2.includes(str1);
}
  
module.exports = { capitalizeFirstLetter, truncateString, isSubstring};
  