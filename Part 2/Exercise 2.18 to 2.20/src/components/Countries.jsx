
const Countries = ({ filteredNames }) => {

    if (filteredNames.length > 10) return null

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