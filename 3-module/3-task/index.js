function camelize(str) {
  // ваш код...
  const firstSeparator = str.indexOf('-',0) == 0;
  let tmpArr;
  
  if (firstSeparator) {
	 return str
		.split('-')
		.filter(item => (item != ""))	  
		.map(
		(word) => (word[0].toUpperCase() + word.slice(1))
		)
		.join('');	 
  } else {
	 return str
		.split('-')
		.filter(item => (item != ""))	  
		.map(
		(word, index) => index == 0 ? word: word[0].toUpperCase() + word.slice(1)
		)
		.join(''); 
	  
  }

}
