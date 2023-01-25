

export default function Card({
    department  =   "none",
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
            borderRadius: "8px",
            boxShadow: "10px 5px 5px rgb(100, 100, 100, 0.2)"
        }}>
            {degree}
            {department}
        </div>
    )
}
