import "./post1.css"
import { Link } from "react-router-dom"

export default function Post1() {
    return (
        <div className="post">
            <img className="postImage" src="https://pbs.twimg.com/media/E-LH3kfUcAAkG0A?format=jpg&name=small" alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">History</span>
                    <span className="postCat">Teams</span>
                </div>
                <span className="postTitle"><Link to="/post1/:id" className="link">Chelsea boost Premier League chances with the arrival of Saul Niguez</Link>
                </span>
                <hr />
                <span className="postDate">10 days ago</span>
            </div>
            <p className="postDesc">
            Chelsea concluded their summer transfers with the arrival of Saul Niguez on loan from Atletico Madrid. Niguez follows Romelu Lukaku to Stamford Bridge, strengthening Chelsea’s chances of winning the Premier League. The club have an option to buy the 26-year-old at the end of his loan deal.
            </p>
        </div>
    )
}
 