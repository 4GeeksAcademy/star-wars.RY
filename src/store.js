// 1. Estado inicial (Tus arrays vacíos)
export const initialStore = () => {
	return {
		people: [],
		planets: [],
		favorites: []
	};
};


export default function storeReducer(store, action = {}) {
	switch (action.type) {
		
		case 'set_people':
			return {
				...store,
				people: action.payload 
			};

		case 'set_planets':
			return {
				...store,
				planets: action.payload
			};

		case 'add_favorite':
			const exists = store.favorites.find(fav => fav.uid === action.payload.uid);
			if (exists) return store; 

			return {
				...store,
				favorites: [...store.favorites, action.payload]
			};

		case 'delete_favorite':
			return {
				...store,
				favorites: store.favorites.filter(fav => fav.uid !== action.payload.uid)
			};

		default:
			throw Error('Unknown action.');
	}
}
