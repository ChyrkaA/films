/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

let movieDB = {
	movies: [
		"Логан",
		"Лига справедливости",
		"Ла-ла лэнд",
		"Одержимость",
		"Скотт Пилигрим против..."
	]
};
let movArr = movieDB.movies;
//1
const reklama = document.querySelectorAll('.promo__adv img');
reklama.forEach(item => {
	item.remove();
});
//2
const promoGenre = document.querySelector('.promo__genre');
promoGenre.textContent = "Драма";
//3
const bg = document.querySelector('.promo__bg');
bg.style.backgroundImage = 'url("img/bg.jpg")';
//4,5
const ul = document.querySelector('.promo__interactive-list');
const list = document.querySelectorAll('.promo__interactive-item');
const header = document.querySelector('.promo__interactive-title');
list.forEach(item => {
	item.remove();
});

const btn = document.getElementById('btn');
btn.addEventListener('click', function (e) {
	e.preventDefault();
	let val = document.getElementById('film').value;
	//обрезаем строку до 21 символа и добавляем три точки в конце
	if (val.length > 21) {
		val = val.substr(0, 21);
		val = val.concat('...');
	} else {
		console.log('меньше 21');
	}
	movArr.push(val);	
	document.getElementById('film').value = "";
	arr(movArr);
	console.log(movArr);
	movieDB.movies = movArr;
	return movieDB.movies;
});

//функция по сортировке массива
let arr = function (data) {
	let collator = new Intl.Collator("uk");	//сортировка по национальному признаку
	data.sort(collator.compare);
	let title = '';
	data.forEach((item, i) => {
		title = title + `<li class="promo__interactive-item">${i+1}: ${item}<div class="delete"></div></li>`;
	});
	ul.innerHTML = title;
};
arr(movArr);


const del = document.querySelectorAll('.delete');
del.forEach((item, i) => {
	del[i].addEventListener('click', function (e) {
		console.log('privet');
		movArr.splice(i, 1);
		console.log(movArr);
		arr(movArr);
		movieDB.movies = movArr;
		return movieDB.movies;
	});

});