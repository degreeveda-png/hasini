import React from 'react'
import pizza from '../../public/image2/pizza.jpg'
import burger from '../../public/image3/burger.jpg'
import pasta from '../../public/image4/pasta.jpg'
import chicken from '../../public/image5/chicken.jpg'
import sandwich from '../../public/image6/sandwich.jpg'
import beverages from '../../public/image7/beverages.jpg'
function Menu() {
   return(
    <section id="menu" className="section">
        <h2>Our Menu</h2>
        <div className="menu-items">
            <div className="card">
                <h3>Pizza</h3>
                <img src={pizza} height="200px" width="200px"></img>
               <p>Cheesy delight with fresh toppings.</p>
            </div>
            <div className="card">
                <h3>Burger</h3>
                <img src={burger} height="200px" width="200px"></img>
                <p>Juicy grilled burger with fries.</p>
            </div>
            <div className="card">
                <h3>Pasta</h3>
                <img src={pasta} height="200px" width="200px"></img>
                <p>Classic Italian pasta in creamy sauce.</p>
            </div>
            </div>
            <div className="menu-items2">
            <div className="card">
                <h3>Grills & Rolls</h3>
                <img src={chicken} height="200px" width="200px"></img>
                <p>Grab a bite of these delicious chicken filled bread rolls.</p>
            </div>
            <div className="card">
                <h3>Sandwich</h3>
                <img src={sandwich} height="200px" width="200px"></img>
                <p>Sure, a ham sandwich isn't normally a thing to write home about. It's a fall-back lunch for most ..</p>
            </div>
             <div className="card">
                <h3>Beverages</h3>
                <img src={beverages} height="200px" width="200px"></img>
                <p>A drink a day makes shrinks away...</p>
            </div>
            </div>
    </section>
   )
}
 

export default Menu
