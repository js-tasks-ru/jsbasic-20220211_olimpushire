function factorial(n) {
	let nResult = n;
	let decrNumb = 1;

	if (n === 0 || n === 1) {
		return 1;
	}

	do {
		nResult *= n - decrNumb;
		decrNumb = decrNumb + 1;	
	} while ((n - decrNumb) > 0 );
	  
	return nResult;
}
