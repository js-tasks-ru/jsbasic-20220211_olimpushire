function ucFirst(str) {
  // ваш код...
   if (str === '') {
	 return '';
}
 
 if (str.length === 1) {
	 str = str[0].toUpperCase();
	 return str;
 } else {
	 str = str[0].toUpperCase() + str.slice(1);
	 return str;
 }
}
