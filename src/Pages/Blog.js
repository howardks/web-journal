import { useParams } from "react-router-dom";

function Blog() {
    let { user } = useParams();
    return (
        <div>
            <p>
                Blog of {user}
            </p>
        </div>
    )
}

export default Blog;