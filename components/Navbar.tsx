'use client';
import React from 'react'
import { useRouter } from 'next/navigation'

// Assets
import logo_src from '../assets/portfolio_logo.svg'

// Note: Transitioning everything into Type-script would simply require us to define an interface which 
// describes the props for each component and defining every variable according to a type. Similar to Swift.
export default function Navbar () {
    const router = useRouter()

    return (
        <div>
            <div className="bg-gray-600">
                <div onClick={() => {router.push('/')}}>
                    <img src={logo_src} />
                    <text>Edward Ng</text>
                </div>
                <div onClick={() => {router.push('/projects')}}>
                    <text>Projects</text>
                </div>
            </div>
        </div>
    )
}