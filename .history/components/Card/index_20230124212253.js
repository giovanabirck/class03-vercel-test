

export default function Card({
    department  =   "none",
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
            boxShadow: "2px 2px 10px rgb(100, 100, 100, 0.2)"
        }}>
            {degree}
        </div>
    )
}
