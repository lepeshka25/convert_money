const useSort = (data, valet, kod) => {
	const sliceData = data.slice(data.length - 365 , data.length)

	const newData = sliceData?.map(([dateMilSec , sum]) => ({
		x: new Date(dateMilSec),
		y: sum,
		valet,
		kod
	}))

	return newData
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