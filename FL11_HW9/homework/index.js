// Task #0
const getNumbers = randomStr => {
  const len = randomStr.length;
  const numbers = [];
  for (let i = 0; i < len; i++) {
    if (!isNaN(randomStr[i])) {
      numbers.push(parseInt(randomStr[i]));
    }
  }
  return numbers;
}

// Task #1
const findTypes = (...args) => {
  const typesCount = {};
  let len = args.length;
  for (let i = 0; i < len; i++) {
    let argType = typeof args[i];
    if (typesCount[argType] !== null) {
      typesCount[argType]++;
    }
  }
    return typesCount;
}

// Task #2
const executeforEach = (arr, func) => {
  const len = arr.length;
  for (let i = 0; i < len; i++ ) {
  func(arr[i]);
  }
}

// Task #3
const mapArray = (arr, func) => {
  let result = [];
  executeforEach(arr, function(el) {
    result.push(func(el));
  });
  return result;
}

// Task #4
const filterArray = (arr, func) => {
  let result = [];
  executeforEach(arr, function(el) {
    if (func(el)) {
    result.push(el);
    }
  });
  return result;
}

// Task #5 
const showFormattedDate = arg => {
    let date = arg.toLocaleDateString('en-US', {  
    day : 'numeric',
    month : 'short'
  });
  let year = arg.getFullYear();
   return `Date: ${date} ${year}`;
}
showFormattedDate(new Date('2019-01-27T01:10:00')) 

// Task #6
const canConvertToDate = date => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  return !Number.isNaN(year) && !Number.isNaN(month) && !Number.isNaN(day);
}

// Task #7
const daysBetween = (date1, date2) => {
  const diff = date2.getTime() - date1.getTime();
  const msInOneDay = 86400000;
  const diffInDays = Math.round(diff / msInOneDay);
  return diffInDays;
}

// Task #8
const getAmountOfAdultPeople = data => {
  const daysInEighteenYears = 6575;
  let result = [];
  result = filterArray(data, function (el) {
    return daysBetween(new Date(el[' birthday ']), Date.now()) > daysInEighteenYears;
  });
  return result.length;
}

// Task #9
const ObjKeys = obj => {
const arr = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      arr.push(obj[key]);
    }
  }
  return arr;
}

// Task #10
const ObjVal = obj => {
const arr = [];
  for (let val in obj) {
    if (obj.hasOwnProperty(val)) {
      arr.push(obj[val]);
    }
  }
  return arr;
}