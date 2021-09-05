import "./singlePost.css"

export default function singlePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img className="singlePostImage" src="https://images2.minutemediacdn.com/image/fetch/w_850,h_560,c_fill,g_auto,f_auto/https%3A%2F%2Fthetopflight.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2018%2F08%2F1311795312-850x560.jpeg" alt="" />
                <h1 className="singlePostTitle">
                    Can Odonne Edouard answer Crystal Palace’s goalscoring issues?
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Marko Djordjevic</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">Crystal Palace are about to complete the signing of Celtic forward Odsonne Edouard, with the player having a medical on deadline day.

                    Palace have struggled in front of goal this season, only getting their first goals of the year in their fourth game, midfielder Conor Gallagher getting both.

                    Edouard has been wanting away from Celtic Park for some time now, and he could possibly be the signing to springboard this team in terms of hitting the back of the net.

                    Beginning his career in his home country of France, in the youth system of Paris St Germain, Edouard excelled in the youth leagues but failed to make a first team appearance, instead, spending much of his time in the B team.

                    Alternatively, the now 23-year-old was loaned out, first to Toulouse, where he struggled, getting one league goal in 16 appearances – and then onto to Celtic – where he started to come into his own, with nine goals in 22 league appearances.

                    Following his successful loan spell, Celtic shipped their then-record transfer fee to bring the young striker in permanently in 2018. Edouard would go on to have an extremely successful time in Scotland with 57 league goals in 94 appearances, also winning the ‘treble treble’, which is winning the Scottish Premiership, Scottish League Cup and Scottish Cup in consecutive years.
                </p>
            </div>
        </div>
    )
}
