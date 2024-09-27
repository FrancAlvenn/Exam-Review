function Image(){

    const imageURL = "./ProfileImage.jpg";

    const handleClick = () => {
        console.log("OUCH!");
    }

    return(
        <>
        <img src={imageURL} alt="Image" onClick={handleClick}/>
        </>
    );
}

export default Image