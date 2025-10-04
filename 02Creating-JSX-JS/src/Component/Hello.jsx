let name = "JavaScript";
function Hello () {
    function greet () {
        return "Happy learning"
    }
    return (
        <div>
            <h1>Welcome to {name} {10+20}</h1>
            <h1>{greet ()}</h1>
        </div>
    )
}

export default Hello;