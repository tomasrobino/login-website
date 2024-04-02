import { Button } from '@mui/material';
import { checkToken } from './apiCalls';


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
                <>
                    <Button onClick={handleOverlay}>Login</Button>
                    <Button onClick={handleProfile}>Profile</Button>
                </>
            )
        case 1:
            return (
                <p>uilewfdbewfli</p>
            )
        default:
            break;
    }
}