// Comparison: sizes (first task)

function comparisonSizes() {
  let size = +prompt("Введите размер верхней одежды (Россия)", "");
  switch (size) {
    case 40:
      alert("Размер в США: S (6)");
      break;
    case 42:
      alert("Размер в США: M (8)");
      break;
    case 44:
      alert("Размер в США: 10");
      break;
    case 46:
      alert("Размер в США: L (12)");
      break;
    case 48:
      alert("Размер в США: 14");
      break;
    case 50:
      alert("Размер в США: XL (16)");
      break;
    case 52:
      alert("Размер в США: 18");
      break;
    case 54:
      alert("Размер в США: XXL (20)");
      break;
    default:
      alert("Такого размера не существует");
  }
}

// switch: if (second task)

function switchIf() {
  var color = prompt("Введите цвет", "");
  if (color == "red") {
    document.write("<div style='background-color: red;'>красный</div>");
  } else {
    if (color == "black") {
      document.write(
        "<div style='background-color: black; color: white;'>черный</div>"
      );
    } else {
      if (color == "blue") {
        document.write("<div style='background-color: blue;'>синий</div>");
      } else {
        if (color == "green") {
          document.write("<div style='background-color: green;'>зеленый</div>");
        } else {
          document.write(
            "<div style='background-color: gray;'>Я не понял</div>"
          );
        }
      }
    }
  }
}

// prompt: or (third task)

function promptOr() {
  let age;
  age = +prompt("Сколько вам лет?", "") || alert("error");
  if (age != null && age > 0) {
    let today = new Date(); //создание экземпляра объекта (класса)
    age = age - today.getFullYear(); //Метод getFullYear() возвращает год указанной даты по местному времени.
    alert("Ваш год рождения: " + -age);
  }
}

// confirm: or this days (fourth task)

function thisDays() {
  let shopping;
  shopping = confirm("шопинг?") || alert("ты - бяка");
}

// confirm: if this days (fifth task)

function ifThisDays() {
  let shopping;
  shopping = confirm("шопинг?");
  if (!shopping) {
    alert("ты - бяка");
  }
}

// triple prompt (sixth task)

function triplePrompt() {
  let surname, name, patronymic;
  surname = prompt("Введите Фамилию:", "");
  name = prompt("Введите Имя:", "");
  patronymic = prompt("Введите Отчество", "");
  alert("ФИО: " + surname + " " + name + " " + patronymic);
}

// default: or (seventh task)

function defaultOr() {
  let surname, name, patronymic;
  surname = prompt("Введите Фамилию:", "") || "Иванов";
  name = prompt("Введите Имя:", "") || "Иван";
  patronymic = prompt("Введите Отчество", "") || "Иванович";
  alert("ФИО: " + surname + " " + name + " " + patronymic);
}

// default: if (eigth task)

function defaultIf() {
  let surname, name, patronymic;
  surname = prompt("Введите Фамилию:", "");
  name = prompt("Введите Имя:", "");
  patronymic = prompt("Введите Отчество", "");
  //проверка регулярным выражением на ввод пользователем цифр
  if (!surname || /\d/.test(surname)) {
    surname = "Иванов";
  }
  if (!name || /\d/.test(surname)) {
    name = "Иван";
  }
  if (!patronymic || /\d/.test(surname)) {
    patronymic = "Иванович";
  }
  alert("ФИО: " + surname + " " + name + " " + patronymic);
}

// login and password (ninth task)

function loginAndPassword() {
  let login = "admin";
  let password = "qwerty";
  let valueLogin;
  let valuePassword;
  while (valueLogin != login || valuePassword != password) {
    valueLogin = prompt("Введите имя пользователя:", "");
    if (valueLogin != login) {
      alert("error");
      continue;
    }
    valuePassword = prompt("Введите пароль:", "");
    if (valuePassword != password) {
      alert("error");
    }
  }
  alert("Congratulations !!!");
}

// currency calc (tenth task)

function currencyCalc() {
  let currency, amount;
  currency = prompt("Введите валюту, usd или eur: ", "");
  amount = +prompt("Введите количество (грн): ", "");
  switch (currency) {
    case "usd":
      amount *= 0.037;
      break;
    case "eur":
      amount *= 0.034;
      break;
  }
  alert(amount);
}

