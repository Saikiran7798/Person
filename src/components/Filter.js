const Filter = (props) => {
    return (
        <ul>
            {props.persons
                .filter((element) => element.name.toLowerCase().includes(props.filtername.toLowerCase()))
                .map((element, index) => {
                    return <li key={index}>{element.name}  {element.phone}</li>
                })}
        </ul>
    )
}

export default Filter