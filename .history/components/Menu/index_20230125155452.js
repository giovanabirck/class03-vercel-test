
export default function Menu() {
    return(
        <>
            <div>
                <div className="top-menu" style={{
                    backgroundColor: "white",
                    width: "200%",
                    display: "flex",
                    height: "160px",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}>

                <h1 style={{
                    fontFamily: "Impact",
                    fontSize: "40px",
                    color: "#5F7AF2",
                    padding: "40px",
                }}>Future
                <br></br>
                University
                </h1>

                <a className="a-employees" href="about" style={{padding:"16px"}}>Employees</a>

<br></br>

<p className="p-programs" style={{padding:"48px 16px 16px 16px", color: "#5F7AF2"}}>Programs</p>

<br></br>

<p style={{padding:"16px"}}>Lorem ipsum</p>

<br></br>

<p style={{padding:"16px"}}>Lorem ipsum</p>

<br></br>

<p style={{padding:"16px"}}>Lorem ipsum</p>


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