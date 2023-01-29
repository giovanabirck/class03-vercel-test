import styles from './MenuEmployees.module.css'

export default function MenuPrograms() {
    return(
        <>
        <div className={styles.top__menu}>

            <h1 className={styles.h1}>Future<br></br>University</h1>

            <p className={styles.} style={{padding:"16px", color: "#5F7AF2"}}>Employees</p>
            <a href="/">Programs</a>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>


            <input placeholder="search" style={{
                fontFamily: "Arial",
                fontSize: "14px",
                color: "#5F7AF2",
                padding: "12px",
                border: "solid 2px #5F7AF2",
                borderRadius: "8px",
                width: "20%",
                margin: "24px"
                }}>
            </input>

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