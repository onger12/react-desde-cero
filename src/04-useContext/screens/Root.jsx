import React, { useReducer } from 'react'
import { Outlet } from 'react-router-dom'
import { ContactList } from '../components/ContactList';
import { contactsReducer } from '../reducers/contactsReducer'

export const Root = () => {

    const [ contacts, dispatch ] = useReducer( contactsReducer, [] );

    return (
        <div className="d-flex">
            <div className="col-3">
                <div className="d-flex" name="forms-container">
                    <form className="d-flex my-2 align-self-center" name="search-form">
                        <input className="form-control my-2" type="text" placeholder="Contacto..." />
                    </form>
                    <a className="btn btn-primary align-self-center ms-1" href="/createContact">Nuevo</a>
                </div>
                <ContactList />
            </div>
            <div className="col-9">
                {/* <Outlet/> */}
            </div>
        </div>
    )
}
