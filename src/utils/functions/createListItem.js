/** @module createData*/

/**
 * @function
 * @description Функция, которая возвращает один элемент списка с соотвутвующими стилями
 * @param {Item} element - элемент, который необходимо отразить
 * @param {string} inputValue - значение input
 * @param {Item[]} selectedItems - выбранные значения
 * @returns {HTMLLIElement}
 */
const createListItem = (element, inputValue, selectedItems) => {
	const item = document.createElement("li");
	item.dataset.id = element.id;
	item.dataset.value = element.title;
	item.classList.add('d');
	let innerText = element.title;
	
	if (inputValue) {
		const highlightParts = element.title.split(
			new RegExp(`(${inputValue})`, "gi")
		);
		const text = highlightParts.map((part) =>
			part.toLowerCase() === inputValue.toLowerCase()
				? `<b>${part}</b>`
				: `<span>${part}</span>`
		);
		innerText = text.join("");
	}
	
	if (selectedItems && selectedItems.length > 0) {
		const currentElem = selectedItems.find((el) => el.id == element.id);
		currentElem && item.classList.add('d');
	}
	
	item.innerHTML = innerText;
	return item;
};

export default createListItem;

/**
 * @type {Item}
 */
const item = {id: 3, title: 'ffff'}
