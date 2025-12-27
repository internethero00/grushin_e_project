import styles from './Stack.module.scss'
import {Typewriter} from "react-simple-typewriter";
import {filters} from "@/shared/stack/filter.ts";
import {useState} from "react";
import {techStack} from "@/shared/stack/techStack.ts";

export function Stack() {

    const [activeFilter, setActiveFilter] = useState<string>('all')
    const filterStack = () => {
        return activeFilter === 'all' ? techStack :
            techStack.filter(stack => stack.category === activeFilter)
    }
    return (
        <div className={styles.stack_main}>
            <h1>
                <Typewriter
                    words={["Let`s see my Tech Stack"]}
                    cursorStyle="|"
                    typeSpeed={70}
                />
            </h1>
            <div className={styles.header_stack}>
                {filters.map(filter => (
                    <div
                        onClick={() => setActiveFilter(filter.value)}
                        className={`${styles.stack_value} ${activeFilter === filter.value ? styles.active_stack_value : ''}`}
                        key={filter.value}>{filter.label}</div>
                ))}
            </div>
            <div className={styles.stack_content}>
                {filterStack().map(stack => (
                    <div className={styles.stack_icon}>
                        <img src={stack.icon} alt={stack.name}/>
                        <p>{stack.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}