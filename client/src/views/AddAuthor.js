import React, { useState } from 'react';
import axios from 'axios';
import {useHistory, Link} from 'react-router-dom';

const AddAuthor = (props) => {
    const history = useHistory();
    const [error, setError] = useState({});

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

    const onSubmitHandler = (event) => {
        event.preventDefault();

        axios.post("http://localhost:8000/api/authors/new", form)
        .then(res=>{
            console.log(res.data);

            if(res.data.results){
                history.push('/');
            }
            else{
                setError(res.data.err.errors);
            }
            
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="w-50 mx-auto p-3">
            <form onSubmit = {onSubmitHandler}>
                <h1>Edit</h1>
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

export default AddAuthor;