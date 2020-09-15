var div = document.getElementById('multiplication');
var table = document.createElement('table');
div.appendChild(table);
for (let i = 1; i < 10; i++) {
  var tr = document.createElement('tr');
  // table.appendChild(tr);
  for (let j = 1; j < 10; j++) {
    var td = document.createElement('td');
    td.onmouseover = function (event) {
      // console.log(this, event) //event -   это объект с информацией о событии,
      //передается первым параметром в обработчик события.

      // console.log("this.cellIndex: ", this.cellIndex);

      // console.log('td.parentElement.rowIndex: ', td.parentElement.rowIndex);

      // console.log('this.parentElement.parentElement: ', this.parentElement.parentElement);
      let evenTr = document.getElementsByTagName("tr"); //all tr in our html
      // console.log('evenTr: ', evenTr);

      let arr = []; // массив для хранения всех ячеек таблицы
      for (let i = 0; i < evenTr.length; i++) {
        arr.push(evenTr[i].children);
      }
      // console.log('arr: ', arr);
      for (let i = 0; i < arr.length; i++) { // цикл изменения цвета фона столбца, в которой находится выделенная ячейка
        arr[i][this.cellIndex].style.backgroundColor = '#808000';
      }

      let childrens = this.parentElement.children;

      for (let el = 0; el < childrens.length; el++) { // цикл изменения цвета фона всей строки, в которой находится выделенная ячейка
        childrens.item(el).style.backgroundColor = '#808000';
      }
      this.style.backgroundColor = "#99cc00"; // обращение к выделенной пользователем ячейке (наведение мышью)
    }
    // При отведении курсора мыши возвращается белый фон ячеек
    td.onmouseout = function (event) {
      this.style.backgroundColor = "#ffffff";
      this.parentElement.style.backgroundColor = '#ffffff';
      let childrens = this.parentElement.children;
      for (let el = 0; el < childrens.length; el++) {
        childrens.item(el).style.backgroundColor = '#ffffff';
      }
      let evenTr = document.getElementsByTagName("tr");
      let arr = [];
      for (let i = 0; i < evenTr.length; i++) {
        arr.push(evenTr[i].children);
      }
      // console.log('arr: ', arr);
      for (let i = 0; i < arr.length; i++) {
        arr[i][this.cellIndex].style.backgroundColor = '#ffffff';
      }
    }
    td.innerText = `${i*j}`;
    tr.appendChild(td);
  }
  table.appendChild(tr);
}


/////////////////////////////////////////////////////// CALC ////////////////////////////////////////////////////////////////
var calc = document.getElementById('calc');

var inp1 = document.createElement('input');
var inp2 = document.createElement('input');
var result = document.createElement('input');
var btnAdd = document.createElement('button');
var btnSub = document.createElement('button');
var btnMul = document.createElement('button');
var btnDiv = document.createElement('button');
var btnMod = document.createElement('button');

inp1.setAttribute('placeholder', 'Enter а');
inp2.setAttribute('placeholder', 'Enter b');
result.setAttribute('placeholder', 'Result');

btnAdd.innerText = 'Addition - "+"';
btnSub.innerText = 'Subtraction - "-"';
btnMul.innerText = 'Multiplication - "*"';
btnDiv.innerText = 'Division - "/"';
btnMod.innerText = 'Modulus - "%"';

calc.append(inp1, inp2, btnAdd, btnSub, btnMul, btnDiv, btnMod, result);
inp2.insertAdjacentHTML("afterEnd", "<br />");
btnMod.insertAdjacentHTML("afterEnd", "<br />");

btnAdd.onclick = add;

function add() {
  result.value = (+inp1.value) + (+inp2.value);
  result1.value = (+inp21.value) + (+inp22.value);
}

btnSub.onclick = sub;

function sub() {
  result.value = (+inp1.value) - (+inp2.value);
}

btnMul.onclick = mul;

function mul() {
  result.value = (+inp1.value) * (+inp2.value);
}

btnDiv.onclick = division;

function division() {
  result.value = (+inp1.value) / (+inp2.value);
}

btnMod.onclick = mod;

function mod() {
  result.value = (+inp1.value) % (+inp2.value);
}

/////////////////////////////////////////////////////// CALC 2 ////////////////////////////////////////////////////////////////

var calc2 = document.getElementById('calc2');

var inp21 = document.createElement('input');
var inp22 = document.createElement('input');
var result1 = document.createElement('input');
var result2 = document.createElement('input');
var result3 = document.createElement('input');
var result4 = document.createElement('input');
var result5 = document.createElement('input');
var label1 = document.createElement('label');
var label2 = document.createElement('label');
var label3 = document.createElement('label');
var label4 = document.createElement('label');
var label5 = document.createElement('label');

label1.innerText = 'Addition - "+"';
label2.innerText = 'Subtraction - "-"';
label3.innerText = 'Multiplication - "*"';
label4.innerText = 'Division - "/"';
label5.innerText = 'Modulus - "%"';

inp21.setAttribute('placeholder', 'Enter а');
inp22.setAttribute('placeholder', 'Enter b');

calc2.append(inp21, inp22, label1, label2, label3, label4, label5, result1, result2, result3, result4, result5);
inp22.insertAdjacentHTML("afterEnd", "<br />");
inp22.insertAdjacentHTML("afterEnd", "<br />");
label5.insertAdjacentHTML("afterEnd", "<br />");

function calculate() {
  result1.value = (+inp21.value) + (+inp22.value);
  result2.value = (+inp21.value) - (+inp22.value);
  result3.value = (+inp21.value) * (+inp22.value);
  result4.value = (+inp21.value) / (+inp22.value);
  result5.value = (+inp21.value) % (+inp22.value);
}

inp21.oninput = calculate;
inp22.oninput = calculate;