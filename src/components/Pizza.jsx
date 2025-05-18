import { pizzaData } from "../data/data";

function Pizza({ photoName, name, ingredients, price, soldOut }) {
    // if (soldOut) return null;
    return (
        <li className={`pizza ${soldOut ? "soldOut" : ""}`}>
            <img
                src={photoName}
                alt={name}
            />
            <div className="details">
                <h3 className="heading-tertiary">{name}</h3>
                <ul className="pizza__list">
                    {ingredients.map((ingredient) => (
                        <li className="pizza__item">
                            <svg className="pizza__icon">
                                <use xlinkHref="/SVGs/sprite.svg#icon-keyboard_arrow_right"></use>
                            </svg>
                            {ingredient}
                        </li>
                    ))}
                </ul>
                <span className="price">{soldOut ? "soldOut" : price}</span>
            </div>
        </li>
    );
}

export default Pizza;
