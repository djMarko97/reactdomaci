import "./write.css"

export default function Write() {
    return (
        <div className="write">
            <img className="writeImage" src="https://justonsidehome.files.wordpress.com/2020/08/fpldefenders.jpg?w=1024" alt="" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}} />
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell your story now" type="text" className="writeInput writeText"></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}
