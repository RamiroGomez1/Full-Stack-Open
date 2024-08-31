const Persons = ({persons}) => <div><ul>{persons.map(x => <li>{x.name} {x.number}</li>)}</ul></div>

export default Persons