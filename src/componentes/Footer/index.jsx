export function Footer( {nameUser} ) {
    return (
        <>
            <footer className="footer">
                <div className="contacts_footer">
                    <h1>Contato</h1>
                    <div className="img_contatos">
                        <img src="../../../src/assets/github-icon.png" alt="" />
                        <img src="../../../src/assets/linkedin-icon.png" alt="" />
                        <img src="../../../src/assets/whatsapp-icon.png" alt="" />
                    </div>
                </div>
                <div className="direitos">
                    <p>todos os direitos reservados - <span>{ nameUser }</span></p>
                </div>
            </footer>
        </>
    )
}