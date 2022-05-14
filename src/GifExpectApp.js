
import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GifGrid';

const GiftExpectApp = () => {

    const [categories, setCategories] = useState( ["One Piece"] );

    return (
        <>
            <h1>GifExpectApp</h1>
            <AddCategory setCategories={setCategories}/>
            <hr></hr>

            <ol>
                {
                    categories.map( category =>
                        <GiftGrid 
                            key={ category }
                            category={ category } 
                        />
                    )
                }
            </ol>

        </>
    );

}

export default GiftExpectApp;