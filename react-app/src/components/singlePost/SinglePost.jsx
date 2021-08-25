import "./singlePost.css"

export default function singlePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img className="singlePostImage" src="https://justonsidehome.files.wordpress.com/2020/08/fpldefenders.jpg?w=1024" alt="" />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet.
                    <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Marko Djordjevic</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur iusto a aperiam maxime consequatur totam eos iure ad minus, autem eaque commodi rem dicta sint! Tempora facere officiis magnam quasi!
                Culpa atque placeat sequi, hic officiis quibusdam nulla voluptates illum dolor, ducimus vitae, temporibus repudiandae! Non ex, incidunt quis magni ut alias excepturi ea soluta aspernatur? Corporis labore ex possimus.
                Eius deserunt porro beatae voluptate veniam, harum maiores illum non? Sed in adipisci quae dolorum libero natus nam amet nesciunt sint molestias exercitationem blanditiis nobis aliquid, doloribus fuga facilis omnis.</p>
            </div>
        </div>
    )
}
