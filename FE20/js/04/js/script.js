// html tree (first task)

function htmlTree() {
  let body = {
    tagName: "body",
    attrs: {},
    subTags: [
      {
        tagName: "div",
        attrs: {},
        subTags: [
          {
            tagName: "span",
            attrs: {},
            text: "Enter a data please:",
          },
          {
            tagName: "br",
          },
          {
            tagName: "input",
            attrs: {
              type: "text",
              id: "name",
            },
          },
          {
            tagName: "input",
            attrs: {
              type: "text",
              id: "surname",
            },
          },
        ],
      },
      {
        tagName: "div",
        attrs: {},
        subTags: [
          {
            tagName: "button",
            attrs: {
              id: "ok",
            },
            text: "OK",
          },
          {
            tagName: "button",
            attrs: {
              id: "cancel",
            },
            text: "Cancel",
          },
        ],
      },
    ],
  };
  let text = "text";
  let id = "id";
  alert(body.subTags[1].subTags[1].text);
  // alert(body.subTags[1].subTags[1]["text"]);
  alert(body.subTags[1].subTags[1][text]);
  alert(body.subTags[0].subTags[3].attrs.id);
  // alert(body.subTags[0].subTags[3].attrs["id"]);
  alert(body.subTags[0].subTags[3].attrs[id]);
}

// declarative fields (second task)

function declarativeFields() {
  let notebook = {
    brand: prompt("Введите фирму ноутбука", "") || "HP",
    type: prompt("Введите тип ноутбука", "") || "440 G4",
    model: prompt("Введите модель ноутбука", "") || "Y7Z75EA",
    ram: +prompt("Введите объёом ОЗУ", "") || 4,
    size: prompt("Введите диагональ экрана", "") || "14",
    weight: +prompt("Введите вес ноутбука", "") || 1.8,
    resolution: {
      width:
        +prompt("Введите разрешение ширины экрана (в пикселях)", "") || 1920,
      height:
        +prompt("Введите разрешение высоты экрана (в пикселях)", "") || 1080,
    },
  };

  let phone = {
    brand: prompt("Введите фирму телефона", "") || "meizu",
    model: prompt("Введите модель телефона", "") || "m2",
    ram: +prompt("Введите объёом ОЗУ", "") || 2,
    color: prompt("Введите цвет", "") || "black",
  };

  let person = {
    name: prompt("Введите имя", "") || "Donald",
    surname: prompt("Введите фамилию", "") || "Trump",
    married: confirm("Вы находитесь в браке?"),
  };
}

// object links (third task)

function objectLinks() {
  let notebook = {
    brand: "HP",
    type: "440 G4",
    model: "Y7Z75EA",
    ram: 4,
    size: "14",
    weight: 1.8,
    resolution: {
      width: 1920,
      height: 1080,
    },
  };

  let phone = {
    brand: "meizu",
    model: "m2",
    ram: 2,
    color: "black",
  };

  let person = {
    name: "Donald",
    surname: "Trump",
    married: true,
    laptop: notebook,
    smartphone: phone,
  };

  person.laptop.owner = person;
  person.smartphone.owner = person;

  alert(person.smartphone.owner.laptop.owner.smartphone == person.smartphone);
}

// imperative array fill 3 (fourth task)

function imperativeArrayFill() {
  let arr = [];
  arr[0] = prompt("Введите первый элемент массива", "");
  arr[1] = prompt("Введите второй элемент массива", "");
  arr[2] = prompt("Введите третий элемент массива", "");
  alert(arr);
}

// while confirm (fifth task)

function whileConfirm() {
  let circle;
  do {
    circle = confirm("OK Or Cancel ?");
  } while (!circle);
}

// array fill (sixth task)

function arrayFill() {
  let array = [];
  let pr;
  do {
    pr = prompt("Добавьте новый элемент в массив", "");
    if (pr != null) {
      array.push(pr);
    }
  } while (pr || pr == "");
}

// array fill nopush (seventh task)

