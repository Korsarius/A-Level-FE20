// a d - (first task)~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function a(a) {
  alert(a);
}

function d() {
  debugger;
}
// d();
// a("Привет!"); // вызывает alert("Привет!")

// cube (second task)~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function cube(c) {
  let cube;
  cube = Math.pow(c, 3);
  return cube;
}
// alert(cube(3)); //27

// avg2 (third task)~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function avg2(a, b) {
  let avg = (a + b) / 2;
  return avg;
}

// alert(avg2(1, 2)); // возвращает 1.5
// alert(avg2(10, 5)); // возвращает 7.5

// sum3 (fourth task)~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function sum3() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
// alert(sum3(1, 2, 3)); // => 6
// alert(sum3(5, 10, 100500)); // => 100515
// alert(sum3(5, 10)); // => 15

// intRandom (fifth task)~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function intRandom() {
  let random = 0;
  if (arguments.length == 1) {
    random = Math.round(Math.random() * arguments[0]);
  } else {
    if (arguments.length == 2) {
      random = Math.round(
        Math.random() * (arguments[1] - arguments[0]) + arguments[0]
      );
    } else {
      alert("Введены неверные данные");
    }
  }
  return random;
}
//intRandom(2,15) // возвращает целое случайное число от 2 до 15 (включительно)
//intRandom(-1,-1) // вернет -1
//intRandom(0,1) // вернет 0 или 1
//intRandom(10) // вернет 0 до 10 включительно

// greetAll (sixth task)~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function greetAll() {
  let str = "Hello ";
  for (let i = 0; i < arguments.length; i++) {
    if (i == arguments.length - 1) {
      str += arguments[i];
    } else {
      str += arguments[i] + ", ";
    }
  }
  return alert(str);
}
// greetAll("Superman", "SpiderMan", "Captain Obvious");
//greetAll("Superman") // выводит alert "Hello Superman"
//greetAll("Superman", "SpiderMan") // выводит alert "Hello Superman, SpiderMan"
//greetAll("Superman", "SpiderMan", "Captain Obvious") // выводит alert "Hello Superman, SpiderMan, Captain Obvious"

// sum (seventh task)~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function sum() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
// alert(sum(10, 20, 40, 100));
//sum(1) // => 1
//sum(2) // => 2
//sum(10,20,40,100) // => 170

// Union (eighth task)~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var sample = prompt("Введите название задания");
switch (sample.toLowerCase()) {
  case "a":
    a();
    break;
  case "d":
    d();
    break;
  case "cube":
    alert(cube(3));
    break;
  case "avg2":
    alert(avg2(1, 2)); // возвращает 1.5
    break;
  case "sum3":
    alert(sum3(1, 2, 3)); // => 6
    break;
  case "intrandom":
    intRandom(2, 15); // возвращает целое случайное число от 2 до 15 (включительно)
    break;
  case "greetall":
    greetAll("Superman", "SpiderMan", "Captain Obvious");
    break;
  case "sum":
    alert(sum(10, 20, 40, 100)); //sum(10,20,40,100) // => 170
    break;
}

// Union declarative (nineth task)~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

{
  var call = prompt("Введите название задания");
  let obj = {};
  if (call == "a") {
    obj.a = a();
  } else {
    if (call == "d") {
      obj.d = d();
    } else {
      if (call == "cube") {
        obj.cube = alert(cube(3));
      } else {
        if (call == "avg2") {
          obj.avg2 = alert(avg2(1, 2));
        } else {
          if (call == "sum3") {
            obj.sum3 = alert(sum3(1, 2, 3));
          } else {
            if (call == "intrandom" || call == "intRandom") {
              obj.intrandom = intRandom(2, 15);
            } else {
              if (call == "greetall" || call == "greetAll") {
                obj.greetall = greetAll(
                  "Superman",
                  "SpiderMan",
                  "Captain Obvious"
                );
              } else {
                if (call == "sum") {
                  obj.sum = alert(sum(10, 20, 40, 100));
                }
              }
            }
          }
        }
      }
    }
  }
}
