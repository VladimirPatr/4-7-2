'use strict';



const guess = () => {

	let n = Math.floor(Math.random() * 100 + 1);
	console.log(n);

	while(true) {
		let x = prompt('Введите число о 1 до 100');

		if (x === null) {
			break; 
		} 
		if (isNaN(x)) {
			alert("Введи число!");
		} 
		if (x < n) {
			alert('Больше!');
		}
		if (x > n) {
			alert('Меньше!');
		}
		if (x == n) {
			alert('Правильно!');
			break;
		}
	}

}
guess()



