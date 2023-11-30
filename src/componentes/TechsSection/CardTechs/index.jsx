export function CardsTechs ({ nameTech, iconsTech }){
    return (
        <>
            <div className="card_techs">
                <img src= { iconsTech } alt= {nameTech} />
                <h2>{ nameTech }</h2>
            </div>
        </>
    )
}