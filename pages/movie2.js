import React from 'react'

export default function Movie( {movies,randomData}) {
    return (
        <div>
            <h1>Movie</h1>
            <span>{randomData}</span>,
            {/* <span>{JSON.stringify(movies)}</span> */}

            <ul>
                {movies.map((movie,index)=>{
                    return <li key={`${index}`}> {` ${movie.gender}. ${index} ,${movie.gender}`}</li>
                })}
            </ul>
        </div>
    )
}


export async function getStaticProps() {
// export async function getServerSideProps() {

    // const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    // const posts = await res.json()
   
    const url = 'https://randomuser.me/api';
    const res = await fetch(url)
    const data = await res.json()

    return {
        props: {
            movies:data.results,
            randomData: Math.random().toString(),
        },
    }
}
