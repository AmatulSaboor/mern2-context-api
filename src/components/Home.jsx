import { useContext } from "react";
import { usernameContext } from "../context/context";
let Home = () => {
    const {username} = useContext(usernameContext)
    return(
        <>
            <h3>This is home page </h3>
            Username : {username}
        </>
    )
}

export default Home