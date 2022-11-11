const useSort = (data, valet, kod) => {

	const newData = data.map(([dateMilSec , sum]) => ({
		x: new Date(dateMilSec),
		y: sum,
		valet,
		kod
	}))

	return newData.slice(newData.length - 365 , newData.length)
}

export default useSort;

// toLocaleDateString('ru', {
// 	weekday: "long" ,
// 	day: 'numeric',
// 	month: 'long',
// 	year: 'numeric',
// 	hour: '2-digit',
// 	minute: '2-digit',
// })

//не работает