const Hello = (props) => {
    console.log(props); // Logs the props object
  return (
    <div>
        <h1>{props.name}</h1>
        <h2>{props.sts} {props.city}</h2>
    </div>
  )
}

export default Hello