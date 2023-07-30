import type { NextPage } from 'next'
import Head from 'next/head'


import Navbar from "@/components/Layout/Navbar";
import Mall from "@/components/Mall/Mall";

export default function demo() {
    return (
        <>
            <Head>
                <title >RedBook shop</title>
                <meta name="description" content="redbook shopping" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar></Navbar>
            <main>
                <Mall></Mall>
            </main>
        </>);
}