import { useState, useEffect } from "react";
import operations from '../../APIService/service';
import { DebounceInput } from 'react-debounce-input';

import s from './fetchContactForm.module.scss'


const FetchContactForm = ({users,setContacts}) => {
    const [query, setQuery] = useState('');
    


    const handleChange = (e) => {
        const { value } = e.target;
        setQuery(value.trim())
    };

    useEffect(() => {
        if (query === '') { return }
        (async () => {const result = await operations.fetchContacts(query);
            result.contacts && setContacts(result.contacts);
        setQuery('')})()
}, [query,setContacts])

    return (
        <div className={s.container}>
            {users && <button className={s.btn} type="button" onClick={() => setContacts(null)}>B</button>}
            <DebounceInput
                type="text"
                minLength={2}
                debounceTimeout={500}
                onChange={handleChange}
                placeholder="Search contacts.Type name or email."
                className={s.input}
                value={query}/>
        </div>
    )
}

export default FetchContactForm;