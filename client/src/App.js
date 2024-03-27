import './App.css';
import { useState } from 'react';
import Login from './Login';
import Pages from "./Pages";


export default function App() {
    const [page, setPage] = useState(0);
    const [loginOverlay, setLoginOverlay] = useState(false);

    

    return (
        <div className="App">
            {loginOverlay ? <Login/> : null}
            <Pages page={page} setPage={setPage} loginOverlay={loginOverlay} setLoginOverlay={setLoginOverlay} />
        </div>
    );
}