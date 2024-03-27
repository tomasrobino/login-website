import { useState } from "react";
import Register from "./Register";
import Login from "./Login";
import { Button } from "@mui/material";

export default function LoginOrSignUp() {
    const [logOrReg, setLogOrReg] = useState(true);

    function handleButton() {
         setLogOrReg(!logOrReg);
    }

    return(
        <>
            {logOrReg ?
                <>
                    <Login/>
                    <Button onClick={handleButton}>Register</Button>
                </>
                : 
                <>
                    <Register/>
                    <Button onClick={handleButton}>Login</Button>
                </>
            }
        </>
    )
}