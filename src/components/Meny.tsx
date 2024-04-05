interface Props {
    admin: boolean,
    setPage: ((page: string) => void), 
}

function Meny(props: Props) {
    return (
        <div>
        <button onClick={() => props.setPage("start")}>Start</button> 
        <button onClick={() => props.setPage("about")}>About</button> 
        <button onClick={() => props.setPage("products")}>Products</button> 
        {props.admin ? <button onClick={() => props.setPage("admin")}>Admin</button> : null}
        </div>
    );
}

export default Meny;