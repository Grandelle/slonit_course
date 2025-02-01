function sumOfNumericFields(obj){
    let sum = 0;
  
    for (key in obj){
        if (typeof obj[key] == "number"){
          sum += obj[key];
        }
    }
  
    return sum;
}

function sortedNumericFieldNames(obj) {
    let numericFields = [];
  
    for (let key in obj) {
        if (typeof obj[key] === "number") {
            numericFields.push({ key, value: obj[key] });
        }
    }
  
    // Сортируем по убыванию значений
    numericFields.sort((a, b) => b.value - a.value);
  
    // Возвращаем только названия полей
    return numericFields.map(item => item.key);
  }

  module.exports = { sumOfNumericFields, sortedNumericFieldNames };
