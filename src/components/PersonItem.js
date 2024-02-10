const PersonItem = ({ person, deleteRecord }) => {
    return (
        <div>
            <li style={{ display: "inline" }}>{person.name}  {person.phone}</li>
            <button onClick={() => deleteRecord(person.id)}>Delete</button>
        </div>
    )

}
export default PersonItem