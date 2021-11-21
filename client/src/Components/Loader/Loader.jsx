import React from "react"
import Loading from "./../../Assets/Images/loading.svg"
import styles from "./loader.module.css"

const Loader = () => {
	return <img src={Loading} className={styles.loader} alt='loading' />
}

export default Loader
