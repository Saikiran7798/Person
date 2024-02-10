const PersonForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    name: <input value={props.newName}
                        onChange={props.handleInput} />
                </div>
                <div>
                    Phone Number: <input value={props.phoneNum}
                        onChange={props.handlePhone} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

export default PersonForm