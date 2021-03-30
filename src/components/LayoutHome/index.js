import NavbarHome from '../NavbarHome';
import BackToTop from '../../components/BackToTop';
function LayoutHome (props){
    return(
        <div>
            <NavbarHome isHome={props.isHome}/>
            {props.children}
            <BackToTop/>
        </div>
    )
}
export default LayoutHome;