import "./post.css"
import { Link } from "react-router-dom"

export default function Post() {
    return (
        <div className="post">
            <img className="postImage" src="https://images2.minutemediacdn.com/image/fetch/w_850,h_560,c_fill,g_auto,f_auto/https%3A%2F%2Fthetopflight.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2018%2F08%2F1311795312-850x560.jpeg" alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">History</span>
                    <span className="postCat">Teams</span>
                </div>
                <span className="postTitle"><Link to="/post/:postId" className="link">Can Odonne Edouard answer Crystal Palace’s goalscoring issues?</Link>
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Crystal Palace are about to complete the signing of Celtic forward Odsonne Edouard, with the player having a medical on deadline day.

                Palace have struggled in front of goal this season, only getting their first goals of the year in their fourth game, midfielder Conor Gallagher getting both.
            </p>
        </div>
    )
}
