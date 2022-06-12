export const arrayIsNotEmpty = array => array.length > 0;
export const findById = (array, id, idName) => {
	return array.find(item => item[idName] === id);
};