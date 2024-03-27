import './App.css';
import { useState } from 'react';
import Pages from "./Pages";
import LoginOrSignUp from './LoginOrSignUp';


export default function App() {
    const [page, setPage] = useState(0);
    const [loginOverlay, setLoginOverlay] = useState(false);

    

    return (
        <div className="App">
            {loginOverlay ? <LoginOrSignUp/> : null}
            <Pages page={page} setPage={setPage} loginOverlay={loginOverlay} setLoginOverlay={setLoginOverlay} />
        </div>
    );
}