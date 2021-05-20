import { PromiseProvider } from 'mongoose'
import React, { useState } from 'react'
import {Link} from '@reach/router'

const Form = props => {
    console.log(props, "******************************")
    return(
            <>
            <form className="form-container" onSubmit={props.onSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="name">Pet Name</label>
                    <input type="text" name="name" className="form-control" onChange={props.onChangeHandler} value={props.form.name} placeholder={props.form.name < 1 ? "Pet name is required!" : ""} />
                    {
                        props.error.name ? <span className="text-danger">{props.error.name.message}</span> : ""
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="type">Pet Type</label>
                    <input type="text" name="type" className="form-control" onChange={props.onChangeHandler} value={props.form.type} placeholder={props.form.type < 1 ? "Pet type is required!" : ""} />
                    {
                        props.error.type ? <span className="text-danger">{props.error.type.message}</span> : ""
                    }
                </div>

                <div className="form-group">
                    <label htmlFor="description">Pet Description</label>
                    <textarea type="text" name="description" className="form-control" onChange={props.onChangeHandler} value={props.form.description} placeholder={props.form.description < 1 ? "Pet description is required!" : ""} />
                    {
                        props.error.description ? <span className="text-danger">{props.error.description.message}</span> : ""
                    }
                </div> 
                <div className="form-group">
                    <label htmlFor="skillOne">First Skill (Optional)</label>
                    <textarea type="text" name="skillOne" className="form-control" onChange={props.onChangeHandler} value={props.form.skillOne} />
                </div>
                <div className="form-group">
                    <label htmlFor="skillTwo">Second Skill (Optional)</label>
                    <textarea type="text" name="skillTwo" className="form-control" onChange={props.onChangeHandler} value={props.form.skillTwo} />
                </div>
                <div className="form-group">
                    <label htmlFor="skillThree">Third Skill (Optional)</label>
                    <textarea type="text" name="skillThree" className="form-control" onChange={props.onChangeHandler} value={props.form.skillThree} />
                </div>   
                <div className="form-group form-btn-container">                 
                <input type="submit" value="Submit" className="btn btn-primary submit-btn"/>
                <button className="btn btn-primary home-btn"><Link className="home-link" to="/">All Pets</Link></button>
                </div>   
            </form>
        </>
    )
}

export default Form