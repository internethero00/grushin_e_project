import {Hero} from "@/components/Main/Hero/Hero.tsx";
import styles from './Main.module.scss'
import {Stack} from "@/components/Main/Stack/Stack.tsx";

export function Main() {
    return (
        <main className={styles.main}>
            <Hero/>
            <Stack/>
            {/*<Projects/>*/}
        </main>
    )
}