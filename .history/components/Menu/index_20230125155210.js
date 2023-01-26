
export default function Menu() {
    return(
        <>
            <div className="lateral-menu" style={{
                backgroundColor: 'white',
                width: "20%",
                innerHeight: "500px",
                padding: "40px 40px 350px 24px",
                fontFamily: "Arial",
                fontWeight: "bold",
                color: "#A8A8A8",
                }}>

                <br></br>

                <a className="a-employees" href="about" style={{padding:"16px"}}>Employees</a>

                <br></br>

                <p className="p-programs" style={{padding:"48px 16px 16px 16px", color: "#5F7AF2"}}>Programs</p>

                <br></br>

                <p style={{padding:"16px"}}>Lorem ipsum</p>

                <br></br>

                <p style={{padding:"16px"}}>Lorem ipsum</p>

                <br></br>

                <p style={{padding:"16px"}}>Lorem ipsum</p>
            </div>
            <div>
                <div className="top-menu" style={{
                    backgroundColor: "white",
                    width: "200%",
                    display: "flex",
                    height: "96px",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}>
                    <input placeholder="search" style={{
                        fontFamily: "Arial",
                        fontSize: "14px",
                        color: "#5F7AF2",
                        padding: "16px",
                        border: "solid 2px #5F7AF2",
                        borderRadius: "8px",
                        width: "400px",
                        margin: "24px"
                    }}>
                    </input>
                    <h2 style={{
                        fontFamily: "Arial",
                        fontWeight: "bold",
                        fontSize: "16px",
                        color: "#5F7AF2",
                        padding: "16px 40px 16px 16px"
                        }}>Profile Name</h2>
                </div>
                <div id="main-div" style={{
                    backgroundColor: "#EAEBF1",
                    width: "200%",
                    height: "89%"
                }}>
                </div>
            </div>
        </>
    )
}