function getMinMax(str) {
  // ваш код...
    const didgitArr = str.split(' ');
  let newArr = [];
let result = {
	min: 0,
	max: 0,
}
  
  for (let a = 0; a < didgitArr.length; a++) {
	 
	if (!isNaN(Number(didgitArr[a]))) {
		 console.log(Number(didgitArr[a]));
		 newArr.push(Number(didgitArr[a]));
		}		  
	}

	result.min = newArr[0];
	result.max = newArr[0];
	  
	for (let i = 1; i < newArr.length; i++) {
		if (newArr[i] < result.min) {
			result.min = newArr[i];
		}
		if (newArr[i] > result.max) {
			result.max = newArr[i];
		}
	}
  
	  return result;
}
