import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img className="postImage" src="https://justonsidehome.files.wordpress.com/2020/08/fpldefenders.jpg?w=1024" alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">History</span>
                    <span className="postCat">Teams</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet consect
                </span>
                <hr />
                <span className="postDate">1 hour ego</span>
            </div>
            <p className="postDesc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti ea itaque nihil incidunt officiis harum, cumque, tenetur doloremque quam facere facilis asperiores repellendus totam voluptas inventore sed esse minima perspiciatis.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti ea itaque nihil incidunt officiis harum, cumque, tenetur doloremque quam facere facilis asperiores repellendus totam voluptas inventore sed esse minima perspiciatis.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti ea itaque nihil incidunt officiis harum, cumque, tenetur doloremque quam facere facilis asperiores repellendus totam voluptas inventore sed esse minima perspiciatis.
            </p>
        </div>
    )
}
 