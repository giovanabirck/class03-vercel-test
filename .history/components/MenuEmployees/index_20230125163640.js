
export default function MenuPrograms() {
    return(
        <>
        <div className="top-menu" style={{
            fontFamily: "Arial",
            fontWeight: "bold",
            color: "#A8A8A8",
            backgroundColor: "white",
            width: "100%",
            display: "flex",
            height: "20%",
            alignItems: "center",
            justifyContent: "space-between",
            }}>

            <h1 style={{
                fontFamily: "Impact",
                fontSize: "40px",
                color: "#5F7AF2",
                padding: "32px",
                }}>Future
            <br></br>
                University
            </h1>

            <p href="about" style={{padding:"16px", color: "#5F7AF2"}}>Employees</p>

            <a href="/pages" style={{padding:"16px"}}>Programs</a>

            <p style={{padding:"16px"}}>Lorem ipsum</p>

            <p style={{padding:"16px"}}>Lorem ipsum</p>

            <p style={{padding:"16px"}}>Lorem ipsum</p>


            <input placeholder="search" style={{
                fontFamily: "Arial",
                fontSize: "14px",
                color: "#5F7AF2",
                padding: "12px",
                border: "solid 2px #5F7AF2",
                borderRadius: "8px",
                width: "20%",
                margin: "24px"
                }}>
            </input>

            <h2 style={{
                        fontFamily: "Arial",
                        fontWeight: "bold",
                        fontSize: "16px",
                        color: "#5F7AF2",
                        padding: "0px"
                }}>Log in
            </h2>

            <h2 style={{
                        fontFamily: "Arial",
                        fontWeight: "bold",
                        fontSize: "16px",
                        padding: "0px 32px 0px 0px"
                }}>Sign up
            </h2>

            </div>
        </>
    )
}