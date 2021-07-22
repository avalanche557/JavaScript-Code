function add(a) {
	return function(b) {
		if(b) {
			return add(a + b)
		} else {
			return a
		}
	}
}

console.log(add(1)(2)(3)())

function sum (a,b) {
	if(b) {
		return a + b
	} else {
		return function(b) {
			return a + b
		}
	}
}

console.log(sum(2,3))
console.log(sum(2)(3))