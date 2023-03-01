function topSalary(salaries) {
    let maxSalary = 0;
    let nameRes = null;

    for ([name, salary] of Object.entries(salaries)) {
        if (salary > max) {
            max = salary;
            nameRes = name
        }
    }
    return nameRes;
}