import "./singlePost1.css"

export default function singlePost1() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img className="singlePostImage" src="https://pbs.twimg.com/media/E-LH3kfUcAAkG0A?format=jpg&name=small" alt="" />
                <h1 className="singlePostTitle">
                Chelsea boost Premier League chances with the arrival of Saul Niguez
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Vuk Djordjevic</b></span>
                    <span className="singlePostDate">10 days ago</span>
                </div>
                <p className="singlePostDesc">Chelsea concluded their summer transfers with the arrival of Saul Niguez on loan from Atletico Madrid. Niguez follows Romelu Lukaku to Stamford Bridge, strengthening Chelsea’s chances of winning the Premier League. The club have an option to buy the 26-year-old at the end of his loan deal.

                    Niguez gave his thoughts on arriving in southwest London, via the club’s official website:
                    I am very excited to start this new challenge with Chelsea. Blues fans, I am one of you now and I can’t wait to wear the shirt, start training and see all of you. See you soon!

                    Thomas Tuchel has recruited another winner to his talented squad. During his time at Atleti, Niguez won plenty of silverware, including the Europa League twice, the Copa del Rey, the Spanish and UEFA Super Cups; Atletico Madrid also won the Spanish La Liga last season, a campaign masterminded by Diego Simeone.</p>
            </div>
        </div>
    )
}
