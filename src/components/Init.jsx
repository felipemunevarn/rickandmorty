import React, { useEffect, useState } from "react";
import { allCharacters } from "../functions/functions";

const Init = () => {
    const [characters, setCharacters] = useState(null);

    useEffect(() => {
        allCharacters(setCharacters);
    }, [])

    return (
        <>
            {characters !== null ?
                (characters.map(char =>(
                    <div key={char.id}>
                        <a href={`/character/${char.id}`}>{char.name}</a>
                        {/* <img src={char.image} alt={char.name + "image"} /> */}
                    </div>
                ))) : 
                ("no hay pesonajes")
            }        
        </>
    )
}

export default Init;