import Profile from './Profile';
import Main from "./Main";


export default function Pages(props) {
    switch (props.page) {
        case 0:
            return (
                <Main page={props.page} setPage={props.setPage} loginOverlay={props.loginOverlay} setLoginOverlay={props.setLoginOverlay}/>
            )
        case 1:
            return(
                <Profile />
            )
        default:
            break;
    }
}