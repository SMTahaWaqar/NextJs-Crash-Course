import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'

const Article = ({ article }) => {
    // const router = useRouter();
    // const {id} = router.query

    return (
        <>
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <br />
            <Link href="/">Go Back</Link>
        </>
    )
}

// Each time we visit the page this is called
// export const getServerSideProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//     const article = await res.json();

//     return {
//         props: {
//             article
//         }
//     }
// }

// But we need to use this with getStaticPaths for dynamic Static Site Generated pages
export const getStaticProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const article = await res.json();

    return {
        props: {
            article
        }
    }
}

export const getStaticPaths = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const articles = await res.json();

    const ids = articles.map(article => article.id);
    const paths = ids.map(id => ({params: {id: id.toString()}}))

    return {
        paths,
        fallback: false
    }
}

export default Article;