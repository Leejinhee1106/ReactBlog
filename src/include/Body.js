const Body = () => {
    return(
        <>
        <div className="row">
            <div className="leftcolumn">
                <div className="card">
                    <h2>Title Heading</h2>
                    <h5>Title Description...</h5>
                    <div className="fakeimg h200 img1"></div>
                    <p>Some text..</p>
                    <p>Sunt in culpa qui officia deserunt mollit anim id 
                        est laborum consectetur adipiscing elit, sed do 
                        eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco.</p>
                </div>

                <div className="card">
                    <h2>Title Heading</h2>
                    <h5>Title Description...</h5>
                    <div className="fakeimg h200 img2"></div>
                    <p>Some text..</p>
                    <p>Sunt in culpa qui officia deserunt mollit anim id 
                        est laborum consectetur adipiscing elit, sed do 
                        eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco.</p>
                </div>
            </div> {/*leftcolumn end*/}

            <div className="rightcolumn">
                <div className="card">
                    <h2>About me</h2>
                    <div className="fakeimg h100 img3"></div>
                    <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
                </div>

                <div className="card">
                    <h3>Popular Post</h3>
                    <div className="fakeimg h100 img4"></div><br/>
                    <div className="fakeimg h100 img5"></div><br/>
                    <div className="fakeimg h100 img6"></div>
                </div>

                <div className="card">
                    <h3>Follow Me</h3>
                    <p>Some text..</p>
                </div>
            </div> {/*rightcolumn end*/}
        </div>
        </>
    )
}
export default Body;