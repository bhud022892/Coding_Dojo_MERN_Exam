import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, navigate } from '@reach/router'

const ViewPet = props => {

    const [pet, setPet] = useState(null)
    const [update, setUpdate] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${props._id}`)
            .then(res => setPet(res.data.Pet))
    }, [])

    const removePet = _id => {
        axios.delete(`http://localhost:8000/api/pet/delete/${_id}`)
            .then(res => {
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    return(
        <>
        {
            pet ? <>
            <div className="pet-name-container">
                <h1>{pet.name}</h1>
            </div>
            <div className="individual-pet-info">
                <h4>Type</h4>
                <h2>{pet.type}</h2>
                <h4>Description</h4>
                <h2>{pet.description}</h2>
                <h4>Skills:</h4>
                <h2>
                    {
                        pet.skillOne ? <p className="pet-skill">{pet.skillOne}</p> : ""
                    }
                    {
                        pet.skillTwo ? <p className="pet-skill">{pet.skillTwo}</p> : ""
                    }
                    {
                        pet.skillThree ? <p className="pet-skill">{pet.skillThree}</p> : ""
                    }
                </h2>
            </div>
            </> : ""
        }
        <div className="pet-view-btn-container">
            <button className="btn btn-primary home-btn"><Link className="home-link" to="/">All Pets</Link></button>
            <button className="btn btn-danger adopt-btn" onClick={() => removePet(pet._id)} >Adopt Me!</button>
        </div>
        </>
    )
}

export default ViewPet