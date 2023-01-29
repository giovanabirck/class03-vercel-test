import styles from 'MenuPrograms.module.css'

export default function MenuPrograms() {
    return(
        <>
        <div className="top-menu">
        
            <h1>Future<br></br>University</h1>

            <a href="about">Employees</a>
            <p className="top-menu-programs">Programs</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>

            <input placeholder="search"></input>

            <h2>Log in</h2>

            <h2 className='' style={{
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