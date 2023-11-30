import { Button } from "../Buttons";
import baner from '../../assets/banner-img.png'

export function BannerSection({ userName }) {
    return(
        <>
            <section className="banner__container">
                <div className="left_side">
                    <h3>{userName}</h3>
                    <h1>Bem vindo ao meu portfolio</h1>
                    <p>Uma frase interessante sobre mim</p>
                    <div>
                        <Button valor={'Saiba mais'}/>
                    </div>
                </div>
                <div className="right_side">
                    <img src= {baner} alt="" />
                </div>
            </section>
        </>
    )
}