// currency calc: improved (eleventh task)

function currencyCalcImproved() {
  let currency, amount;
  currency = prompt("Введите валюту, USD или EUR: ", "");
  amount = +prompt("Введите количество (грн): ", "");
  currency = currency.toUpperCase();
  switch (currency) {
    case "USD":
      amount *= 0.037;
      break;
    case "EUR":
      amount *= 0.034;
      break;
  }
  alert(amount);
}

// currency calc: two rates (twelfth task)

function currencyCalcTwoRates() {
  let currency, amount, rates;
  rates = prompt("Выберите курс (Продажа или покупка) ?", "");
  amount = +prompt("Введите количество (грн): ", "");
  rates = rates.toUpperCase();
  if (rates == "ПРОДАЖА") {
    currency = confirm("Нажмите 'ОК' если валюта - USD или Cancel - если 'EUR'")
      ? (amount *= 0.03705)
      : (amount *= 0.03401);
  } else {
    if (rates == "ПОКУПКА") {
      currency = confirm(
        "Нажмите 'ОК' если валюта - USD или Cancel - если 'EUR'"
      )
        ? (amount *= 0.03745)
        : (amount *= 0.0346);
    }
  }
  alert(amount);
}

// currency calc: if (thirteenth task)

function currencyCalcIF() {
  let currency, amount, rates;
  currency = prompt("Введите валюту, USD или EUR: ", "");
  rates = prompt("Выберите курс (Продажа или покупка) ?", "");
  amount = +prompt("Введите количество (грн): ", "");
  rates = rates.toUpperCase();
  currency = currency.toUpperCase();
  if (rates == "ПРОДАЖА" && currency == "USD") {
    amount *= 0.03705;
  } else {
    if (rates == "ПРОДАЖА" && currency == "EUR") {
      amount *= 0.03401;
    } else {
      if (rates == "ПОКУПКА" && currency == "USD") {
        amount *= 0.03745;
      } else {
        if (rates == "ПОКУПКА" && currency == "EUR") {
          amount *= 0.0346;
        }
      }
    }
  }
  alert(amount);
}

// scissors (fourteenth task)

