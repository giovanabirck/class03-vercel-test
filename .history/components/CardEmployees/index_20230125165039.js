

export default function CardEmployees({
    degree      =   "none",
}) {
    
    return(
        <div style={{
            backgroundColor: "white",
            padding: "24px",
            fontFamily: "Impact",
            color: "#484848",
            fontSize: "18px",
            letterSpacing: "0.1em",
            display: "flex",
            flexDirection: "column",
            alignContent: "space-between",
            borderRadius: "8px",
            boxShadow: "2px 2px 10px rgb(100, 100, 100, 0.2)"
        }}>
            {first}
            <br></br>
            <p style={{
                fontFamily: "arial",
                color: "#484848",
                fontSize: "14px",
                padding: "16px 24px 0px 0px"
            }}      
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    )
}
