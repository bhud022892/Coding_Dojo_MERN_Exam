import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Form from '../components/Form'
import { navigate } from '@reach/router'

const AddPet = props => {

    const [form, setForm] = useState({
        name: "",
        type: "",
        description: "",
        skillOne: "",
        skillTwo: "",
        skillThree: "",
    })

    const [error, setError] = useState({})

    const onChangeHandler = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = e => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/pet/new', form)
            .then(res => {
                if(res.data.error){
                    setError(res.data.error.errors)
                } else {
                    navigate('/')
                }
            })
            .catch(console.log('Something went wrong when adding a new pet!'))
    }

    return(
        <div className="add-container">
            <h2>Know a pet who needs a home?</h2>
            <Form
                form={form}
                onChangeHandler={onChangeHandler}
                onSubmitHandler={onSubmitHandler}
                error={error}
            />
        </div>
    )
}

export default AddPet