function scissors() {
  let userChoice;
  userChoice = prompt("Камень, ножницы или бумага ?", "");
  let random = Math.random();
  let pcChoice;
  if (random >= 0 && random <= 0.33) {
    pcChoice = "камень";
  } else {
    if (random > 0.33 && random <= 0.66) {
      pcChoice = "ножницы";
    } else {
      if (random > 0.66 && random <= 1) {
        pcChoice = "бумага";
      }
    }
  }
  if (userChoice == "камень" && pcChoice == "ножницы") {
    alert("Congratulations! You won" + "\n" + "PC choice - " + pcChoice);
  } else {
    if (userChoice == "камень" && pcChoice == "бумага") {
      alert("Failure :( You lose" + "\n" + "PC choice - " + pcChoice);
    } else {
      if (userChoice == "камень" && pcChoice == "камень") {
        alert("Draw" + "\n" + "PC choice - " + pcChoice);
      } else {
        if (userChoice == "ножницы" && pcChoice == "ножницы") {
          alert("Draw" + "\n" + "PC choice - " + pcChoice);
        } else {
          if (userChoice == "ножницы" && pcChoice == "бумага") {
            alert(
              "Congratulations! You won" + "\n" + "PC choice - " + pcChoice
            );
          } else {
            if (userChoice == "ножницы" && pcChoice == "камень") {
              alert("Failure :( You lose" + "\n" + "PC choice - " + pcChoice);
            } else {
              if (userChoice == "бумага" && pcChoice == "ножницы") {
                alert("Failure :( You lose" + "\n" + "PC choice - " + pcChoice);
              } else {
                if (userChoice == "бумага" && pcChoice == "бумага") {
                  alert("Draw" + "\n" + "PC choice - " + pcChoice);
                } else {
                  if (userChoice == "бумага" && pcChoice == "камень") {
                    alert(
                      "Congratulations! You won" +
                        "\n" +
                        "PC choice - " +
                        pcChoice
                    );
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

// Задание на синий пояс (fifteenth task)

function blueBelt() {
  let exchangeRatesBaseEUR = JSON.parse(
    '{"rates":{"CAD":1.5261,"HKD":8.4599,"ISK":155.3,"PHP":55.382,"DKK":7.4568,"HUF":350.72,"CZK":27.275,"AUD":1.6678,"RON":4.842,"SEK":10.549,"IDR":16048.61,"INR":82.7925,"BRL":6.0243,"RUB":78.2874,"HRK":7.5845,"JPY":117.47,"THB":34.89,"CHF":1.0597,"SGD":1.5545,"PLN":4.5031,"BGN":1.9558,"TRY":7.4352,"CNY":7.7856,"NOK":10.9358,"NZD":1.789,"ZAR":19.2807,"USD":1.091,"MXN":24.7353,"ILS":3.843,"GBP":0.89515,"KRW":1354.63,"MYR":4.7606},"base":"EUR","date":"2020-05-25"}'
  );
  let exchangeRatesBaseUSD = JSON.parse(
    '{"rates":{"CAD":1.3988084326,"HKD":7.7542621448,"ISK":142.3464711274,"PHP":50.7626031164,"DKK":6.8348304308,"HUF":321.4665444546,"CZK":25.0,"GBP":0.8204857929,"RON":4.4381301558,"SEK":9.6691109074,"IDR":14710.0,"INR":75.8868010999,"BRL":5.5218148488,"RUB":71.7574702108,"HRK":6.9518790101,"JPY":107.6718606783,"THB":31.9798350137,"CHF":0.9713107241,"EUR":0.9165902841,"MYR":4.3635197067,"BGN":1.7926672777,"TRY":6.8150320807,"CNY":7.1362053162,"NOK":10.0236480293,"NZD":1.6397800183,"ZAR":17.6725022915,"USD":1.0,"MXN":22.6721356554,"SGD":1.4248395967,"AUD":1.5286892759,"ILS":3.522456462,"KRW":1241.6406966086,"PLN":4.1274977085},"base":"USD","date":"2020-05-25"}'
  );
  let currency, amount, rate;
  currency = prompt("Введите валюту, USD или EUR: ", "");
  rate = prompt("Выберите курс (Продажа или покупка) ?", "");
  amount = +prompt("Введите количество (рубли РФ): ", "");
  rate = rate.toUpperCase();
  currency = currency.toUpperCase();
  if (rate == "ПРОДАЖА" && currency == "USD") {
    amount /= exchangeRatesBaseUSD.rates["RUB"];
  } else {
    if (rate == "ПРОДАЖА" && currency == "EUR") {
      amount /= exchangeRatesBaseEUR.rates["RUB"];
    } else {
      if (rate == "ПОКУПКА" && currency == "USD") {
        amount /= 70.95;
      } else {
        if (rate == "ПОКУПКА" && currency == "EUR") {
          amount /= 77.75;
        }
      }
    }
  }
  alert(amount);
}

// Additional task (sixteenth task)

function selection() {
  let option = prompt("Введите название задания", "");
  switch (option) {
    case "switch: sizes":
      comparisonSizes();
      break;
    case "switch: if":
      switchIf();
      break;
    case "prompt: or":
      promptOr();
      break;
    case "confirm: or this days":
      thisDays();
      break;
    case "confirm: if this days":
      ifThisDays();
      break;
    case "triple prompt":
      triplePrompt();
      break;
    case "default: or":
      defaultOr();
      break;
    case "default: if":
      defaultIf();
      break;
    case "login and password":
      loginAndPassword();
      break;
    case "currency calc":
      currencyCalc();
      break;
    case "currency calc: improved":
      currencyCalcImproved();
      break;
    case "currency calc: two rates":
      currencyCalcTwoRates();
      break;
    case "currency calc: if":
      currencyCalcIF();
      break;
    case "scissors":
      scissors();
      break;
    case "Задание на синий пояс":
      blueBelt();
      break;
    default:
      alert("Такого задания нет");
  }
}

// Black belt quest (seventeenth task)

// comparisonSizes();
// switchIf();
// promptOr();
// thisDays();
// ifThisDays();
// triplePrompt();
// defaultOr();
// defaultIf();
// loginAndPassword();
// currencyCalc();
// currencyCalcImproved();
// currencyCalcTwoRates();
// currencyCalcIF();
// scissors();
// blueBelt();
selection();
