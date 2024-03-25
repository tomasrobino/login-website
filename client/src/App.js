import Login from './Login';
import './App.css';
import { useState } from 'react';
import { Button } from '@mui/material';

export default function App() {
    const [token, setToken] = useState();
    const [loginOpened, setLoginOpened] = useState(false);
    function handleLoginOpen() {
        setLoginOpened(!loginOpened);
    }

    return (
        <div className="App">
            <Button onClick={handleLoginOpen}>Login</Button>
            {loginOpened ? <Login setToken={setToken}/>: null}
        </div>
    );
}