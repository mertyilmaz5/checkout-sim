import "./App.css";
import cartData from "./data/cartData";
import MerchantCard from "./components/MerchantCard";
import CartSummary from "./components/CartSummary";
import { useState } from "react";
import { Box } from "@mui/material";

function App() {
  const [checked, setChecked] = useState([0]);
  const [newChecked, setNewChecked] = useState([]);
  const skuConsol = [];

  // Alışveriş Sepetindeki Ürünleri Seçmek İçin Kullanılan Fonksiyon
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const updatedChecked = [...checked];

    if (currentIndex === -1) {
      updatedChecked.push(value);
    } else {
      updatedChecked.splice(currentIndex, 1);
    }

    setChecked(updatedChecked);
    setNewChecked(updatedChecked);

    setTotalPrice(
      updatedChecked
        .slice(1)
        .map((value) => value.cartLine.lineTotal * value.cartLine.quantity)
    );
  };

  // Alışveriş Sepetindeki Ürünlerin sku Değerlerini Konsola Yazdırmak İçin Kullanılan Fonksiyon
  const anotherFunction = () => {
    newChecked.slice(1).map((value) => skuConsol.push(value.cartLine.sku));
    console.log(skuConsol);
  };

  // Alışveriş Sepetindeki Toplam Fiyatı Hesaplamak İçin Kullanılan Fonksiyon
  const [totalPrice, setTotalPrice] = useState([]);
  const sumTotalPrice = () => {
    let sum = 0;
    totalPrice.forEach((price) => {
      sum += price;
    });
    return (
      Intl.NumberFormat("tr-TR", {
        style: "decimal",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(sum) + " TL"
    );
  };

  // Alışveriş Sepetindeki Verileri Satıcı Adı ve Ürün Adı'na Göre Gruplamak İçin Kullanılan Fonksiyon
  const groupedData = {};
  cartData.forEach((item) => {
    const merchantName = item.merchantName || "Unknown";
    const productName = item.cartLine.name;

    if (!groupedData[merchantName]) {
      groupedData[merchantName] = {};
    }

    if (!groupedData[merchantName][productName]) {
      groupedData[merchantName][productName] = [];
    }

    groupedData[merchantName][productName].push(item);
  });

  return (
    <div className="container">
      <Box>
        {Object.keys(groupedData).map((merchantName) => (
          <MerchantCard
            key={merchantName}
            merchantName={merchantName}
            products={groupedData[merchantName]}
            checked={checked}
            handleToggle={handleToggle}
          />
        ))}
      </Box>
      <CartSummary
        checked={checked}
        totalPrice={totalPrice}
        sumTotalPrice={sumTotalPrice}
        anotherFunction={anotherFunction}
      />
    </div>
  );
}

export default App;
