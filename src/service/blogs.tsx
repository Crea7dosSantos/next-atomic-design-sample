import fetch from 'isomorphic-unfetch'

const key = {
    headers: { 'X-API-KEY': process.env.API_KEY }
}

export const getBlogs = async () => (
    await fetch(
        'https://next-jamstack.microcms.io/api/v1/blogs',
        key
    )
)

export const getBlogBy = async (id) => (
    await fetch(
        `https://next-jamstack.microcms.io/api/v1/blogs/${id}`,
        key
    )
)