const FavouriteButton =(props) => {

    const toggleFavourite = () => {
        props.setIsFavourite(!props.isFavourited);
        console.log(props.isFavourited)
    };
    
    return (
    <button onClick={toggleFavourite}> 
        {props.isFavourited ? 'Favourited' : 'Favourite '}
        </button> )
};

export default FavouriteButton;