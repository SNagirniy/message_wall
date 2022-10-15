import { useState, useEffect } from "react";
import operations from '../../APIService/service';
import {DebounceInput} from 'react-debounce-input';

const FetchContctForm = ({setContacts}) => {
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
        <div className="container">
            <DebounceInput
                type="text"
                minLength={2}
                debounceTimeout={500}
                onChange={handleChange}
                placeholder="Search contacts.Type name or email."
                className="input"
                value={query}/>
        </div>
    )
}

export default FetchContctForm;