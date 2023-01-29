import styles from './MenuEmployees.module.css'

export default function MenuPrograms() {
    return(
        <>
        <div className={styles.top__menu}>

            <h1 className={styles.h1}>Future<br></br>University</h1>
            <p className={styles.top__menu__employees}>Employees</p>
            <a href="/" className={styles.top__menu_programs}>Programs</a>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>


            <input placeholder="search"></input>

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