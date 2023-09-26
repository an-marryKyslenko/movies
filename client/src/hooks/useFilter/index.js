import { useCallback, useState } from "react"
import { SORT_DIRECTION, SORT_OPTIONS } from "../../const"

export const useFilters = () => {
	const [filter, setFilter] = useState({
		page: 1,
		sortBy: SORT_OPTIONS[0].value,
		sortDirection: SORT_DIRECTION.DESC,
		includeAdult: true
	})
	
	const setPage = useCallback((page) => {
		setFilter({
			...filter,
			page
		})
	}, [filter])
	const setFilters = useCallback((filterFields) => {
		setFilter({
			...filter,
			...filterFields,
			year: +filterFields.year
		})
	}, [filter])

	return {
		filter,
		setPage,
		setFilters
	}
}

