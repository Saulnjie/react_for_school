import React, { useEffect, useState } from 'react'
import Link from "next/link"
import CustomButton from '../components/Button'

export default function About() {
    const [message, setMessage] = useState("Not fetched yet")

    useEffect(() => {
        fetch("/api/hello")
            .then(res => res.json())
            .then(data => setMessage(data.name))
    }, [])
    
    return (
        <div>
               <CustomButton>
                My button
            </CustomButton>
            <br />
            
            <Link href="/">
                <a>
                    {message}
                </a>
            </Link>
        </div>
    )
}
