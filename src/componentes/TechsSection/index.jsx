import { technologies } from '../../data/technologies.js'
import { CardsTechs} from './CardTechs/index.jsx'

export function Techs () {
    return (
            <section className="techs_sect">
                <h1>Tecnologias</h1>
                <div className="techs_contaniner">
                    {
                        technologies.map((tech, index) => {
                            return <CardsTechs nameTech={tech.name} iconsTech={tech.img} key= {index} />
                        })
                    }
                </div>
            </section>
    )
}