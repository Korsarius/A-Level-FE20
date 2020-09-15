const requestURL =
  "https://raw.githubusercontent.com/David-Haim/CountriesToCitiesJSON/master/countriesToCities.json";

function sendRequest(method, url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url, true);

    xhr.responseType = "json"; // то же самое что и JSON.parse(xhr.response)

    xhr.onload = () => {
      if (xhr.status >= 400) {
        // reject(JSON.parse(xhr.response));
        reject(xhr.response);
      } else {
        resolve(xhr.response);
        // resolve(JSON.parse(xhr.response));
      }
    };

    xhr.onerror = () => {
      reject(xhr.response);
      // reject(JSON.parse(xhr.response));
    };

    xhr.send();
  });
}

sendRequest("GET", requestURL)
  .then((data) => {
    let countries = document.getElementById("countries");
    let cities = document.getElementById("cities");

    // console.log(data);

    // console.log(Object.keys(data).sort());

    let arr = Object.keys(data).sort();
    console.log("arr: ", arr);

    console.log(Object.values(data));

    let obj = {};

    for (let key in data) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] == key) {
          obj[key];
        }
      }
    }

    console.log(obj);

    for (let key in data) {
      let option = document.createElement("option");
      option.innerText = key;
      countries.appendChild(option);
    }

    // console.log(data);

    // Первая страна Afghanistan, по-умолчанию вставка её городов во второй select
    for (let i of data["China"]) {
      let option = document.createElement("option");
      option.innerText = i;
      cities.appendChild(option);
    }

    // при изменении select стран, меняется второй select (список всех городов из выбранной страны)
    countries.addEventListener("change", function () {
      // перед добавлением новых городов, удаление старых
      while (cities.firstChild) {
        cities.removeChild(cities.firstChild);
      }

      let country = document.getElementById("countries");
      let value = country.value;
      console.log(value); // вывод в консоль выбранной страны
      for (let key in data) {
        //   console.log(key); // вывод всех стран в консоль
        for (let i of data[key]) {
          if (key == value) {
            console.log(i); // вывод городов выбранной страны (в первом select) в консоль
            let option = document.createElement("option");
            option.innerText = i;
            cities.appendChild(option);
          }
        }
      }
    });
  })
  .catch((err) => console.log(err));