import React, {useState} from "react";

const CustomCounter = () => {
const [count, setCount] = useState(0);

const HandleOnDecrementClick = () => {
    if(count > 0){setCount(count-1)}
    
}

return (
    <div>
    <p>This is the current count: {count}</p>
    <button onClick={() => setCount(count + 1)}>Increase +</button>
    <button onClick={() => HandleOnDecrementClick()}>Decrease +</button>
    </div>
);
};

export default CustomCounter;