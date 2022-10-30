function Header(props){
    return(
        <header>
            <img src={props.logo} alt="ALAA TODO LOGO" className="header-logo"/>
        </header>
    );
}
function Footer(props){
    return(
        <footer className="row">
            <img src={props.ao} alt="A&O LOGO" className="footer-ao col-lg-4"/>
            <div className="col-lg-4 flex coder">
                <p>ALAA TODO &#169; 2022</p>
                <p>Powered By &#127912; <b>ALAA ELGHARABLY</b></p>
            </div>
            <img src={props.logo} alt="ALAA TODO LOGO" className="footer-logo col-lg-4"/>
        </footer>
    );
}
export {Header, Footer};
