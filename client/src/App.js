import Login from './Login';
import './App.css';
import { useState } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function App() {
    const [token, setToken] = useState();

    return (
        <div className="App">
            <Link to="/auth">
                <Button>Login</Button>
            </Link>
        </div>
    );
}