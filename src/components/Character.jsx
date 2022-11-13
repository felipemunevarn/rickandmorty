import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { oneCharacter } from "../functions/functions";

const Character = () => {
    const params = useParams()
    const [character, setCharacter] = useState(null)

    useEffect(() => {
        oneCharacter(params.id, setCharacter)
    },[])
    return (
        <>
            {character !== null ? (
                <div>
                    <h2>Character with id {params.id}</h2>
                    <p>con el nombre {character.name}</p>
                    <img src={character.image} alt={`${character.name} image`} />
                </div>
            ) : ("No hay personaje")}
        </>
    )
}

export default Character;