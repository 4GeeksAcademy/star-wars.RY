import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer"; 
import { Card } from "../components/Card"; 
export const Home = () => {
    const { store, dispatch } = useGlobalReducer();


    const loadData = async () => {
        if (store.people.length === 0) { 
            const resPeople = await fetch("https://www.swapi.tech/api/people/");
            const dataPeople = await resPeople.json();
            dispatch({ type: 'set_people', payload: dataPeople.results });
        }

        if (store.planets.length === 0) {
            const resPlanets = await fetch("https://www.swapi.tech/api/planets/");
            const dataPlanets = await resPlanets.json();
            dispatch({ type: 'set_planets', payload: dataPlanets.results });
        }
    }

    useEffect(() => {
        loadData();
    }, []); 

    return (
        <div className="container mt-5">
            <h1 className="text-danger">Personajes</h1>
            <div className="d-flex overflow-auto mb-5">
                {store.people.map((person) => (
                    <Card key={person.uid} item={person} type="people" />
                ))}
            </div>

            <h1 className="text-danger">Planetas</h1>
            <div className="d-flex overflow-auto">
                {store.planets.map((planet) => (
                    <Card key={planet.uid} item={planet} type="planets" />
                ))}
            </div>
        </div>
    );
};