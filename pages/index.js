import React from 'react';
import Layout from '../components/layout';
import Users from '../components/users';
import Head from 'next/head';
import fetch from 'isomorphic-fetch'

const Index = ({users}) => {
    return ( 
        <Layout>
            <Head>
                <title>Next.js Project - Home</title>
            </Head>
            <h1>Inicio</h1>
            <Users
                users={users}
            />
        </Layout>
     );
}

Index.getInitialProps = async (ctx) => {
    const res = await fetch(`https://reqres.in/api/users`);
    const data = await res.json();
    return {users: data}
}
 
export default Index;