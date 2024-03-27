import { Button } from '@mui/material';


export default function Pages(props) {
    function handleOverlay() {
        props.setLoginOverlay(!props.loginOverlay);
    }
    
    function handleProfile() {
        if (localStorage.getItem("token")) {
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