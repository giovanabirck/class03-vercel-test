import styles from './MenuPrograms.module.css'

export default function MenuPrograms() {
    return(
        <>
        <div className={styles.top__menu}>
        
            <h1 className={styles.h1}>Future<br></br>University</h1>

            <a className={styles.a} href="about">Employees</a>
            <p className={styles.top-menu-programs}>Programs</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>

            <input placeholder="search"></input>

            <h2>Log in</h2>
            <h2 className="top-menu-signup">Sign up</h2>

        </div>
        </>
    )
}