import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'

import Navbar from "@/components/Layout/Navbar";
import Gallery from '@/components/Feed/Gallery/Gallery';

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title >RedBook</title>
                <meta name="description" content="redbook shopping" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar></Navbar>
            <main>
                {/* <ExploreColumns></ExploreColumns> */}
                {/* <Masonry></Masonry> */}
                {/* <ColumnsGallery /> */}
                <Gallery />
            </main>
            <footer className={styles.footer}>
            </footer>
        </div>
    )
}

export default Home
