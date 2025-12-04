export const initialStore = () => {
    const savedFavorites = localStorage.getItem("sw_favorites");
    
    return {
        people: [],
        planets: [],
        vehicles: [], 
        favorites: savedFavorites ? JSON.parse(savedFavorites) : []
    };
};


export default function storeReducer(store, action = {}) {
    switch (action.type) {
        case 'set_people':
            return { ...store, people: action.payload };

        case 'set_planets':
            return { ...store, planets: action.payload };

        case 'set_vehicles': 
            return { ...store, vehicles: action.payload };

      
        case 'add_favorite': {
           
            const exists = store.favorites.find(fav => 
                fav.uid === action.payload.uid && fav.type === action.payload.type
            );
            
            if (exists) return store; 

            const newFavorites = [...store.favorites, action.payload];
            
            localStorage.setItem("sw_favorites", JSON.stringify(newFavorites));
            
            return { ...store, favorites: newFavorites };
        }

        case 'delete_favorite': {
            const newFavorites = store.favorites.filter(fav => 
                !(fav.uid === action.payload.uid && fav.type === action.payload.type)
            );
            
            localStorage.setItem("sw_favorites", JSON.stringify(newFavorites));

            return { ...store, favorites: newFavorites };
        }

        default:
            throw Error('Unknown action.');
    }
}