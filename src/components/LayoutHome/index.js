import NavbarHome from '../NavbarHome';
function LayoutHome (props){
    return(
        <div>
            <NavbarHome isHome={props.isHome}/>
            {props.children}
        </div>
    )
}
export default LayoutHome;