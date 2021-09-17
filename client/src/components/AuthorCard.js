import React from "react";
import axios from "axios";
// import Main from "../views/Main";
import {Link} from 'react-router-dom';


const AuthorCard = (props) => {
    const {name, quote, bookCount} = props.data;

    const onDeleteHandler = (_id) => {
        console.log(_id);

        axios.delete(`http://localhost:8000/api/authors/delete/${_id}`)
            .then(res => {
                
                console.log(res);
                props.setLoaded(prevState => ! prevState);
            })
            .catch(err => console.log(err));
    }


    return(
        <div className = "AuthorCard">
            <ul>
                <h4>
                <h3><Link to = {`/authors/${props.data._id}`}>{name}</Link></h3>
                <p><i>{quote}</i></p>
                <p>Books written:{bookCount}</p>
                </h4>
            </ul>
            <button className="delete" onClick = {() => onDeleteHandler(props.data._id)}>Delete</button>
        </div>
    )
}

export default AuthorCard;