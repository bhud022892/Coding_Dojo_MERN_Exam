import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PetInfo from '../components/PetInfo'

const Main = props => {

    const [allPets, setAllPets] = useState(null)
    const [update, setUpdate] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/pet')
            .then(res => setAllPets(res.data.Pets))
    }, [update])

    return(
        <div className="table-container">
            <table className="table-head">
                <th scope="col">Name</th>
                <th scope="col">Type</th>
                <th scope="col">Actions</th>
            </table>
            {
                allPets ?
                allPets.sort((p, i) => p.type.localeCompare(i.type)).map((p, i) => {
                    return <PetInfo pet={p} />
                }) : ""
            }
        </div>
    )
}

export default Main