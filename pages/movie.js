import React from 'react'

// export default function Movie(props) {
//     return (
//         <div>
//             <h1>Movie</h1>
//             <span>{JSON.stringify(props)}</span>
//         </div>
//     )
// }
export default function Movie( {movies}) {
    return (
        <div>
            <h1>Movie</h1>
            {/* <span>{JSON.stringify(movies)}</span> */}
            <ul>
                {movies.map((movie,index)=>{
                    return <li key={`${index}`}> {` ${movie}. ${index} `}</li>
                })}
            </ul>
        </div>
    )
}


export async function getStaticProps() {
   
    return {
        props: {
            movies:["wqewq" ,"qwewqe","rrr"],
        },
    }
}
