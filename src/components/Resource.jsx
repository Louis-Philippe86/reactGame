

export function Resource({type, value, limit}){
    return (
        <div className={"d-flex flex-column align-items-center p-3"}>
            <img className={"img-fluid w-25 mb-2"} src={type} alt={'image'}/>
            <div className={"bg-white px-3 py-1 rounded-3"}>
                <span >{value}</span>
                {
                    limit && (<span> / {limit}</span>)
                }
            </div>
        </div>
    )
}