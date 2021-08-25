import "./sidebar.css"

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
                    <li className="sidebarListItem">Competitions</li>
                    <li className="sidebarListItem">Teams</li>
                    <li className="sidebarListItem">Players</li>
                    <li className="sidebarListItem">Stadiums</li>
                    <li className="sidebarListItem">History</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW PREMIER LEAGUE</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>

    )
}
