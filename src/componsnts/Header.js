import React from 'react'
import './Header.css';

const Header = ({titel, calories, image, ingredients}) =>{
 
    return (
        <div className="recipeelem">
            
          
            <div className="text-center">
                <h2 className="heading pb-3"> Ce Que Nous Offrons
                </h2>
                <p>With Bk-recipe , you can search for any recipe easily. write the title or any ingredients of it and you will see the result
                </p>
                 <p> The Bk-recipe website is based on the database provided by edamam.com!</p>
            </div>
            
        </div>
    )


}

export default Header;