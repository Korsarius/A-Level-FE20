/////////////////////////////////////////////////// makeProfileTimer (first task) ////////////////////////////////////////////

function makeProfileTimer() {
  var t0 = performance.now();
  console.log("t0: ", t0);
  return function ProfileTimer() {
    var t1 = performance.now();
    console.log("t1: ", t1);
    return t1 - t0 + " - millisecond runtime";
  };
}

var timer = makeProfileTimer();
alert("Hello"); //некий код, время выполнения которого мы хотим измерить с высокой точностью

console.log("timer(): ", timer()); //console.log должен вывести время в микросекундах от выполнения makeProfileTimer до момента вызова timer(),
// т. е. измерить время выполнения doSomething

///////////////////////////////////////////////// makeSaver (second task) //////////////////////////////////////////////////

function makeSaver(a) {
  let counter = 0;
  var d;
  return function b() {
    if (counter == 0) {
      d = a();
      counter++;
      return d;
    }
    if (counter > 0) {
      return d;
    }
  };
}

var saver = makeSaver(Math.random);
console.log("saver: ", saver);

var value1 = saver();
console.log("value1: ", value1);
var value2 = saver();
console.log("value2: ", value2);
value1 === value2;
console.log("value1 === value2: ", value1 === value2);

var saver2 = makeSaver(
  () =>
    console.log("saved function called") ||
    [null, undefined, false, "", 0, Math.random()][Math.ceil(Math.random() * 6)]
);
var value3 = saver2();
var value4 = saver2();

value3 === value4; // тоже должно быть true
console.log("value3 === value4: ", value3 === value4);

/////////////////////////////////////////////////// Final Countdown (third task) ////////////////////////////////////////

(function () {
  for (let i = 4; i >= 0; i--) {
    setTimeout(function () {
      console.log(5 - i);
    }, i * 1000);
  }
  setTimeout(() => console.log("поехали!"), 5000);
})();

const f = (n) => (n <= 1 ? 1 : n * f(n - 1)); // факториал
console.log(f(2));

// Рекурсия, замыкания, ООП посмотреть, выучить JS !!!!

/////////////////////////////////////////////////// myBind (fourth task) ////////////////////////////////////////

function myBind(fn, context, arr) {
  return function (...args) {
    const uniqId = Date.now().toString();

    context[uniqId] = fn;
    // debugger;
    let n = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = n; j < args.length; j++) {
        if (typeof arr[i] === "undefined") {
          arr[i] = args[j];
          // console.log("arr[i]: ", arr[i]);
          n++;
          break;
        } else {
          break;
        }
      }
    }

    // const result = context[uniqId](...arr.concat(args));
    const result = context[uniqId](...arr);

    delete context[uniqId];

    return result;
  };
}

var pow5 = myBind(Math.pow, Math, [undefined, 5]); // первый параметр - функция для биндинга значений по умолчанию,
//                                                 // второй - this для этой функции, третий - массив, в котором undefined означает
//                                                 // параметры, которые должны передаваться при вызове,
//                                                 // а другие значения являются значениями по умолчанию:

var cube = myBind(Math.pow, Math, [undefined, 3]); // cube возводит число в куб

console.log("pow5(2): ", pow5(2)); //pow5(2); // => 32, вызывает Math.pow(2,5), соотнесите с [undefined, 5]
console.log("cube(3): ", cube(3)); // => 27

var chessMin = myBind(Math.min, Math, [
  undefined,
  4,
  undefined,
  5,
  undefined,
  8,
  undefined,
  9,
]);
console.log("chessMin(-1, -5, 3, 15): ", chessMin(-1, -5, 3, 15)); // вызывает Math.min(-1, 4, -5, 5, 3, 8, 15, 9), результат -5

var zeroPrompt = myBind(prompt, window, [undefined, "0"]); // аналогично, только теперь задается "0" как текст по умолчанию в prompt,
//                                                         // а текст приглашения пользователя задается при вызове zeroPrompt
var someNumber = zeroPrompt("Введите число"); // вызывает prompt("Введите число","0")
