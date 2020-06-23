// assign: evaluation (first task)

var a = 5;
var b, c;

b = a * 5;
b = c = b / 2;
console.log("a =", a, "b =", b, "c =", c); //a = 5, b = 12.5, c = 12.5

// если убрать скобки, то ничего не изменится
var a = 5; // 5 - выражение (в данном случае)
var b, c;

b = a * 5; // a * b - выражение
b = c = b / 2; // b / 2 - выражение
console.log("a =", a, "b =", b, "c =", c);

// semicolon: error (second task)

// function semicolon(); {   //ошибка
//     var d = 4;
//     var g = 3;
//     if;                   //ошибка
//     (d = 4) {
//         console.log(d);
//         console.log(g);
//     }
// }

// semicolon();

// semicolon: mistake (third task)

// Логические ошибки: Это ошибки, когда синтаксис действительно правильный,
// но код не тот, каким вы его предполагали, что означает, что программа работает успешно,
// но дает неверные результаты. Их часто сложнее находить, чем синтаксические ошибки, так
// как обычно не возникает сообщение об ошибке, которое направляет вас к источнику ошибки.

// Number: age (fourth task)

function getYearOfBirth() {
  let age;
  age = +prompt("Сколько вам лет?", "");
  let today = new Date(); //создание экземпляра объекта (класса)
  age = age - today.getFullYear(); //Метод getFullYear() возвращает год указанной даты по местному времени.
  alert("Ваш год рождения: " + -age);
}

// Number: temperature (fifth task)

function celsiusToFahrenheit() {
  let degree;
  degree = +prompt("Градусов Цельсия:", "");
  degree = degree * (9 / 5) + 32;
  alert("Градусов Фаренгейта: " + degree);
}

function fahrenheitToCelsius() {
  let degree;
  degree = +prompt("Градусов Фаренгейта:", "");
  degree = ((degree - 32) * 5) / 9;
  alert("Градусов Цельсия: " + degree);
}

// Number: divide (sixth task)

function divide() {
  let x, y;
  x = +prompt("Введите x: ", "");
  y = +prompt("Введите y: ", "");
  if (x / y >= 0) alert(Math.floor(x / y));
  //Math.floor() - округление вниз. Округляет аргумент до ближайшего меньшего целого.
  else alert(Math.ceil(x / y)); //Math.ceil() - округление вверх. Округляет аргумент до ближайшего большего целого.
}
//Math.ceil() для отрицательных чисел
// Math.floor(-100/3); - Выдаст -34, хотя целая часть от -33,33333336 будет равна -33 (Например), для отрицательных чисел нужно
// исользовать Math.ceil(). Math.ceil(-100/3) -> -33

// Number: odd (seventh task)

function odd() {
  let number = +prompt("Введите число", "");
  if (isNaN(number) || number == "") {
    alert("Неверный формат данных");
  } else {
    alert("Correct");
  }
}

// String: greeting (eigth task)
function greeting() {
  let hello = prompt("Введите ваше Имя", "");
  alert("Привет " + hello);
}

// String: lexics (ninth task)

function lexics() {
  let value = prompt("Введите текст", "");
  if (
    value.includes("жопа") ||
    value.includes("дурак") ||
    value.includes("идиот")
  ) {
    alert("Вы ввели плохие слова");
  } else {
    alert(value);
  }
}

// confirm (tenth task)

// confirm выводит окно с вопросом question с двумя кнопками: OK и CANCEL.
// Результатом будет true при нажатии OK и false – при CANCEL(Esc).

function confirmTenthTask() {
  let confirms = confirm("Вам есть 18 лет?");
  if (confirms) {
    alert("Accepted");
  } else {
    alert("Denied");
  }
}

// Boolean (eleventh task)
// Boolean if (twelfth task)
// Array: booleans (fourteenth task)

function booleanConfirm() {
  let confirms = confirm("Вы администратор ?");
  if (confirms) {
    var ok = confirms;
    alert(ok);
  } else {
    var cancel = confirms;
    alert(cancel);
  }
  let confirms2 = confirm("Вы женщина ?");
  if (confirms2) {
    var ok2 = confirms2;
    alert("Вы женщина");
  } else {
    var cancel2 = confirms2;
    alert("Вы мужчина");
  }
  let array = [ok, cancel, ok2, cancel2];
  alert(array);
}

// Array: real (thirteenth task)

function real() {
  let daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  // for (let i = 0; i < daysOfWeek.length; i++) {
  //   alert(daysOfWeek[i]);
  // }
  alert("Days Of Week: " + daysOfWeek);
}

// Array: plus (fifteenth task)

