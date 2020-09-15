// Async/Await Homework 2 HOMEWORK

// Светофор // trafficLight

const delay = (ms) => new Promise((ok) => setTimeout(() => ok(ms), ms));

var trafficLights = document.querySelector(".traffic-lights");
var redLight = document.querySelectorAll(".red-light")[0];
var yellowLight = document.querySelectorAll(".yellow-light")[0];
var greenLight = document.querySelectorAll(".green-light")[0];

var redLightTwo = document.querySelectorAll(".red-light")[1];
var greenLightTwo = document.querySelectorAll(".green-light")[1];

// var purpleLight = document.querySelector(".purple-light");
// var blueLight = document.querySelector(".blue-light");

let counter = function (element, milliseconds) {
  let sec = milliseconds / 1000;
  for (let j = sec; j >= 0; j--) {
    setTimeout(function () {
      element.innerText = `${sec - j}`;
    }, j * 1000);
  }
};

// (function () {
//   let sec = ms / 1000;
//   for (let j = sec; j >= 0; j--) {
//     setTimeout(function () {
//       args[i].innerText = `${sec - j}`;
//     }, j * 1000);
//   }
// })();

async function trafficLight(...args) {
  console.log(args);
  while (true) {
    for (let i = 0; i < args.length; i++) {
      args[i].style.visibility = "visible";
      counter(args[i], 4000);
      await delay(4000);
      args[i].style.visibility = "hidden";
    }
  }
}

trafficLight(redLight, yellowLight, greenLight); //purpleLight, blueLight

// domEventPromise //

let knopka = document.querySelector(".btn");

let domEventPromise = function (domElement, eventName) {
  return new Promise((resolve, reject) => {
    var listener = function () {
      // domElement.style = "color: red;";
      // console.log(this);
      // alert("Hi");
      domElement.removeEventListener(eventName, listener);
      resolve(domElement);
    };
    domElement.addEventLis`tener(eventName, listener);
  });
};

domEventPromise(knopka, "click").then((e) =>
  console.log("event click happens", e)
);

// Светофор для пешеходов // pedestrianTrafficLight

let knopka2 = document.querySelector(".btn-2");

async function pedestrianTrafficLight(red, green) {
  while (true) {
    red.style.visibility = "visible";
    counter(red, 10000);
    let result = await Promise.race([
      delay(10000),
      domEventPromise(knopka2, "click"),
    ]);
    if (typeof result == "object") {
      console.log("event click happens", result);
      result.disabled = true;
      await delay(3000);
    }
    red.style.visibility = "hidden";
    green.style.visibility = "visible";
    counter(green, 10000);
    await delay(10000);
    result.disabled = false;
    green.style.visibility = "hidden";
  }
}

pedestrianTrafficLight(redLightTwo, greenLightTwo);

// speedtest //

async function speedtest(getPromise, count, parallel = 1) {
  // let duration = performance.now();
  var t0 = performance.now();
  let querySpeed = 0;
  let queryDuration = 0;
  let parallelDuration = 0;
  let parallelSpeed = 0;
  for (let i = 0; i < count; i++) {
    let arrPromises = [];
    for (let j = 0; j < parallel; j++) {
      arrPromises.push(getPromise());
    }
    await Promise.all(arrPromises);
    console.log(arrPromises);
  }
  var t1 = performance.now();
  duration = t1 - t0; // время выполнения всех запросов
  // duration += performance.now(); // время выполнения всех запросов
  queryDuration = duration / count; // время в среднем на один запрос
  querySpeed = 1 / queryDuration; // реальная скоросто запроса (одного)
  parallelDuration = duration / (parallel * count);
  parallelSpeed = 1 / parallelDuration;
  console.log("duration", duration);
  console.log("queryDuration: ", queryDuration);
  console.log("querySpeed", querySpeed);
  console.log("parallelDuration: ", parallelDuration);
  console.log("parallelSpeed: ", parallelSpeed);
  return {
    duration,
    querySpeed, //средняя скорость одного запроса
    queryDuration,
    parallelSpeed,
    parallelDuration,
  };
}

speedtest(() => delay(1000), 10, 10).then((result) => console.log(result));

// {duration: 10000,
// querySpeed: 0.001, //1 тысячная запроса за миллисекунду
// queryDuration: 1000, //1000 миллисекунд на один реальный запрос в среднем
// parallelSpeed: 0.01  // 100 запросов за 10000 миллисекунд
// parallelDuration: 100 // 100 запросов за 10000 миллисекунд

// speedtest(
//   () => fetch("http://swapi.dev/api/people/1").then((res) => res.json()),
//   10,
//   5
// );
