import React, { useState } from 'react'
import Navbar from '../../layouts/Navbar'
import { isAuthenticated } from '../auth'
import { createCategory } from './apiAdmin'

const CreateCategory = () => {
    const [category_name, setName] = useState('')
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    //destructure user and token from localStorage
    const { user, token } = isAuthenticated()

    const handleChange = (event) => {
        setError('')
        setName(event.target.value)
    }

    const clickSubmit = (event) => {
        event.preventDefault()
        setError('')
        setSuccess(false)

        //make request to api tp create new category
        createCategory(user._id, token, { category_name })
            .then(data => {
                if (data.error) {
                    setError({ error: data.error })
                }
                else {
                    setError('')
                    setName('')
                    setSuccess(true)
                }
            })
    }

    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showSuccess = () => (
        <div className="alert alert-success" style={{ display: success ? '' : 'none' }}>
            Category Added
        </div>
    );

    return (
        <>
            <Navbar />
            <div>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add Category</h5>
                        </div>
                        <div className="modal-body">
                            {showError()}
                            {showSuccess()}
                            <form>
                                <div className="form-group">
                                    <label className="col-form-label">Category Name</label>
                                    <input type="text" onChange={handleChange} className="form-control" placeholder=" " name="Category" required="" />
                                </div>

                                <div className="right-w3l">
                                    <button className="btn btn-warning" onClick={clickSubmit}>Add Category</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateCategory
