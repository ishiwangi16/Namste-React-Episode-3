import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const {resId}= useParams();


  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
       MENU_API+resId
    );
    const json = await data.json();
    setResInfo(json.data);
  };

  if (!resInfo) return <Shimmer />;

  // ✅ Get restaurant info
  const restaurant = resInfo.cards?.find(
    (card) =>
      card.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
  )?.card?.card?.info;

  const { name, cuisines, costForTwoMessage, areaName } = restaurant;

  // ✅ Get menu sections (groupedCard > REGULAR)
  const menuSections = resInfo.cards?.find(
    (card) => card.groupedCard?.cardGroupMap?.REGULAR
  )?.groupedCard.cardGroupMap.REGULAR.cards;

  // ✅ Filter only item categories (like "Recommended", "Desserts")
  const categories = menuSections?.filter(
    (section) =>
      section.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines?.join(", ")} - {costForTwoMessage}</p>
      <h4>{areaName}</h4>

      <h2>Menu</h2>
      {categories.map((category, catIndex) => (
        <div key={`category-${catIndex}`} className="menu-category">
          <h3>{category.card.card.title}</h3>
          <ul>
            {category.card.card.itemCards?.map((itemCard, itemIndex) => {
              const item = itemCard.card.info;
              return (
                <li key={`${item.id}-${itemIndex}`}>
                  {item.name} - ₹{(item.price || item.defaultPrice) / 100}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
