export const HTTP_LINK = 'https://movies-recommend-one.vercel.app/graphql';
// export const HTTP_LINK = 'http://localhost:4000/graphql';
export const CONFRIM_TIMEOUT = 3000;
export const STORAGE_KEY = 'locale';
export const LOCALES = {
	ENGLISH: 'en-us',
	UKRAINE: 'uk-UA'
};
export const SORT_DIRECTION = {
	DESC: 'desc',
	ASC: 'asc'
}
export const SORT_OPTIONS = [
	{ label: 'popularity', value: 'popularity' },
	{ label:'vote_average', value: 'vote_average' },
	{ label:'revenue', value: 'revenue' },
]