import './App.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function App() {
    return (
        <div className="App">
            <Link to="/auth">
                <Button>Login</Button>
            </Link>
        </div>
    );
}