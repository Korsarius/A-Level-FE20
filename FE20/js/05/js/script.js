function persons() {
    // 3 persons (first task)~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // different fields (second task)~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    let a, b, c;
    a = {
        name: "Ivan",
        surname: "Ivanov",
        age: "25",
        sex: "Male",
        toString() {
            return `    Person A:\nName: "${this.name}",\nSurname: "${this.surname}",\nAge: "${this.age}",\nSex: "${this.sex}"`;
        },
    };
    b = {
        name: "Petr",
        surname: "Petrov",
        fathername: "Petrovich",
        toString() {
            return `\n  Person B:\nName: "${this.name}",\nSurname: "${this.surname}",\nFathername: "${this.fathername}"`;
        },
    };
    c = {
        name: "Fedor",
        surname: "Fedorov",
        sex: "Male",
        married: true,
        toString() {
            return `\n  Person C:\nName: "${this.name}",\nSurname: "${this.surname}",\nSex: "${this.sex}",\nMarried: "${this.married}"`;
        },
    };

    // fields check (third task)~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    for (let key in a) {
        if (key != "name" && key != "surname" && key != "toString") {
            alert("Object A: \n" + key + ": " + a[key]);
        }
    }
    for (let key in b) {
        if (key != "name" && key != "surname" && key != "toString") {
            alert("Object B: \n" + key + ": " + b[key]);
        }
    }
    for (let key in c) {
        if (key != "name" && key != "surname" && key != "toString") {
            alert("Object C: \n" + key + ": " + c[key]);
        }
    }

    // array of persons (fourth task)~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    let persons = [
        a,
        b,
        c,
        {
            name: "Donald",
            surname: "Trump",
            sex: "Female",
            age: 100,
            toString() {
                return `\n  Person uknown:\nName: "${this.name}",\nSurname: "${this.surname}",\nSex: "${this.sex}",\nAge: "${this.age}"`;
            },
        },
    ];
    alert(persons.toString());

    // loop of persons (fifth task)~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    for (let i = 0; i < persons.length; i++) {
        console.log(persons[i]);
    }

    // loop of name and surname (sixth task)~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    for (let i = 0; i < persons.length; i++) {
        for (let key in persons[i]) {
            if (key == "name" || key == "surname") {
                console.log(key + ": " + persons[i][key]);
            }
        }
    }

    // loop of loop of values (seventh task)~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    let str = "";
    for (let i = 0; i < persons.length; i++) {
        str += `Person ${i + 1}:\n`;
        for (let key in persons[i]) {
            if (key != "toString") {
                str += persons[i][key] + "\n";
            }
        }
    }
    alert(str);
    console.log(str);

    // fullName (eighth task)~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    for (let i = 0; i < persons.length; i++) {
        for (let key in persons[i]) {
            if (key != "fullName") {
                persons[i]["fullName"] = persons[i].name + " " + persons[i].surname;
            }
        }
    }
    for (let i = 0; i < persons.length; i++) {
        for (let key in persons[i]) {
            if (key == "fathername") {
                persons[i]["fullName"] += " " + persons[i].fathername;
            }
        }
    }
    for (let i = 0; i < persons.length; i++) {
        delete persons[i].name;
        delete persons[i].surname;
        delete persons[i].fathername;
    }
    console.log(persons);

    //  Меняю toString для красивого вывода в alert~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    persons[0].toString = function () {
        return `    Person A:\nFull Name: "${this.fullName}",\nAge: "${this.age}",\nSex: "${this.sex}"`;
    };
    persons[1].toString = function () {
        return `\n    Person B:\nFull Name: "${this.fullName}"`;
    };
    persons[2].toString = function () {
        return `\n    Person C:\nFull Name: "${this.fullName}",\nMarried: "${this.married}",\nSex: "${this.sex}"`;
    };
    persons[3].toString = function () {
        return `\n    Person D:\nFull Name: "${this.fullName}",\nAge: "${this.age}",\nSex: "${this.sex}."`;
    };
    alert(persons);

    //   serialize (nineth task)~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    let personsJSON = JSON.stringify(persons);
    console.log(personsJSON);

    //   deserialize (tenth task)~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    let jsonToObject = JSON.parse(personsJSON);
    console.log(jsonToObject);

    jsonToObject.splice(0, 3);
    console.log(jsonToObject);

    persons.push(...jsonToObject);
    console.log(persons);

    //   HTML (eleventh task)~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //   HTML optional fields (twelfth task)~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //   HTML tr color (thirteenth task)~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //   HTML th optional (fourteenth task)~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    var html = "<table border='1' style='text-align: center'>";
    // html += `<tr><th>№</th><th>Full Name</th><th>Age</th><th>Sex</th><th>Married</th></tr>`;
    html += `<tr><th>№</th>`;
    let keyArray = "";
    for (let key of persons) {
        for (let j in key) {
            if (!keyArray.includes(j)) {
                keyArray += j;
                if (j == "toString") {
                    continue;
                }
                html += `<th>${j}</th>`;
            }
        }
    }
    html += `</tr>`;
    for (let i = 0; i < persons.length; i++) {
        if (i % 2 == 0) {
            html += `<tr bgcolor="#808000"><td>${i + 1}</td><td>${persons[i].age}</td><td>${
      persons[i].sex
    }</td><td>${persons[i].fullName}</td><td>${persons[i].married}</td></tr>`;
        } else {
            html += `<tr bgcolor="#99cc00"><td>${i + 1}</td><td>${persons[i].age}</td><td>${
                persons[i].sex
              }</td><td>${persons[i].fullName}</td><td>${persons[i].married}</td></tr>`;
        }
    }
    html += "</table>";

    // замена undefined на тире с помощью метода replace и регулярного выражения
    // Флаг 'g' позволяет найти все совпадения регулярного выражения в строке, а не только одно. 
    // console.log(html.replace(/undefined/g, "–"));
    document.write(html.replace(/undefined/g, "–"));
}

// Blue belt quest (fifteenth task)
function blueBeltQuest() {
    var someTree = {
        tagName: "table", //html tag
        subTags: [ //вложенные тэги
            {
                tagName: "tr",
                subTags: [{
                        tagName: "td",
                        text: "some text",
                    },
                    {
                        tagName: "td",
                        text: "some text 2",
                    }
                ]
            }
        ],
        attrs: {
            border: 1,
        },
    }

    let str = "";
    for (key in someTree) {
        // arr.push(key);
        // for (let i = 0; i < arr.length; i++) {
        if (key == "tagName") {
            str += "<" + someTree.tagName;
        } else {
            if (key == "attrs") {
                for (key in someTree.attrs) {
                    if (key == "border") {
                        str += ` border="${someTree.attrs.border}">`;
                    }
                }
            }
        }
    }
    for (key in someTree) {
        if (key == "subTags") {
            for (index of someTree.subTags) {
                if (index.tagName) {
                    str += "<" + index.tagName + ">";
                }
                if (index.subTags) {
                    for (index of someTree.subTags[0].subTags) {
                        str += "<" + index.tagName + ">";
                        str += index.text;
                        str += "</" + index.tagName + ">";
                    }
                }
            }
        }
    }
    str += "</tr></table>";
    console.log(str);
    document.write("</br>" + str);
}

persons();
blueBeltQuest();