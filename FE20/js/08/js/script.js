//////////////////////////////////////// sort (first task) ////////////////////////////////////////////////

var persons = [
  {
    name: "Иван",
    age: 17,
  },
  {
    name: "Мария",
    age: 35,
  },
  {
    name: "Алексей",
    age: 73,
  },
  {
    name: "Яков",
    age: 12,
  },
];

// Не сработает, если первый объект в массиве уже имеет минимальное значение по искомому ключу
function sort(arr, key, bool = true) {
  // debugger;
  console.log("key :", key);
  if (bool) {
    var min = arr[0][key];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i][key] < min) {
        min = arr[i][key]; // нахождение минимума в массиве объектов (объект с минимальным значением заданного ключа)
      } // для сравнения в условии выхода из бесконечного цикла (по возрастанию = true)
    }
  } else {
    var max = arr[0][key];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i][key] > max) {
        max = arr[i][key]; // нахождение минимума в массиве объектов (объект с минимальным значением заданного ключа)
      } // для сравнения в условии выхода из бесконечного цикла (по возрастанию = true)
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (i == arr.length - 1) {
      i = 0; // зацикливание перебора по массиву
      if (min == arr[0][key] || max == arr[0][key]) {
        break;
      }
    }
    // сортировка объектов в массиве
    if (bool) {
      if (arr[i][key] > arr[i + 1][key]) {
        // сортировка по возрастанию (по умолчанию)
        let temp = {};
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    } else {
      if (arr[i][key] < arr[i + 1][key]) {
        // сортировка по убыванию
        let temp = {};
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
  return console.log("Persons: ", arr);
}

sort(persons, "name", false);
// sort(persons, "age", true);
// console.log(persons);

///////////////////////////////////////////////// array map (second task) ///////////////////////////////////////////
var array = ["1", {}, null, undefined, "500", 700];
console.log("Array before map: ", array);
var newArray = array.map((index) => {
  if (typeof index === "string") {
    index = Number(index);
  }
  return index;
});
console.log("Array after map: ", newArray);

//////////////////////////////////////////////// array reduce (third task) /////////////////////////////////////////
var arrayReduce = ["0", 5, 3, "string", null, 2, undefined, 2];
var total = arrayReduce.reduce(function (
  prevElem,
  nextElem,
  index,
  arrayReduce
) {
  let temp = prevElem; //временная переменная для запоминания предыдущего результата произведения
  if (typeof prevElem === "number" && typeof nextElem === "number") {
    return prevElem * nextElem;
  }
  if (typeof temp !== "number") {
    return arrayReduce[index];
  }
  return temp;
});
console.log("ArrayReduce: ", arrayReduce);
console.log("Total: ", total); // должно быть 60 (5 * 3 * 2 * 2 = 60)

////////////////////////////////////////////// object filter (fourth task) ///////////////////////////////////////

var phone = {
  brand: "meizu",
  model: "m2",
  ram: 2,
  color: "black",
};
console.log("phone: ", phone);

// // implementation without arrow function //

// function filter(obj, key, value) {
//   let newObj = {};
//   for (let k in obj) {
//     if (k == key) {
//       newObj[`${key}`] = obj[key];
//     }
//     if (obj[k] == value) {
//       // console.log(obj[k]);
//       // console.log(value);
//       newObj[`${k}`] = obj[k];
//     }
//   }
//   return newObj;
// }

// let newPhone = filter(phone, "color", 2);
// console.log("newPhone: ", newPhone);

// debugger;
function filter(obj, fn) {
  for (let key in obj) {
    if (!fn(key, obj[key])) {
      delete obj[key];
    }
  }
  return obj;
}

console.log(filter(phone, (key, value) => key == "color" || value == 2));

////////////////////////////////////////////// object map (fifth task) //////////////////////////////////////////

function map(obj, func) {
  for (var key in obj) {
    var newObj = func(key, obj[key]);
    delete obj[key];
    for (key in newObj) obj[key] = newObj[key];
  }
}
var people = {
  name: "Иван",
  age: 17,
};
map(people, function (key, value) {
  var result = {};
  result[key + "_"] = value + "$";
  return result;
});
console.log(people);

///////////////////////////////////////////// RECURSION ///////////////////////////////////////////////////////
///////////////////////////////////////////// Sum (sixth task) ////////////////////////////////////////////////

// если известен первый член арифм.прогрессии
function arithmeticProgression(x, d, n, sum = 0) {
  if (n == 1) {
    return sum + x;
  } else {
    sum += x + (n - 1) * d;
    return arithmeticProgression(x, d, n - 1, sum);
  }
}
/* firstArg - это значение первого члена арифм. прогрессии,
   secondArg - это d - разность прогрессии (шаг)
   thirdArg - это n - до какого n-го члена арифм. прогрессии считать сумму */
alert(arithmeticProgression(2, 4, 12)); // 288

// если известен один любой член арифм.прогрессии
function arithmeticProgression2(indX = 1, x, d, n, sum = 0) {
  let firstX = x - (indX - 1) * d;
  if (n == 1) {
    return sum + firstX;
  } else {
    sum += firstX + (n - 1) * d;
    return arithmeticProgression2(indX, x, d, n - 1, sum);
  }
}
/* firstArg - это индекс известного члена арифм. прогрессии
   secondArg - это значение известного члена арифм. прогрессии,
   thirdArg - это d - разность прогрессии (шаг)
   fourthArg - это n - до какого n-го члена арифм. прогрессии считать сумму */
alert(arithmeticProgression2(3, 3, 4, 10)); // 130

///////////////////////////////////////////// HTML Tree (seventh task) ////////////////////////////////////////////////

var someTree = {
  tagName: "table", //html tag
  attrs: {
    border: "1px solid black",
  },
  subTags: [
    //вложенные тэги
    {
      tagName: "tr",
      subTags: [
        {
          tagName: "td",
          attrs: {
            backgroundColor: "#ff0000",
            padding: "5px",
          },
          text: "some text",
        },
        {
          tagName: "td",
          attrs: {
            backgroundColor: "#00ff00",
            padding: "5px",
          },
          text: "some text 2",
        },
      ],
    },
  ],
};
// debugger;
let i;
var level2 = 0;
var prevDomElement;
var currentDomElem;
debugger;
function htmlTree(obj, level = 0, prev, level2 = 0) {
  for (let child in obj) {
    i = obj[child];
    if (child == "attrs") {
      for (let key in i) {
        // prevDomElement.setAttribute("style", `${key}:${i[key]};`);
        prevDomElement.style[key] = i[key];
      }
      continue;
    }
    if (Array.isArray(i) && i.length > 1) {
      let arr = i;
      for (let index = 0; index < arr.length; index++) {
        level2++;
        htmlTree(arr[index], level + 1, prev, level2);
      }
      return level2;
    }
    if (typeof i === "object") {
      break;
    }
    if (typeof i === "string") {
      if (level == 0) {
        prev = i;
        prevDomElement = document.createElement(prev);
        document.body.appendChild(prevDomElement);
      } else {
        if (child == "text") {
          if (level2 > 1) {
            let parent = prevDomElement.parentElement;
            parent.lastChild.innerText = `${i}`;
          } else {
            prevDomElement.innerText = `${i}`;
            level2++;
          }
        } else {
          prev = i;
          currentDomElem = document.createElement(i);
          if (prevDomElement.tagName == prev.toUpperCase()) {
            prevDomElement = prevDomElement.parentElement;
          }
          prevDomElement.appendChild(currentDomElem);
          prevDomElement = currentDomElem;
        }
      }
    }
  }
  if (typeof i === "object") {
    htmlTree(i, level + 1, prev, level2);
  }
  return level2;
}

htmlTree(someTree);

function walk(tree = document, level = 0) {
  if (!tree.children) return;
  for (let child of tree.children) {
    console.log(
      "    ".repeat(level) + child.tagName,
      child.classList.toString()
    );
    walk(child, level + 1);
  }
}
walk(document);
