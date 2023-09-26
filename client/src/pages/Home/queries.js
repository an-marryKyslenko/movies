import { gql } from '@apollo/client'

export const MOVIES_QUERY = gql`
query Movies($filter: FiltersParam ){
	movies(filter: $filter){
		page
		totalPages
		totalResults
		results {
			id
			title
			releaseDate
			image: posterPath
			adult
			originalLanguage
			popularity
			runtime
		}
		}
	}
	
`