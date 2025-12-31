import styles from './Projects.module.scss'
import {projectsInfo} from "@/shared/projects/projects.ts";
import {CarouselComp} from "@/components/Main/Projects/component/Carousel.tsx";

export function Projects() {
    return (
        <div className={styles.projects}>
            <h1>My favorite projects</h1>
            <div className={styles.projects_catalog}>
                {projectsInfo.map((project) => (
                    <div className={styles.project}>
                        <div>
                            <CarouselComp {...project}/>
                        </div>
                        <p>{project.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}