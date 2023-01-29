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
            <div style={{
                
            }}>
                <div style={{
                    display: "flex",
                    alignItems: "flex-end",
                    paddingBottom: "8px"
                }}>
                    <div style={{
                        fontFamily: "Impact",
                        fontSize: "18px"
                    }}>
                        {firstName}
                        {lastName}
                    </div>

                    <div style={{
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
