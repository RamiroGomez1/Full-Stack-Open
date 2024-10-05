const Persons = ({ persons, deletePersonData }) => {
    return (
        <div>
            <ul>
                {persons.map(x =>
                    <li key={x.id}>{x.name} {x.number}
                        <button onClick={() => deletePersonData(x.id)}>delete</button>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Persons