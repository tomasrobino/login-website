import { checkToken } from './apiCalls';
import Profile from './Profile';
import Main from "./Main";


export default function Pages(props) {
    function handleOverlay() {
        props.setLoginOverlay(!props.loginOverlay);
    }
    
    async function handleProfile() {
        let username = localStorage.getItem("user");
        let token = localStorage.getItem("token");
        let check =  await checkToken({ username, token });
        if (check === "success") {
            console.log("flsfbl")
            props.setPage(1);
        }
    }

    switch (props.page) {
        case 0:
            return (
                <Main />
            )
        case 1:
            return(
                <Profile/>
            )
        default:
            break;
    }
}