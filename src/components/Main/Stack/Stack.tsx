import styles from './Stack.module.scss'
import {Typewriter} from "react-simple-typewriter";

export function Stack() {
    return (
        <div className={styles.stack_main}>
            <h1>
                <Typewriter
                    words={["Let`s see my Tech Stack"]}
                    cursorStyle="|"
                    typeSpeed={70}
                />
            </h1>
            <div className={styles.backend}>
                <h2>Backend</h2>
                <div className={styles.backend_img}>
                    <img src={'/back-end/node.svg'} alt={'node.js'}/>
                    <img src={'/back-end/nest.svg'} alt={'nest.js'}/>
                    <img src={'/back-end/express.svg'} alt={'express.js'}/>
                </div>
            </div>
        </div>
    )
}