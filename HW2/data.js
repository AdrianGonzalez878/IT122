
const items = [
    { id: 1, name: "Car", model: "Model S", brand: "Tesla", year: 2020 },
    { id: 2, name: "Phone", model: "iPhone 12", brand: "Apple", year: 2020 },
    { id: 3, name: "Laptop", model: "XPS 13", brand: "Dell", year: 2021 },
    { id: 4, name: "Watch", model: "Galaxy Watch 3", brand: "Samsung", year: 2020 },
    { id: 5, name: "Camera", model: "EOS R5", brand: "Canon", year: 2021 }
  ];
  
  export const getAll = () => {
    return items;
  };
  
  export const getItem = (id) => {
    return items.find(item => item.id == id);
  };
  