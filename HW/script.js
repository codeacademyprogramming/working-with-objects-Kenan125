// Hello World

let user = {};

user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// Check for emptiness

let schedule = {};


function IsEmpty(obj) {
  for (let i in obj) {
    return false;
  }

  return true;
}

schedule["8:30"] = "get up";
console.log(IsEmpty(schedule));

// Sum object properties

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

function SumObj() {
  var SumOfSalaries = 0;
  for (let i in salaries) {
    SumOfSalaries += salaries[i];
  }
  console.log(SumOfSalaries);
}

console.log(SumObj(salaries));

// Multiply numeric property values by 2

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(obj) {
  for (let i in obj) {
    if (typeof obj[i] == "number") {
      obj[i] *= 2;
    }
  }
  console.log(obj);
}

console.log(multiplyNumeric(menu));
