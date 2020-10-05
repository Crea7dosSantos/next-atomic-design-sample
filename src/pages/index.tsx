import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import fetch from 'isomorphic-unfetch'
import Layout, { siteTitle } from '../components/layout'
import utils from '../../styles/utils.module.scss'

export default function Home({ blogs }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utils.headingMd}>
        <p>[Your Self Introduction]</p>
        <div>
          <h2>最新の記事</h2>
          <div>
            {blogs.map(blog => (
              <React.Fragment key={blog.id}>
                <Link href="/blogs/[id]" as={`blogs/${blog.id}`}>
                  <a>
                    <h2>{blog.title}</h2>
                    <p>{blog.body}</p>
                  </a>
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY }
  }
  const res = await fetch(
    'https://next-jamstack.microcms.io/api/v1/blogs',
    key
  )
  const data = await res.json()

  return {
    props: {
      blogs: data.contents
    }
  }
}
