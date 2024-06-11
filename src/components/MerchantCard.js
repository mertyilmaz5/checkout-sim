import React from "react";
import { Card, Typography, CardContent, Stack, Chip } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ProductList from "./ProductList";

function MerchantCard({ merchantName, products, checked, handleToggle }) {
  return (
    <Card
      variant="outlined"
      sx={{
        backgroundColor: "#1e1e1e",
        display: "flex",
        flexDirection: "column",
        gap: 1,
        margin: 1,
      }}
    >
      <Typography variant="body1" sx={{ p: 1, ml: 2, mt: 2, color: "white" }}>
        Satıcı:
        <span style={{ marginLeft: "5px", fontWeight: "bold" }}>
          {merchantName !== "Unknown" ? merchantName : "Bilinmeyen Satıcı"}
        </span>
      </Typography>
      <Stack direction="column" spacing={1} sx={{ mx: 3 }}>
        <Chip
          icon={<LocalShippingIcon />}
          label="Kargo Bedava "
          color="success"
          size="medium"
        />
      </Stack>
      {Object.keys(products).map((productName) => (
        <CardContent key={productName} sx={{ color: "white", p: 1 }}>
          <ProductList
            products={products[productName]}
            checked={checked}
            handleToggle={handleToggle}
          />
        </CardContent>
      ))}
    </Card>
  );
}

export default MerchantCard;
