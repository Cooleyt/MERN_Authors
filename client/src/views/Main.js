import React from "react";
import axios from 'axios';
import{ useEffect, useState } from 'react';
import AuthorCard from "../components/AuthorCard";

const Main = (props)=>{
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState();

    useEffect(()=> {
        axios.get("http://localhost:8000/api/authors")
        .then(res => {
        setAuthors(res.data.results);
    })
        .catch(err=>console.log(err))
    },[loaded])


    return (
        <div className="AuthorTable">
            {
                authors.map((item, i)=>{
                    return <AuthorCard key={i} data={item} setLoaded = {setLoaded} />
                })
            }
        </div>
        
        );
}



export default Main;