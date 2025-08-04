import { Link } from "react-router-dom";

function inProgress() {
    return (
        <div>
            <h1>This page is currently being designed & Built!</h1>
            <p>Hope you come back soon!</p>
            <Link to="/">Go back to home</Link>
        </div>
    )
}

export default inProgress;