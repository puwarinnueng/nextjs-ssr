
import Head from 'next/head'

// import cars from '../public/images/cars.jpg'



const defaultEndpoint = "https://carmana.com/api/v2/cars"

export async function getServerSideProps( {query} ) {
    const {id} = query;
    const res = await fetch(`${defaultEndpoint}/${id}`)
    const results = await res.json()
    return {
        props: {
            results
        }
    }
}

export default function Carsdetail({ results }) {    
    // console.log("data" , results)
    const {id , type , attributes } = results;
    return (
        <div className="container">
            <Head>
                <title>Create Next App</title>
            </Head>

            <main className="main">
                <h1 className="title">
                    Detail
                </h1>
                

               

                
            </main>

         
        </div>
    )
}



