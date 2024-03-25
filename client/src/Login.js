import { Button, TextField } from "@mui/material";
import { checkCredentials } from "./apiCalls";

export default function Login() {

    async function handleSubmit(event) {
        event.preventDefault();
        const token = await checkCredentials({username, password});
        if (token !== "notfound") {
            localStorage.setItem("user", username);
            localStorage.setItem("password", token);
        } else {
            //Error message
        }
    }

    return (
        <div style={{ backgroundColor: "red", width: "fit-content", height: "fit-content" }}>
            <h3>Sign in!</h3>
            <form onSubmit={handleSubmit}>
                <TextField label="Username" type="text" required onChange={e => setUsername(e.target.value)}/>
                <TextField label="Password" type="password" required onChange={e => setPassword(e.target.value)}/>
                <Button type="submit">Submit</Button>
            </form>
        </div>
    );
}