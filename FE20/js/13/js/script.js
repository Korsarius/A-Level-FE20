// fetch basic (first task) //

const requestURL = "https://swapi.dev/api/people/1/";

let div = document.getElementById("table");

let fetchBasic = function (domElem, url) {
  fetch(url)
    .then((res) => res.json())
    .then((luke) => {
      let table = document.createElement("table");
      domElem.appendChild(table);
      console.log("fetchBasic", luke);
      // console.log(typeof luke);
      let tHead = document.createElement("thead");
      let trHead = document.createElement("tr");
      table.appendChild(tHead);
      tHead.appendChild(trHead);
      let tr = document.createElement("tr");
      table.appendChild(tr);
      for (let index in luke) {
        // console.log(index);
        let tdHead = document.createElement("td");
        tdHead.innerText = `${index}`;
        trHead.appendChild(tdHead);
        let td = document.createElement("td");
        // console.log(luke[index], typeof luke[index]);

        // fetch improved (second task)//

        if (
          typeof luke[index] === "string" &&
          luke[index].match(/http(?:s?):\/\/(?:www\.)?swapi\.dev\/api\//)
        ) {
          let button = document.createElement("button");
          button.innerText = "View";
          td.appendChild(button);
          button.addEventListener("click", function () {
            div.firstChild.remove();
            fetchBasic(div, luke[index]);
            console.log(luke[index]);
          });
          // } else if (typeof luke[index] === "object") {
        } else if (Array.isArray(luke[index])) {
          for (let i = 0; i < luke[index].length; i++) {
            let button = document.createElement("button");
            button.innerText = `View ${i + 1}`;
            td.appendChild(button);
            button.addEventListener("click", function () {
              div.firstChild.remove();
              fetchBasic(div, luke[index][i]);
              console.log(luke[index][i]);
            });
            // td.innerHTML += `<button>View ${i+1}</button>`;
          }
        } else {
          td.innerText = `${luke[index]}`;
        }
        tr.appendChild(td);
      }
    });
};

fetchBasic(div, requestURL);

// myfetch (third task) //

function myfetch(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);

    xhr.responseType = "json"; // то же самое что и JSON.parse(xhr.response.text)

    xhr.onload = () => {
      if (xhr.status >= 400) {
        // reject(JSON.parse(xhr.response.text));
        // reject(xhr.response);
        console.error("Error: ", reject(xhr.response));
      } else {
        resolve(xhr.response);
        // resolve(JSON.parse(xhr.response.text));
      }
    };

    xhr.onerror = () => {
      reject(xhr.response);
      // reject(JSON.parse(xhr.response));
    };

    xhr.send();
  });
}

myfetch(requestURL)
  .then((luke) => console.log("myfetch", luke))
  .catch((err) => console.error("Error", err));

const delay = (ms) =>
  new Promise((resolve) => setTimeout(() => resolve(ms), ms));

Promise.race([myfetch(requestURL), delay(110)]).then((result) =>
  console.log("Race result", result)
);