function arrayFillNopush() {
  let array = [];
  let pr;
  do {
    pr = prompt("Добавьте новый элемент в массив", "");
    if (pr != null) {
      array[array.length] = pr;
    }
  } while (pr || pr == "");
}

// infinite probability (eighth task)

function infiniteProbability() {
  let i = 0;
  while (true) {
    i++;
    random = Math.random();
    if (random > 0.9) {
      break;
    }
  }
  alert("Число итераций: " + i);
  // console.log("Число итераций: " + i);
}

// empty loop (nineth task)

function emptyLoop() {
  let circle;
  do {
    circle = prompt("OK Or Cancel ?", "");
  } while (circle == null);
  {
  }
}

// progression sum (tenth task)

function progressionSum() {
  let sum = 0;
  let n;
  n = +prompt("Введите до какого числа считать арифметическую прогрессию", "");
  for (let i = 1; i <= n; i += 3) {
    sum += i;
  }
  alert(sum);
}

// chess one line (eleventh task)

function chessOneLine() {
  let dlina = +prompt("Введите длину строки", "");
  let str = "";
  for (let i = 0; i < dlina; i++) {
    if (i % 2 == 1) {
      str += "#";
    }
    if (i % 2 == 0) {
      str += " ";
    }
  }
  alert(str);
}

// numbers (twelfth task)

function numbers() {
  let str = "";
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      str += j;
    }
    str += "\n";
  }
  alert(str);
}

// chess (thirteenth task)

function chess() {
  let str = "";
  for (let i = 0; i < 5; i++) {
    if (i % 2 == 0) {
      for (let j = 0; j < 5; j++) {
        str += ".#";
      }
    }
    if (i % 2 == 1) {
      for (let j = 0; j < 5; j++) {
        str += "#.";
      }
    }
    str += "\n";
  }
  alert(str);
  console.log(str);
}

// cubes (fourteenth task)

function cubes() {
  let arr = [];
  arr.length = 9;
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.pow(i, 3);
  }
  alert(arr);
}

// multiply table (fifteenth task)

function multiplyTable() {
  let arr = [];
  for (let i = 0; i < 11; i++) {
    arr[i] = [];
    for (let j = 0; j < 11; j++) {
      arr[i][j] = i * j;
    }
  }
  // alert(arr);
  console.log(arr);
}

// matrix to html table (sixteenth task)

function matrixToHtmlTable() {
  let arr = [];
  let str = `<style>
                table{
                  border-spacing: 0px;
                  border: 1px solid black;
                }
                td{
                  text-align: center;
                  width: 30px;
                  height: 25px;
                  border: 1px solid black;
                }
             </style>
  <table>`;
  str += "<tr><td bgcolor='#99cc00'>*</td>";
  for (let i = 1; i < 11; i++) {
    str += `<td bgcolor="#808000">${i}</td>`;
  }
  str += "</tr>";
  for (let i = 1; i < 11; i++) {
    arr[i] = [];
    str += `<tr><td bgcolor="#808000">${i}</td>`;
    for (let j = 1; j < 11; j++) {
      str += `<td> ${(arr[i][j] = i * j)}</td>`;
    }
    str += `</tr>`;
  }
  str += "</table>";
  document.write(str);
}

// Задание на синий пояс: Треугольник (seventeenth task)

function blueBeltTaskTriangle() {
  let str = "";
  let width = 11;
  let dots;
  let hashas;
  for (let i = 0; i < 6; i++) {
    dots = Math.floor(width / 2) - i;
    hashas = width - dots * 2;
    for (let j = 0; j < dots; j++) {
      str += ".";
    }
    for (let j = 0; j < hashas; j++) {
      str += "#";
    }
    for (let j = 0; j < dots; j++) {
      str += ".";
    }
    str += "\n";
  }
  console.log(str);
}

htmlTree();
declarativeFields();
objectLinks();
imperativeArrayFill();
whileConfirm();
arrayFill();
arrayFillNopush();
infiniteProbability();
emptyLoop();
progressionSum();
chessOneLine();
numbers();
chess();
cubes();
multiplyTable();
matrixToHtmlTable();
blueBeltTaskTriangle();
