import Pizza from "./Pizza";
import { pizzaData } from "../data/data";

function Menu() {
    const pizzas = pizzaData;
    // const pizzas = [];
    return (
        <div className="menu">
            <h2>Our Menu</h2>

            {pizzas.length > 0 ? (
                <ul className="pizzaContainer">
                    {pizzas.map((pizza) => (
                        <Pizza
                            name={pizza.name}
                            ingredients={pizza.ingredients}
                            price={pizza.price}
                            photoName={pizza.photoName}
                            soldOut={pizza.soldOut}
                        />
                    ))}
                </ul>
            ) : (
                <p className="empty">
                    We are still working on our menu . Please come back later .{" "}
                </p>
            )}
        </div>
    );
}

export default Menu;
