import React, { useState, useEffect } from 'react';
import "../api practice/api.css"
import axios from 'axios';

export default function Api() {

    const [Characters, setCharacters] = useState([]);
    const [Alive, setAlive] = useState([]);
    const CharactersData = () => {
        axios.get('https://hp-api.onrender.com/api/characters/')
            .then((response) => {
                const alivedata = response.data;
                setCharacters(response.data);
                setAlive(alivedata)
            })
    }
    console.log(Alive);
    useEffect(() => {
        CharactersData();
    }, [])
    const allive = () => {

    }

    return (


        <>
            <div className="alive" onClick={allive}>alive</div>
            <div className="api__container">

                {Characters.map((CharactersData) => {
                    return (

                        <div className='book__card'>
                            <img src={CharactersData.image} alt="image of book " className='book__img' />
                            <div className="book__title"> Name: {CharactersData.name}</div>
                            <div className="book__title">Actor: {CharactersData.actor}</div>
                            <div className="book__title">Ancestry: {CharactersData.ancestry}</div>
                            <div className="book__title">Date of Birth :{CharactersData.dateOfBith}</div>
                            <div className="book__title">Eye colour: {CharactersData.eyeColour}</div>
                            <div className="book__title">Gender: {CharactersData.gender}</div>
                            <div className="book__title">Hair Colour: {CharactersData.hairColour}</div>
                            <div className="book__title">House: {CharactersData.house}</div>
                            <div className="book__title"> Patrouns: {CharactersData.patrouns}</div>
                            <div className="book__title"> Species: {CharactersData.species}</div>
                            <div className="book__title"><br />Wand:<br /><br /> Wood: {CharactersData.wand.wood}<br /> core: {CharactersData.wand.core} <br /> Length: {CharactersData.wand.length}<br /></div>
                            <div className="book__title">Year of Birth: {CharactersData.yearOfBirth}</div>



                        </div>
                    );
                })
                }


            </div >


        </>



    )


}