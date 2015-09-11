// var Mockingbird(name, employeeId, baseIncome, rate)= {
//  this.name = name;
//  this.employeeId = employeeId;
//  this.baseIncome = baseIncome;
//  this.rate = rate;
// };

// var atticus = new Mockingbird("Atticus", "2405", "47000", 3);
// var jem = new Mockingbird("Jem", "62347", "63500", 4);
// var boo = new Mockingbird("Boo", "11435", "54000", 3);
// var scout = new Mockingbird("Scout", "6243", "74750", 5);



var atticus = {
 name: "Atticus", 
 employeeId: "2405", 
 income: "47000", 
 rate: 3
};

var jem = {
 name: "Jem", 
 employeeId: "62347", 
 income: "63500", 
 rate: 4
};

var boo = {
 name: "Boo", 
 employeeId: "11435", 
 income: "54000", 
 rate: 3
};

var scout = {
 name: "Scout", 
 employeeId: "6243", 
 income: "74750", 
 rate: 5
};

var array = [atticus, jem, boo, scout];

//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
for(var i = 0; i < array.length; i++){
//added [i] to access array inside the array
  array[i] = calculateSTI(array[i]);
  newEl = document.createElement('li');
//added .join to make more readable
  newText = document.createTextNode(array[i].join(", "));
  newEl.appendChild(newText);
  position.appendChild(newEl);
}

function calculateSTI(array){
  var newArray = [];

  newArray[0] = array.name;

  var employeeNumber = array.employeeId;
  var baseSalary = array.income;
  var reviewScore = array.rate;

  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
  }

  newArray[1] = bonus;
//added Math.round() to round the number
  newArray[2] = Math.round(baseSalary * (1.0 + bonus));
  newArray[3] = Math.round(baseSalary * bonus);
  console.log(newArray[0] + " " + newArray[1] + " " + newArray[2] + " " + newArray[3]);
  return newArray;
}

function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
  return basePercent;
}

function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}