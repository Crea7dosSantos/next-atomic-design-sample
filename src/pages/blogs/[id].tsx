import { getBlogs, getBlogBy } from '../../service/blogs'

export default function BlogDetail({ blog }) {
    return (
        <div>
            <h1>{blog.title}</h1>
            <div>
                <p>記事作成日時: {blog.created_at}</p>
                <p>{blog.body}</p>
            </div>
        </div>
    )
}

export const getStaticPaths = async () => {
    const res = await getBlogs()
    const repos = await res.json()

    const paths = repos.contents.map(repo => `/blogs/${repo.id}`)
    return { paths, fallback: false }
}

export const getStaticProps = async contents => {
    const id = contents.params.id

    const res = await getBlogBy(id)
    const blog = await res.json()

    return {
        props: {
            blog: blog
        }
    }
}

