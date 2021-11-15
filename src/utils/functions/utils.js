/**
 * @typedef {Object} Item
 * @property {number | string} id
 * @property {string} title
 */

/** @module Utils*/

/**
 * @function
 * @description Функция, которая создает базовую разметку
 * @param {string} placeholder
 * @returns {string}
 */
export const getHMTL = (placeholder) => {
	return `
  <div class="select__container">
    <div class="selected__list"></div>
    <input type="text" size="1" class="select__input" placeholder=${placeholder}/>
    <label class="select__input-cross"
      ><i class="fas fa-times"></i>
    </label>
  </div>
  <ul class="select__list"></ul>`;
};

/**
 * @function
 * @description Функция, которая ищет индекс задаваемого элемента в массиве
 * @param {Item} element
 * @param {Item[]} selectedItems
 * @returns {*}
 */
export const findElementIndex = (element, selectedItems) => {
	return selectedItems.findIndex((el) => el.id === element.id);
};

export const createSelectedListItem = (element, isMultuple) => {
	if (isMultuple) {
		const div = document.createElement("div");
		div.classList.add("selected__item");
		div.dataset.id = element.id;
		div.innerHTML = `<span class="selected__text">${element.title}</span>
    <span class="selected__cross">
      <i class="fas fa-times"></i>
    </span>`;
		return div;
	} else {
		const div = document.createElement("div");
		div.classList.add("selected__item-text");
		div.innerHTML = element.title;
		return div;
	}
};
