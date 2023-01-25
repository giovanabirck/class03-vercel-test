

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

                <p style={{padding:"16px"}}>Employees</p>

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
                backgroundColor: "#EAEBF1",
                width: "85%",
            }}>
                
                Top Menu
            </div>
        </div>
        </>
    )
}