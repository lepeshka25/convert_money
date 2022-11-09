const useSort = (data, valet, kod) => {
	const newData = data.map(([dateMilSec , sum]) => ({
		x: new Date(dateMilSec),
		y: sum,
		valet,
		kod
	}))

	return newData
}

export default useSort;