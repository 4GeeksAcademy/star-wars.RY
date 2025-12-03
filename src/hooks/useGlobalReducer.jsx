import { useContext, useReducer, createContext, useEffect } from "react"; // <--- Agregamos useEffect
import storeReducer, { initialStore } from "../store";

const StoreContext = createContext();

export function StoreProvider({ children }) {
    const [store, dispatch] = useReducer(storeReducer, initialStore());

    useEffect(() => {
        console.log("Iniciando carga de datos global...");
        
        // Cargar Personajes
        const loadPeople = async () => {
            try {
                const res = await fetch("https://www.swapi.tech/api/people/");
                const data = await res.json();
                dispatch({ type: 'set_people', payload: data.results });
            } catch (error) {
                console.error("Error cargando personajes:", error);
            }
        };

        // Cargar Planetas
        const loadPlanets = async () => {
            try {
                const res = await fetch("https://www.swapi.tech/api/planets/");
                const data = await res.json();
                dispatch({ type: 'set_planets', payload: data.results });
            } catch (error) {
                console.error("Error cargando planetas:", error);
            }
        };

        loadPeople();
        loadPlanets();
    }, []); 

    return (
        <StoreContext.Provider value={{ store, dispatch }}>
            {children}
        </StoreContext.Provider>
    );
}

export default function useGlobalReducer() {
    const { dispatch, store } = useContext(StoreContext);
    return { dispatch, store };
}