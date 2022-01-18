import React, {useEffect, useState} from "react";


const People = () => {
    const [people, setPeople] = useState ([]);
  
    useEffect(() => {
        async function fetchData() {
            const response = await fetch ("https://reqres.in/api/users")
            const json = await response.json();
            setPeople(json.data);
        }
        fetchData();
    }, []);

    return (
        <div>
            {people.map((person) => (
                <div key={person.id}>
                    <h2>{person.first_name}</h2>
                    <p>{person.email}</p>
                    <img src={person.avatar} alt={person.first_name}/>
                    </div>
            ))}
        </div>
    )
}
export default People;
