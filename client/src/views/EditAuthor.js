import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";

const Edit = (props) => {
    const{_id} = useParams();
    const [error, setError] = useState({});
    const history = useHistory();

    const [form, setForm] = useState({
        name: "",
        quote: "",
        bookCount:""
    })

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        
        axios.put(`http://localhost:8000/api/authors/update/${_id}`, form)
        .then(res =>{
            console.log(res);
            console.log(res.data);

            if(res.data.result){
                history.push('/');
            }
            else{
                setError(res.data.error.errors);
                console.log(error);
                
            }
        })
        .catch(err => console.log(err))
    }
    

    useEffect(()=> {
        axios.get("http://localhost:8000/api/authors/" +_id)
        .then(res => setForm(res.data.results))
        .catch(err => console.log(err))
    },[_id])

    return (
        <div className="w-50 mx-auto p-3">
            <form onSubmit = {onSubmitHandler}>
                <h4>Edit</h4>
                <div className="form-group">
                    <input name="name" value={form.name} className="form-control" type="text" placeholder="author name" onChange={onChangeHandler} />
                    <span className = "alert-danger">{error.name && error.name.message}</span>
                </div>

                <div className="form-group">
                    <input name="quote" value={form.quote} className="form-control" type="text" placeholder="quote" onChange={onChangeHandler} />
                    <span className = "alert-danger">{error.quote && error.quote.message}</span>
                </div>

                <div className="form-group">
                    <input name="bookCount" value={form.bookCount} className="form-control" type="number" placeholder="book count" onChange={onChangeHandler} />
                    <span className = "alert-danger">{error.bookCount && error.bookCount.message}</span>
                </div>

                <input type="submit" className="btn btn-primary"/>
                <Link to={'/'}>Home Page</Link>
            </form>
        </div>
    )
}

export default Edit;