import "./sidebar.css"
import { Link } from "react-router-dom"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT PREMIER LEAGUE</span>
                <img src="https://fierofredo.files.wordpress.com/2019/08/pl-trophy.jpg" alt="" />

                <p>The Premier League, often referred to as the English Premier League or the EPL (legal name: The Football Association Premier League Limited), is the top level of the English football league system.
                    Contested by 20 clubs, it operates on a system of promotion and relegation with the English Football League (EFL). Seasons run from August to May with each team playing 38 matches (playing all 19 other teams both home and away).
                    Most games are played on Saturday and Sunday afternoons.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem"><Link to="/" className="link">Home</Link></li>
                    <li className="sidebarListItem"><Link to="/write" className="link">Write</Link></li>
                    <li className="sidebarListItem"><Link to="/contact" className="link">Contact</Link></li>
                    <li className="sidebarListItem"><Link to="/settings" className="link">Settings</Link></li>
                    
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW PREMIER LEAGUE</span>
                <div className="sidebarSocial">
                    <a href="https://wwww.facebook.com"><i className="topIcon fab fa-facebook-square"></i></a>
                    <a href="https://www.twitter.com"> <i className="topIcon fab fa-twitter-square"></i></a>
                    <a href="https://www.instagram.com"> <i className="topIcon fab fa-instagram-square"></i></a>
                </div>
            </div>
        </div>

    )
}
