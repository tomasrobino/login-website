import './App.css';
import { Button } from '@mui/material';
import { useState } from 'react';
import Login from './Login';

export default function App() {
    const [page, setPage] = useState(0);
    const [loginOverlay, setLoginOverlay] = useState(false);

    function handleOverlay() {
        setLoginOverlay(!loginOverlay);
    }

    function Pages() {
        switch (page) {
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

    function handleProfile() {
        if (localStorage.getItem("token")) {
            console.log("flsfbl")
            setPage(1);
        }
    }

    return (
        <div className="App">
            {loginOverlay ? <Login/> : null}
            <Pages/>
        </div>
    );
}