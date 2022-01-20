import React from 'react'
import Link from "next/link"
import CustomButton from '../components/button'
import CustomCounter from '../components/Counter/Index'
import People from '../components/Log-effect/index'
import Contact from '../components/Contact/contact'

export default function Home() {
    return (
        <div>
                   <CustomButton>
                My button
            </CustomButton>
            <br />
            
            <Link href="/about">
                <a>
                    About
                </a>
            </Link>
            <br />
            <People></People>
            <br/>
            <Contact></Contact>
            <div className="counter_container">
                <CustomCounter></CustomCounter>  
            </div>
        </div>
    )
}
