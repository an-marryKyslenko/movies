import { gql } from '@apollo/client'

export const MOVIES_BY_IDS_QUERY = gql`
query MoviesById($ids: [Int]){
		moviesByIds(ids: $ids) {
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
	
`