import React from 'react'
import Link from "next/link"
import CustomButton from '../components/button'
import CustomCounter from '../components/Counter/Index'

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
            <div className="counter_container">
                <CustomCounter></CustomCounter>  
            </div>
        </div>
    )
}
