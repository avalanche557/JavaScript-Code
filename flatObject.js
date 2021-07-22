const a = {
	"a": 1,
	"b": {
		"c": 2
	}
}

flatObject = (obj, res) => {
	let result = res;
	Object.keys(obj).map((item) => {
		if(typeof obj[item] === 'object') {
			flatObject(obj[item], result)
		} else{
			result[item] = obj[item]
		}
			
	})
	
	return result
}

console.log(flatObject(a, {}))