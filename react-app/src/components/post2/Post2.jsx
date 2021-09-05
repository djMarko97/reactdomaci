import "./post2.css"
import { Link } from "react-router-dom"

export default function Post2() {
    return (
        <div className="post">
            <img className="postImage" src="https://i.guim.co.uk/img/media/6d457d0d7a1d4fc3d4f7923b644a0124d6545b7b/0_19_2568_1540/master/2568.jpg?width=620&quality=85&auto=format&fit=max&s=eea0ed8b0e36bcb706ad2df84f96c01e" alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">History</span>
                    <span className="postCat">Teams</span>
                </div>
                <span className="postTitle"><Link to="/post2/:id" className="link">Ronaldo’s return to Manchester United puts pressure on Solskjær, says Rooney</Link>
                </span>
                <hr />
                <span className="postDate">7 days ago</span>
            </div>
            <p className="postDesc">
                Wayne Rooney has said Cristiano Ronaldo’s sensational return to Manchester United will increase the pressure on Ole Gunnar Solskjær to lead the club to major titles and warned his former teammates that they will have to work harder to accommodate the five-time Ballon d’Or winner.
            </p>
        </div>
    )
}
