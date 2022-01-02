import { React, useState } from 'react';
import axios from "axios";

const Home=()=>{
    const [keyword, setKeyword] = useState("No, It's not working.");

    const getKeyword=async()=>{
        axios.get('http://localhost:8080/api/test')
            .then((response)=>{ setKeyword(response.data.message) })
            .catch() }

    return(
        <>
        <h2>Home : { keyword } </h2>
            <input type="button" value="call api" onClick={ getKeyword } />
        </>
    );
}
export default Home;