import {Link} from "react-router-dom";

export function NotFoundPage(){
    return(
        <div>
            <h1>Not found</h1>
            <Link to={'/'} className={"btn btn-primary position-fixed bottom-0 mb-5 w-25 translate-middle-x start-50"}>Retour</Link>
        </div>
    )
}