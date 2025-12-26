import styles from './Hero.module.scss'
import {Typewriter} from "react-simple-typewriter";

export function Hero() {
    return (
        <div className={styles.hero_main}>
            <h1 className="text-4xl font-bold">
                Hi! My name is{" "}
                <span className="text-red-500">
        <Typewriter
            words={["Egor!"]}
            cursor
            cursorStyle="|"
            typeSpeed={120}
        />
      </span>
            </h1>
            <p>
                I'm a full-stack developer.
                Create modern web applications<br/>
                with React and Node.js.
            </p>

        </div>
)
}