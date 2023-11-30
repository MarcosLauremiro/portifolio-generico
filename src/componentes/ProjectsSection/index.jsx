import{projects} from './../../data/projects'
import { CardProject } from './CardProject'

export function Projects () {
    return(
        <>
            <section className="projects">
                <h1>Projetos</h1>
                <div className="project_cards">
                    {
                        projects.map((project, index) => {
                           return <CardProject nameProject={project.name} description={project.descricao} key={index} />
                        })
                    }
                </div>
            </section>
        </>
    )
}