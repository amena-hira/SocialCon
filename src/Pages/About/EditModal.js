import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const EditModal = ({ userDetails }) => {
    const { name, email, university, address } = userDetails;
    const navigate = useNavigate();
    const {user} = useContext(AuthContext);
    const handleEditProfile = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const university = form.university.value;
        const address = form.address.value;
        const userDetails = {
            name,
            university,
            address,
            email: user.email
        }
        console.log(userDetails);
        fetch('http://localhost:5000/users', {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(userDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                window.location.reload();
            })
    }
    return (
        <div>
            <input type="checkbox" id="edit-modal" className="modal-toggle" />
            <div className="modal sm:modal-middle">
                <div className="modal-box relative">
                    <label htmlFor="edit-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleEditProfile}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' defaultValue={name} className="input input-bordered input-info" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' defaultValue={email} className="input input-bordered input-info" disabled />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">University</span>
                            </label>
                            <input type="text" placeholder="University" name='university' defaultValue={university ? university : ''} className="input input-bordered input-info" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <textarea className="textarea textarea-info" name='address' defaultValue={address ? address : ''} placeholder="Address"></textarea>
                        </div>
                        <button className='btn btn-outline border-info
                             mt-4 text-sky-500'>Submit</button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditModal;