import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Form from '../components/Form'
import { navigate } from '@reach/router'

const UpdatePet = props => {

    const [form, setForm] = useState({
        name: "",
        type: "",
        description: "",
        skillOne: "",
        skillTwo: "",
        skillThree: "",
    })

    const [error, setError] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${props._id}`)
            .then(res => {
                console.log(res, "RESPONSE IS HERE!")
                setForm(res.data.Pet)
            })
    }, [])

    const onChangeHandler = e => {
        setForm({
            ...form, [e.target.name]:e.target.value
        })
    }
    
    const onSubmitHandler = e => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/pet/update/${props._id}`, form)
            .then(res => {
                console.log("Form Posted!")
                navigate("/")
            })
            .catch(console.log("Form didn't post!"))
    }

    return(
        <>
        <h2 className="update-pet-name">Edit {form.name}'s Details</h2>
        <Form
        form={form}
        onChangeHandler={onChangeHandler}
        onSubmitHandler={onSubmitHandler}
        error={error}
        />
        </>
    )
}

export default UpdatePet