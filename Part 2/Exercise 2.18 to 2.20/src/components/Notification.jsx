const Notification = ({message, filteredNames}) => {

    if(message === null) {
        return null
    }



    return(
        <div className={`notification ${message ? '' : 'hidden'}`}>
            <h3 className="message">
                {message}
            </h3>
        </div>
    )
}

export default Notification