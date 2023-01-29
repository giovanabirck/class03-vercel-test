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

            <input className={styles.input} placeholder="search"></input>

            <h2 className={styles.h2}>Log in</h2>
            <h2 className={styles.top__menu__signup}>Sign up</h2>

            </div>
        </>
    )
}