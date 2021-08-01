import ItemList from "./../ItemList/ItemList";

const ItemListContainer = ({ catId }) => {
  let title;
  
  switch (catId) {
    case "accesories":
      title = "Accesorios";
      break;
    case "amplifiers":
      title = "Amplificadores";
      break;
    case "instruments":
      title = "Instrumentos";
      break;
    case "pedals":
      title = "Pedales";
      break;
    case "production":
      title = "Producción Musical";
      break;
    default:
      title = "Productos";
  }

  return (
    <>
      <div className="text-center mt-3">
        <h3>{title}</h3>
        <ItemList catId={catId} />
      </div>
    </>
  );
};

export default ItemListContainer;
