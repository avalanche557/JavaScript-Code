let count = 0

const getData = (data) => {
	console.log("getting Data...", count++, data.target.value)
}

function throttle(fn, delay) {
	let flag = true;
	return function() {
		const ctx = this;
		const args = arguments;
		if(flag) {
			fn.apply(ctx, args)
			flag = false
			setTimeout(() => {
				flag = true
			}, delay)
		}
		
	}
}


const betterFunction = throttle(getData, 1000)