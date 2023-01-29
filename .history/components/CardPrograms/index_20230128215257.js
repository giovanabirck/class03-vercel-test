import styles from './CardPrograms.module.css';

export default function CardPrograms({
    degree="none",
}) {
    
    return(
        <div className={styles.}>
            <div className={styles.container}>
                {degree}
                <br></br>
                <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    )
}
