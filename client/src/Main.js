import { Button } from '@mui/material';
import { checkToken } from './apiCalls';


export default function Main(props) {
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
            handleOverlay()
        }
    }

    return (
        <>
            <Button onClick={handleOverlay}>Login</Button>
            <Button onClick={handleProfile}>Profile</Button>
        </>
    )
}