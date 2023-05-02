import Head from 'next/head'

import styles from '@/styles/Pokemon.module.css'

export default function Pokemon() {
    return (
        <>
            <Head>
                <title>Pokemon 1</title>
            </Head>
            <main className={styles.main}>
                Pokemon
            </main>
        </>
    )
}
