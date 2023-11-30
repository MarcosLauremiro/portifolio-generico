
export function CardProject( { nameProject, description }) {
    return(
        <>
                <div className="card">
                    <div className="title-projects">
                        <h1>{ nameProject }</h1>
                        <p> { description } </p>
                        <span>Saiba mais</span>
                    </div>
                    <div className="icon-git">
                        <img src="../../../src/assets/git-icon.png" alt="" />
                    </div>
                </div>
        </>
    )
}