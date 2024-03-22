import { Button, FormControl, TextField } from "@mui/material";
import { useState } from "react";
import { checkCredentials } from "./apiCalls";

export default function Login() {
    const [token, setToken] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    async function handleSubmit(event) {
        event.preventDefault()
        setToken(await checkCredentials({username, password}))
        
    }

    return (
        <div>
            <h3>Sign in!</h3>
            <form onSubmit={handleSubmit}>
                <TextField label="Username" type="text" required onChange={e => setUsername(e.target.value)}/>
                <TextField label="Password" type="password" required onChange={e => setPassword(e.target.value)}/>
                <Button type="submit">Submit</Button>
            </form>
        </div>
    );
}