import './header.css'

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">Premier League Football</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImage" src="http://newssportsworld.com/wp-content/uploads/2020/12/Football-Update-from-Premier-League.jpg" alt="" />
        </div>
    )
}
