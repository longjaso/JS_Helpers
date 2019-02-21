function deepClone(obj) {
	let clone = {};
	
	function cloneArray(arr){
		let clonedArr = [];
		arr.forEach(index => {
			if (typeof(index) !== 'object') {
				clonedArr.push(index);
			} else if (Array.isArray(index)){
				clonedArr.push(cloneArray(index));
			} else {
				clonedArr.push(deepClone(index));
			}
		})
		return clonedArr;
	}
	
	for (let prop in obj){
		if (typeof(obj[prop]) !== 'object') {
			clone[prop] = obj[prop];
		} else if (Array.isArray(obj[prop])) {
			clone[prop] = cloneArray(obj[prop]);
		} else {
			clone[prop] = deepClone(obj[prop]);
		}
	}
	return clone;
}
