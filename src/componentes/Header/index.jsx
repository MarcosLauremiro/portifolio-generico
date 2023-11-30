import { Button } from "../Buttons";
import { MenuNav } from "../Nav";

export function HeaderTop () {
    return (
        <>
          <header className="header__controler">
            <div className="header__container">
              <div className="logo">
                <h1>Portifólio</h1>
              </div>
              <ul className="nav-bar">
                <MenuNav valor={'sobre'} id={'sobre'}/>
                <MenuNav valor={'Stack'} id={'stack'}/>
                <MenuNav valor={'Projetos'} id={'projects'}/>
              </ul>
              <div className="buttons">
                <Button valor={'Contato'}/>
              </div>
            </div>
          </header>
        </>
      )
}