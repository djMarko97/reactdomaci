import "./posts.css"
import Post from "../post/Post"
import Post1 from "../post1/Post1"
import Post2 from "../post2/Post2"

export default function Posts() {
    return (
        <div className="posts">
            <Post />
            <Post1 />
            <Post2 />
            
        </div>
    )
}
