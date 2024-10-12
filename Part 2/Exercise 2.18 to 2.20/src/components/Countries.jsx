const Countries = ({ filteredNames }) => {
    return (
        <div>
            <ul>
                {filteredNames.map((x, index) =>
                    <li key={index}> {x.name.common} </li>
                )}
            </ul>
        </div>
    )
}

export default Countries