
export default function Menu() {
    return(
        <>
        <div style={{
            display: "flex",
        }}>
            <div className="lateral-menu" style={{
                backgroundColor: 'white',
                width: "15%",
                innerHeight: "500px",
                padding: "40px 40px 350px 24px",
                fontFamily: "Arial",
                fontWeight: "bold",
                color: "#A8A8A8",
                }}>

                <h1 style={{
                    fontFamily: "Impact",
                    color: "#5F7AF2",
                    padding: "16px 16px 40px 16px",
                }}>Future
                    <br></br>
                    University
                </h1>

                <br></br>

                <link style={{padding:"16px"}}>Employees</link>

                <br></br>

                <p style={{padding:"16px", color: "#5F7AF2"}}>Programs</p>

                <br></br>

                <p style={{padding:"16px"}}>Lorem ipsum</p>

                <br></br>

                <p style={{padding:"16px"}}>Lorem ipsum</p>

                <br></br>

                <p style={{padding:"16px"}}>Lorem ipsum</p>
            </div>
            <div className="top-menu" style={{
                backgroundColor: "white",
                width: "85%",
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
        </div>
        </>
    )
}