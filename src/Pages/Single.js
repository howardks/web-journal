import { useParams } from "react-router-dom";

function Single(props) {
    let { user, id } = useParams();

    return (
        <div>
            <p>
                Single post {id} of {user}
            </p>
        </div>
    )
}

export default Single;