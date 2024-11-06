import { useState } from "react";

const Items = () => {
  const [itemList, setItems] = useState([
    "play cricket",
    "play football",
    "play tennis",
  ]);

  const [checkItems, setCheckedItems] = useState({});

  const handleCheck = (e) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [e.target.value]: e.target.checked,
    }));
  };

  const deleteItem = (item) => {
    if (checkItems[item]) {
      const _itemList = itemList.filter((_item) => _item !== item);
      setItems(_itemList);
      setCheckedItems(delete checkItems[item]);
    }
  };

  return (
    <>
      {itemList.map((item, index) => (
        <>
          <div key={index}>
            <input
              type="checkbox"
              name={index}
              value={item || ""}
              onChange={handleCheck}
              checked={checkItems[item]}
            />{" "}
            {item} <button onClick={() => deleteItem(item)}>Delete</button>
          </div>
          <br />
        </>
      ))}
    </>
  );
};

export default Items;
