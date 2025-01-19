import NewCollectionHeader from "./new-collection-header/new-collections-header";
import Cards from "./collection-cards/collection-cards";
import "./new-collection.css";
const NewCollection = () => {
  const cards_info = [
    {
      image:
        "https://tse3.mm.bing.net/th?id=OIP.X2TAUCncgM82ksVtCwszDwHaHa&pid=Api&P=0&h=180",
      title: "Women",
      subTitle: "Dress",
      price: 999 
    },
    {
      image:
        "https://tse4.mm.bing.net/th?id=OIP.eIGMo_NKH4P_x6R8F2FeuQHaJe&pid=Api&P=0&h=180",
      title: "Men",
      subTitle: "Denim Shirt",
      price: 899 
    },
    {
      image:
        "https://shopkyosho.com/wp-content/uploads/2019/03/Kids-Clothing.jpg",
      title: "Kids",
      subTitle: "Clothing",
      price: 999
    },
    {
      image:
        "https://tse1.mm.bing.net/th?id=OIP.eUmhpK3bicMMbLViu7nZJwHaGS&pid=Api&P=0&h=180",
      title: "Infants",
      subTitle: "Skin care",
      price: 789
    },
    {
      image:
        "https://thisladyblogs.com/wp-content/uploads/2021/12/flat-lay-with-women-accessories.jpg",
      title: "Women",
      subTitle: "Accessories",
      price: 999
    },
  ];
  return (
    <div className="new-collection">
      <NewCollectionHeader />
      <div className="list-cards">
        {cards_info.map((item, index) => {
          return (
            <Cards
              key={index}
              image={item.image}
              title={item.title}
              sub_title={item.subTitle}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewCollection;
