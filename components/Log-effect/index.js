import React, {useEffect, useState} from "react";
import { Card } from "../Card/index";


const People = () => {
    const [people, setPeople] = useState ([]);
    const [isLoading, setIsLoading] = useState(false);
    // const [isError, setIsError] = useState();

    console.log(people)
    
    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);

            const response = await fetch ("https://reqres.in/api/users")
            const json = await response.json();
            setPeople(json.data);

            setIsLoading(false);
        }
        fetchData();
    }, []);


    if (isLoading) {
        return <h2>Loading</h2>
    };

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
