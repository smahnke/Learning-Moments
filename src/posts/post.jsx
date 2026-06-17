export const Post = ({post}) => {
    return (
        <div className="posts-container">
            <div>
                <article className="post-card">
                    <h3>Post {post.id}</h3>
                    <p className="post-meta"> {post.title} | {post.likes.length} likes</p>
                </article>
            </div>
        </div>
    )
}