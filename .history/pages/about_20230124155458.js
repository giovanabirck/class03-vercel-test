
export default function About() {
    return(
        {
            information information.map((info, index) => {
              if(info.department.toLowerCase() === "business") {
                return(
                  <div key={index}>
              
                    <Card key={index} degree={info.degree} color="red" font="10px"/>
                  </div>
                )
              }
            })
          }
    )
}