function arrayPlus() {
  let arr = [2, 1, 0];
  arr[2] = arr[0] + arr[1];
  alert(
    "Сумма двух первых элементов массива в третьем элементе: " + "\n" + arr
  );
}

// Array: plus string (sixteenth task)

function arrayPlusString() {
  let arr = ["Имя: ", "Алексей", ""];
  arr[2] = arr[0] + arr[1];
  alert(
    "Сумма двух первых элементов массива в третьем элементе: " + "\n" + arr[2]
  );
}

// Object: real (seventeenth task)
// Object: change (eighteenth task)

function objectReal() {
  let smartphone = {
    company: "Apple",
    model: "iPhone 11 Pro",
    screenDiagonal: "5.8",
    RAM: "4 ГБ",
    CPU: "Apple A13 Bionic",
    toString() {
      return `{Company: "${this.company}",\nModel: "${this.model}",\nDiagonal: "${this.screenDiagonal}",\nRAM: "${this.RAM}",\nCPU: "${this.CPU}"}`;
    },
  };
  alert("Smartphone:\n" + smartphone);
  // for (var key in menu) {
  //   // этот код будет вызван для каждого свойства объекта
  //   // ..и выведет имя свойства и его значение
  //   alert("Ключ: " + key + " значение: " + smartphone[key]);
  // }
  smartphone.company = "Samsung";
  smartphone.model = "Galaxy S20 Ultra";
  smartphone.screenDiagonal = "6.9";
  smartphone["RAM"] = "16 ГБ";
  smartphone["CPU"] = "Samsung Exynos 990";
  alert("Smartphone:\n" + smartphone);
}

// Comparison if (nineteenth task)

function comparisonIf() {
  var age = +prompt("Сколько вам лет?", "");
  if (age >= 0 && age < 18) {
    alert("школьник");
  } else {
    if (age >= 18 && age <= 30) {
      alert("молодеж");
    } else {
      if (age > 30 && age <= 45) {
        alert("зрелость");
      } else {
        if (age > 45 && age <= 60) {
          alert("закат");
        } else {
          if (age > 60 && age <= 100) {
            alert("как пенсия?");
          } else {
            if (age < 0 || age > 100) {
              alert("то ли киборг, то ли ошибка");
            }
          }
        }
      }
    }
  }
}

// Comparison: sizes (twentieth task)

function comparisonSizes() {
  let size = +prompt("Введите размер верхней одежды (Россия)", "");
  if (size == 40) {
    alert("Размер в США: S (6)");
  } else {
    if (size == 42) {
      alert("Размер в США: M (8)");
    } else {
      if (size == 44) {
        alert("Размер в США: 10");
      } else {
        if (size == 46) {
          alert("Размер в США: L (12)");
        } else {
          if (size == 48) {
            alert("Размер в США: 14");
          } else {
            if (size == 50) {
              alert("Размер в США: XL (16)");
            } else {
              if (size == 52) {
                alert("Размер в США: 18");
              } else {
                if (size == 54) {
                  alert("Размер в США: XXL (20)");
                } else {
                  alert("Такого размера не существует");
                }
              }
            }
          }
        }
      }
    }
  }
}
// Comparison: object - можно было хранить информацию о метриках размеров разных стран мира в объектах

// Ternary (twenty first task)

function ternarySex() {
  var sex = confirm("Если вы мужчина, то нажмите 'OK'")
    ? alert("Вы мужчина")
    : alert("Вы женщина");
}

// Синий пояс Number: flats (twenty second task)

function numberFlats() {
  let entrance = 1; // Подъезды дома
  let floorNumber, apartmentNumber, staircase; // этаж, номер квартиры, количество этажей на лестничной клетке
  floorNumber = +prompt("Введите количество этажей:", "");
  staircase = +prompt(
    "Введите количество квартир на каждой лестничной клетке:",
    ""
  );
  apartmentNumber = +prompt("Введите номер искомой квартиры:", "");
  let floor = 1;
  while (apartmentNumber > 3) {
    floor++;
    if (floor > floorNumber) {
      entrance++;
      floor = 1;
    }
    apartmentNumber -= staircase;
  }
  alert("Подъезд: " + entrance + "\nЭтаж: " + floor);
}

//------------------------------------------------------------ Вызов функций ----------------------------------------------------------
getYearOfBirth();
celsiusToFahrenheit();
fahrenheitToCelsius();
divide();
odd();
greeting();
lexics();
confirmTenthTask();
booleanConfirm();
real();
arrayPlus();
arrayPlusString();
objectReal();
comparisonIf();
comparisonSizes();
ternarySex();
numberFlats();
