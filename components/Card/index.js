import React from 'react'
import People from '../Log-effect';


const Card = () => {
    const [people] = useState ([People]);
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

export default Card;