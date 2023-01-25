
export default function Card({
    degree      =   'none',
    department  =   'display'
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
        }}>
            {degree}
            {department}
        </div>
    )
}
