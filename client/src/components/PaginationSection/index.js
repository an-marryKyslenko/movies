import { Pagination, Stack } from '@mui/material';
import { useFilters } from '../../hooks/useFilter';
const PaginationSection = ({ handleChangePage,page }) => {
	return (
		<Stack spacing={2} sx={{ padding: '30px 0' }}>
			<Pagination
				count={500}
				color="primary"
				sx={{ display: 'flex', justifyContent: 'center' }}
				page={page}
				onChange={handleChangePage}
			/>
		</Stack>
	)
}

export default PaginationSection