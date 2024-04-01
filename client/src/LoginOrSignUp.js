import { useEffect, useState } from "react";
import Register from "./Register";
import Login from "./Login";
import { Button } from "@mui/material";

export default function LoginOrSignUp() {
    const [logOrReg, setLogOrReg] = useState(true);

    useEffect(() => {
        if (logOrReg) {
            setLogOrReg(logOrReg);
        }
    }, [logOrReg])

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
                    <Register setLogOrReg={setLogOrReg}/>
                    <Button onClick={handleButton}>Login</Button>
                </>
            }
        </>
    )
}