import React from 'react'
import Link from "next/link"
import CustomButton from '../components/button'

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
        </div>
    )
}
