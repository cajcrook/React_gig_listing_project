import { useState } from "react";
import FavouriteButton from "./FavouriteButton";

const Favourite = () => {
    const [isFavourited, setIsFavourite] = useState(false);

    return (
        <div>
            <FavouriteButton 
                isFavourited={isFavourited} 
                setIsFavourite={setIsFavourite}
                    />
        </div>
     );
};

export default Favourite;