function highlight(table) {
  // ваш код...
  for (let i = 1; i < table.rows.length; i++) {
    let row = table.rows[i];
		
	if (!row.cells[3].hasAttribute('data-available')) {
			row.setAttribute('hidden', 'hidden');   
	} 
	
	if (row.cells[3].dataset.available == 'true') {
		row.classList.add('available');	
	} else {
		row.classList.add('unavailable');
	}
	
	if (row.cells[2].innerHTML == 'm') {
		row.classList.add('male');	
	} else {
		row.classList.add('female');
	}  
	
	if (row.cells[1].innerHTML < 18) {
		row.style.textDecoration = 'line-through';	
	}  
	
	
}
}
