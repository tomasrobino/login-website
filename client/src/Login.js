import { Button, TextField } from "@mui/material";
import { loginCall } from "./apiCalls";
import { useState } from "react";

export default function Login() {
    const [error, setError] = useState(false);
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    async function handleSubmit(event) {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        event.preventDefault();
        const token = await loginCall({ username, password});
        if (token !== "notfound") {
            localStorage.setItem("user", username);
            localStorage.setItem("token", token);
            setError(false);
        } else {
            //Error message
            setError(true);
        }
    }

    return (
        <div style={{ backgroundColor: "red", width: "fit-content", height: "fit-content" }}>
            <h3>Sign in!</h3>
            <form onSubmit={handleSubmit}>
                <TextField label="Username" type="text" required onChange={e => setUsername(e.target.value)}/>
                <TextField label="Password" type="password" required onChange={e => setPassword(e.target.value)}/>
                <Button type="submit">Submit</Button>
                {error ? <p>Error!</p>: null}
            </form>
        </div>
    );
}