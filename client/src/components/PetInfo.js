import React from 'react'
import { Link } from '@reach/router'

const PetInfo = props => {
    return(
        <>
        <table class="table">
            <td>{props.pet.name}</td>
            <td>{props.pet.type}</td>
            <td>
                <button className="btn btn-primary view-btn"><Link className="view-link" to={`/pet/${props.pet._id}`}>View</Link></button>
                <button className="btn btn-primary update-btn"><Link className="update-link" to={`/pet/update/${props.pet._id}`}>Edit</Link></button>
            </td>               
        </table>
        </>
    )
}

export default PetInfo