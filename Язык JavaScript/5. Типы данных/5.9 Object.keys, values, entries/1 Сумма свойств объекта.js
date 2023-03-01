function sumSalaries(salaries) {
    let salaryArr = Object.values(salaries);
    let salarySum = 0;
    for (let salary of salaryArr) {
        salarySum += salary;
    }
    return salarySum;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
  console.log(sumSalaries(salaries));