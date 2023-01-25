
export default function Card({
    degree  =   "display",
    font    =   "0",
    image   =   "icon/personTwo.png"
}) {
    
    return(
        <div style={{
            backgroundColor: "white",
            padding: 24px"

        }}>
            {degree}
        </div>
    )
}
