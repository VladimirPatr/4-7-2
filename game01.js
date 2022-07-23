'use strict';



const guess = () => {

	let n = Math.floor(Math.random() * 100 + 1);
	console.log(n);

	while(true) {
		let x = prompt('Введите число о 1 до 100');

		if (x === null) {
			break; 
		} 
		else if (isNaN(x)) {
			alert("Введи число!");
		} 
		else if (x < n) {
			alert('Больше!');
		}
		else if (x > n) {
			alert('Меньше!');
		}
		else {
			alert('Правильно!');
			break;
		}
	}

}
guess()



