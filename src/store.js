export const getState = ({getStore,getActions,setStore}) => {
  return {
    store: {
      people:[],
      planets:[],
      vehicles:[],
      favorites:[],
      loading: true
    },
    actions:{
      loadData: async() => {
        const API_URL = "https://www.swapi.tech/api";
        try {
          const[peopleStar,planetStar,vehiclesStar] = await Promise.all ([
            fetch(`${API_URL}/people/`),
            fetch(`${API_URL}/planets/`),
            fetch(`${API_URL}/vehicles/`),
          ]);

          const peopleData = await peopleStar.json();
          const planetData = await planetStar.json();
          const vehiclesData = await vehiclesStar.json();

          setStore({
            people: peopleData.results,
            planets: planetData.results,
            vehicles: vehiclesData.results,
            loading: false
          });
        } catch(error) {
          console.error("Error Loading data", error);
        }
      },
      addFavorite: (item) => {
        const store = getStore();
        const exist = store.favorites.find(fav => fav.uid === item.uid);
        if(exist) return;
        setStore({favorites:[...store.favorites,item]});
      },
      removeFavorite: (uid) => {
        const store = getStore();
        setStore({favorites: store.favorites.filter(fav => fav.uid !== uid)});
      }
    }
  }
}