import Login from './Login';
import './App.css';
import { useState } from 'react';

export default function App() {
    const [token, setToken] = useState();
    return (
        <div className="App">
            <Login setToken={setToken}/>
        </div>
    );
}