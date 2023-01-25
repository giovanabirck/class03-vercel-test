
export default function Card() {
    return(
        <>
        <div style={{
            backgroundColor: "white",
            width: "50px",
            height: "50"
        }}>

        </div>
        </>
    )
}






/* export default function Card({
    degree  =   "none",
    color   =   "white",
    font    =   "0",
    image   =   "icon/personTwo.png"
}) {
    
    return(
        <div style={{backgroundColor: color, fontSize:font}}>
            {
                color === "red"     ?   <img src={'icon/person.png'} width='50'/> :
                color === "blue"    ?   <img src={'icon/personThree.png'} width='50'/> :
                                        <img src={image} width='50'/>
            }
            {degree}
        </div>
    )
}

*/
