import React, { useState, useEffect } from 'react';
import "../api practice/api.css"
import { Users } from '../users';
import axios from 'axios';

export default function Api() {

    const [Characters, setCharacters] = useState([]);
    const [Data, setData] = useState(Users);

    const [Search, setSearch] = useState("");
    const CharactersData = () => {
        axios.get('https://hp-api.onrender.com/api/characters/')
            .then((response) => {

                setCharacters(response.data);

            })
    }
    const alldata = () => {
        setData(Users);
    }
    const male = () => {

        const sam = Users.filter((s) => s.gender.toLowerCase() == 'male')
        console.log(sam)
        setData(sam);
    }
    const female = () => {

        const sam = Users.filter((s) => s.gender.toLowerCase() == 'female')
        console.log(sam)
        setData(sam);
    }
    useEffect(() => {
        CharactersData();
    }, [])


    return (


        <>
            {/* <div className="alive" onClick={allive}>alive</div>
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
            */}

            <input type="text" placeholder='search...' onChange={(e) => setSearch(e.target.value.toLowerCase())} />
            <div onClick={alldata}>All</div>
            <div onClick={female}>Female</div>
            <div onClick={male}>Male</div>

            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around', alignItems: 'center' }}>
                <div style={{ fontSize: '1.4rem' }}> Name</div>

                <div style={{ fontSize: '1.4rem' }}>Email</div>
                <div style={{ fontSize: '1.4rem' }}> Gender</div>
                <div style={{ fontSize: '1.4rem' }}>Mobile</div>
            </div>

            {Data.filter((a) => a.first_name.toLowerCase().includes(Search)
                || a.last__name.toLowerCase().includes(Search)
                || a.email.toLowerCase().includes(Search))

                .map((user) => {
                    return (
                        <>

                            <div className='main__container'>

                                <div>{user.first_name} {user.last__name} </div>

                                <div> {user.email} </div>
                                <div> {user.gender} </div>
                                <div>{user.mobile}</div>

                            </div>
                        </>
                    )

                })}
        </>



    )


}