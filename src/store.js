export const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			favorites: [],
			loading: true
		},
		actions: {
			loadData: async () => {
				const API_URL = "https://www.swapi.tech/api";
				try {
					const [peopleRes, planetsRes, vehiclesRes] = await Promise.all([
						fetch(`${API_URL}/people?page=1&limit=10`),
						fetch(`${API_URL}/planets?page=1&limit=10`),
						fetch(`${API_URL}/vehicles?page=1&limit=10`),
					]);

					const peopleData = await peopleRes.json();
					const planetsData = await planetsRes.json();
					const vehiclesData = await vehiclesRes.json();

					setStore({
						people: peopleData.results,
						planets: planetsData.results,
						vehicles: vehiclesData.results,
						loading: false
					});
				} catch (error) {
					console.error("Error loading data", error);
				}
			},
			addFavorite: (item) => {
				const store = getStore();
				const exists = store.favorites.find(fav => fav.uid === item.uid);
				if (exists) return;
				setStore({ favorites: [...store.favorites, item] });
			},
			removeFavorite: (uid) => {
				const store = getStore();
				setStore({ favorites: store.favorites.filter(fav => fav.uid !== uid) });
			}
		}
	};
};