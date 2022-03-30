/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */

import createElement from '../../assets/lib/create-element.js';

export default class UserTable {
  #items = [];
  
  constructor(rows) {
    this.#items = rows;

    this.elem = createElement(this.#template());

    this.elem.addEventListener("click", function (event) {
          if (event.target.className != 'remove-button') return;
          let row = event.target.closest('tr');
          row.remove();
    });
  }
  
  //TEMPLATE
 #template() {
    return `
			<table>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Возраст</th>
            <th>Зарплата</th>
            <th>Город</th>
            <th></th>
          </tr>
        </thead>
      	<tbody>
          ${
    			  this
      			  .#items
      			  .map(item => `<tr><td>${item.name}</td>
            <td>${item.age}</td>
            <td>${item.salary}</td>
            <td>${item.city}</td>
            <td><button class="remove-button">X</button></td></tr>`)
    				  .join('\n')
  			  }
        </tbody>
      </table>
		`;
  }
// END TEMPLATE
 


}
