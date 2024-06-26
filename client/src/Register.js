import { Button, TextField } from "@mui/material";
import { registerCall } from "./apiCalls";
import { useState } from "react";

export default function Register(props) {
    const [error, setError] = useState(false);
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    async function handleSubmit(event) {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        event.preventDefault();
        const response = await registerCall({ username, password});
        if (response === "success") {
            setError(false);
            props.setLogOrReg(true);
        } else {
            //Error message
            setError(true);
        }
    }

    return (
        <div className="authenticationDiv">
            <h3>Sign up!</h3>
            <form onSubmit={handleSubmit}>
                <TextField label="Username" type="text" required onChange={e => setUsername(e.target.value)}/>
                <TextField label="Password" type="password" required onChange={e => setPassword(e.target.value)}/>
                <Button type="submit">Submit</Button>
                {error ? <p>Error!</p>: null}
            </form>
        </div>
    );
}