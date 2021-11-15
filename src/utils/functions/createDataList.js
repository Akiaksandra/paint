import createListItem from "./createListItem.js";

/** @module createData*/

/**
 * @function
 * @description Функция, которая создает фильтрует изначальный массив по заданному условию
 * @param {*} patentNode - родительский компонент, в которго необходимо вставить список
 * @param {Item[]} data - массив всех данных
 * @param {string} inputValue - значение input, по которому необходимо отфильтровать
 * @param {Item[]} selectedItems - выбранные значения
 */
const createDataList = (patentNode, data, inputValue, selectedItems) => {
	patentNode.innerHTML = "";
	if (inputValue) {
		const filterData = data.filter((el) => el.title.includes(inputValue));
		if (filterData.length === 0) {
			const newItem = createListItem({
				title: "Ничего не найдено",
				id: "null",
			});
			patentNode.append(newItem);
			return;
		}
		filterData.forEach((el) => {
			const newItem = createListItem(el, inputValue, selectedItems);
			patentNode.append(newItem);
		});
	} else {
		data.forEach((el) => {
			const newItem = createListItem(el, "", selectedItems);
			patentNode.append(newItem);
		});
	}
};

export default createDataList;
