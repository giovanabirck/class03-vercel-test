import styles from './CardPrograms.module.css';

export default function CardPrograms({
    degree="none",
}) {
    
    return(
        <div className={styles.container}>
            {degree}
            <br></br>
            <p className={} style={{
                fontFamily: "arial",
                color: "#484848",
                fontSize: "14px",
                padding: "16px 24px 0px 0px"
            }}      
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    )
}
