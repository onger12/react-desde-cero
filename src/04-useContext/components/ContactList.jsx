

export const ContactList = ({ contacts = [] }) => {
    return (
        <ul className="list-group">
            {
                contacts.map( contact =>  (
                    <li>
                        <a 
                            className="list-group-item my-1" 
                            href='/contacts/1'
                        >
                                { contact.nombre } { contact.apellido} { contact.celular }
                        </a>
                    </li>
                ))
            }
            <li><a className="list-group-item my-1" href='/contacts/1'>Alisson</a></li>
        </ul>
    )
}
