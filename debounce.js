let count = 0

const getData = (data) => {
	console.log("getting Data...", count++, data.target.value)
}

function debounce(fn, delay) {
	let timer;
	return function() {
		const args = arguments;
		const ctx = this
		clearTimeout(timer)
		timer = setTimeout(() => {
			fn.apply(ctx, args)
		}, delay)
	}
}


const betterFunction = debounce(getData, 1000)