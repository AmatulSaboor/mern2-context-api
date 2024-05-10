import { usernameContext } from "../context/context"
import { useContext } from "react"
let Dashboard = () => {
    const {username, setUsername} = useContext(usernameContext)
    return(
        <>
            <h3>This is dashboard</h3>
            <p>You can update the username from dashboard component and it will be updated everywhere through context API </p>
            <label htmlFor="username">Update Username : </label>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <br /><hr />
        </>
    )
} 

export default Dashboard