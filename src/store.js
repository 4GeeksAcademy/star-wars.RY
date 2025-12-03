// 1. Estado inicial (Tus arrays vacíos)
export const initialStore = () => {
	return {
		people: [],
		planets: [],
		favorites: []
	};
};

// 2. Reducer (La función que decide cómo cambiar el estado)
export default function storeReducer(store, action = {}) {
	switch (action.type) {
		// Caso: Guardar la lista de Personajes
		case 'set_people':
			return {
				...store,
				people: action.payload // 'payload' es la data que enviamos
			};

		// Caso: Guardar la lista de Planetas
		case 'set_planets':
			return {
				...store,
				planets: action.payload
			};

		// Caso: Agregar favorito
		case 'add_favorite':
			// Evitar duplicados revisando el UID
			const exists = store.favorites.find(fav => fav.uid === action.payload.uid);
			if (exists) return store; // Si existe, devolvemos el store igual

			return {
				...store,
				favorites: [...store.favorites, action.payload]
			};

		// Caso: Eliminar favorito
		case 'delete_favorite':
			return {
				...store,
				favorites: store.favorites.filter(fav => fav.uid !== action.payload.uid)
			};

		default:
			throw Error('Unknown action.');
	}
}
