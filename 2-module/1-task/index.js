function sumSalary(salaries) {
  // ваш код...
  let salSum = 0;
	for (const key in salaries) {
		if (isFinite(salaries[key])) {
			salSum += salaries[key];
		}		
	}
	
	return salSum;
}
