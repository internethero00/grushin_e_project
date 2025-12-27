import {Hero} from "@/components/Main/Hero/Hero.tsx";
import styles from './Main.module.scss'
import {Stack} from "@/components/Main/Stack/Stack.tsx";
import {Projects} from "@/components/Main/Projects/Projects.tsx";

export function Main() {
    return (
        <main className={styles.main}>
            <Hero/>
            <Stack/>
            <Projects/>
        </main>
    )
}