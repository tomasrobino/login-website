import { Button, TextField } from "@mui/material";
import { checkCredentials } from "./apiCalls";
import { useState } from "react";

export default function Login() {
    const [error, setError] = useState(false);

    async function handleSubmit(event) {
        let username = localStorage.getItem("username");
        let password = localStorage.getItem("password")
        event.preventDefault();
        const token = await checkCredentials({ username, password});
        if (token !== "notfound") {
            localStorage.setItem("user", username);
            localStorage.setItem("password", token);
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
                <TextField label="Username" type="text" required onChange={e => localStorage.setItem("username", e.target.value)}/>
                <TextField label="Password" type="password" required onChange={e => localStorage.setItem("password", e.target.value)}/>
                <Button type="submit">Submit</Button>
                {error ? <p>Error!</p>: null}
            </form>
        </div>
    );
}