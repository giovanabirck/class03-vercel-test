
export default function Card({
    degree  =   "display",
    color   =   "white",
    font    =   "0",
    image   =   "icon/personTwo.png"
}) {
    
    return(
        <div style={{
            fontSize:font}}>
            {degree}
        </div>
    )
}
