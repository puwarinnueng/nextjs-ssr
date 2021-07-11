import React from 'react'
import Link from 'next/link'
import Navbar from '../Navbar/Navbar'

export default function Header() {
    return (
        <>
            <Navbar />
            <Link href="/">home </Link>
            <Link href="/CreatePost">CreatePost </Link>
            <Link href="/CreateRedux">CreateRedux </Link>
            <Link href="/movie">movie </Link>
            <Link href="/movie2">movie2 </Link><br></br><br></br>
            <Link href="/Cars">Cars </Link><br></br>
            <Link href="/test">Test </Link><br></br>
           
        </>
    )
}
