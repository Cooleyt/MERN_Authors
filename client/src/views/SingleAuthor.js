import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AuthorCard from '../components/AuthorCard';
import { useParams, Link } from 'react-router-dom';

const SingleAuthor = (props) =>{
    const [authors, setAuthors] = useState({});
    const { _id } = useParams();

    useEffect(()=>{
        console.log(_id);
        axios.get("http://localhost:8000/api/authors/" +_id)
        .then(res => setAuthors(res.data.results))
        .catch(err => console.log(err))
    }, [_id])

    return(
        <div><h2 id="columns-with-auto-width" class="mt-5">Single Product Page</h2>
            <AuthorCard data={authors} />
            <Link to={`/authors/update/${_id}`} className="btn btn-md btn-info">Edit</Link>
            <Link to={'/'}>Home Page</Link>
        </div>
    )
}

export default SingleAuthor;