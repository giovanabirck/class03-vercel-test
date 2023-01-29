import styles from './CardEmployees.module.css'

export default function CardEmployees({
    firstName   =   "none",
    lastName    =   "none",
    pronouns    =   "none",
    jobTitle    =   "none",
    shortBio    =   "none"
}) {
    
    return(
        <div className={styles.container}>
            <div className={styles.content__area}>
                <div className={styles.content__names}>

                    <div className={styles.content__names__child}>
                        {firstName}
                        {lastName}
                    </div>

                    <div className='' style={{
                        fontSize: "14px",
                        letterSpacing: "0"
                    }}>
                        {pronouns}
                    </div>
                </div>
                <strong>{jobTitle}</strong>
                <br></br>
                {shortBio}
            </div>
        </div>
    )
}
