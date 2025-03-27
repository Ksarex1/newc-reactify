import styles from "./styles.module.css"
export default function Search({keywords, setKeywords}) {
    return (    
        <div className={styles.search}>
            <input type="text" onChange={(e)=> setKeywords(e.target.value)} value={keywords} className={styles.input} placeholder="Javascript"/>
        </div>
    )
}
