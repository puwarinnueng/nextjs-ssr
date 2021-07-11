import React from 'react'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'
import cars from '../public/images/cars.jpg'
import Banner from '../public/images/banner.jpg'
import { useState , useEffect } from'react'


const defaultEndpoint = "https://carmana.com/api/v2/cars"

export async function getServerSideProps() {
    const res = await fetch(defaultEndpoint)
    const results = await res.json()
    return {
        props: {
            results
        }
    }
}

export default function Home({ results }) {
    // console.log("data" , results)
    const { info, data: defaultData = [] } = results;
    const [ data , updateData] = useState(defaultData);

    const [page , updatePage] = useState({
    ...info,
    current: defaultEndpoint
    });

    const { current } = page;

    useEffect(() => {
        if ( current === defaultEndpoint ) return;

        async function request(){
            const res = await fetch(current)
            const nextData = await res.json();

            updatePage({
                current,
                ...nextData.info
            });

            if( !nextData.info?.prev ){
                updateData(nextData.data);
                return;
            }

            updateData(prev => {
                return [
                    ...prev,
                    ...nextData.data
                ]
            });
        }

        request();
    },[current]);

    
    function handleLoadMore(){
        updatePage(prev =>{
            return{
                ...prev,
                current: page?.next
            }
        })
    }

    function handleOnSubmitSearch(e) {
        e.preventDefault();

        const { currentTarget = {} } = e;
        const fields = Array.from(currentTarget?.elements);
        const fieldQuery = fields.find(field => field.id === 'query');

        const value = fieldQuery.value || '';
        const endpoint = `https://carmana.com/api/v2/cars/?id=${value}`;

        updatePage({
            current: endpoint
        });
    }


    return (
        <div className="container">
            <Head>
                <title>Create Next App</title>
            </Head>

            <main className="main">
                {/* <h1 className="title">
                    Title
                </h1> */}
                <Image src={Banner} alt="" />
                <br></br>



                <form className="search" onSubmit={handleOnSubmitSearch}>
                    <input name="query" type="search" />
                    <button>Search</button>
                </form>

                <ul className="grid">

                    {data.map(datas => {
                        const { id, attributes  } = datas;

                        return (
                            <li key={id} className="card">
                                <a href="https://nextjs.org/docs" >
                                    <div className="img-resize"> 
                                        {/* <img src={mileage} alt=""></img> */}
                                      
                                        <Image src={cars} alt={`${attributes.name} thumb`} />
                                        {/* <img className="Post__image" src={`https://carmana-production.s3.amazonaws.com/user-content/car-photo/image/trhPh26bajZFYKQdxnij1XB3_regular.jpg`}/> */}
                                    </div>
                                    <h4>{id}</h4>
                                    <h4>{attributes.name}</h4>
                                </a>
                            </li>
                        )
                    })}

                </ul>

                <p>
                    <button onClick={handleLoadMore}>Load More</button>
                </p>
            </main>

            {/* <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </span>
                </a>
            </footer> */}
        </div>
    )
}



