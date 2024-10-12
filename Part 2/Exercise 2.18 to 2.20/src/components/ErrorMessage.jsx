const Error = ({errorMessage}) => {

    if(errorMessage === null) {
        return null
    }



    return(
        <div className={`notification ${errorMessage ? '' : 'hidden'}`}>
            <h3 className="error">
                {errorMessage}
            </h3>
        </div>
    )
}

export default Error