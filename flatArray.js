const a= [1,2,[3,[4],6],5]

flatArray = (arr, res) => {
	let result = res
	for(let i = 0; i < arr.length; i++) {
		if(Array.isArray(arr[i])) {
			flatArray(arr[i], result)
		} else {
			result.push(arr[i])
		}
	}
	return result
}

console.log(flatArray(a, []))