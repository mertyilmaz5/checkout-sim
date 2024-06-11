import React from "react";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";

function CartSummary({ checked, totalPrice, sumTotalPrice, anotherFunction }) {
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
      <CardContent sx={{ color: "white", p: 2, display: "flex" }}>
        <Box sx={{ flexDirection: "column" }}>
          <Typography variant="body1">
            Seçili Ürünler -
            <Typography
              component="span"
              sx={{ display: "inline", ml: 1, fontWeight: "light" }}
            >
              {checked.length - 1} Adet
            </Typography>
          </Typography>
          <Typography
            variant="body1"
            sx={{ display: "block", fontWeight: "bold" }}
          >
            {sumTotalPrice()}
          </Typography>
        </Box>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "white",
            color: "black",
            "&:hover": {
              backgroundColor: "gray",
              color: "white",
            },
            borderRadius: "10px",
            marginTop: "auto",
            marginBottom: "auto",
            marginLeft: "auto",
            marginRight: "0",
            fontWeight: "bold",
          }}
          onClick={() => anotherFunction(checked)}
        >
          Alışverişi Tamamla
        </Button>
      </CardContent>
    </Card>
  );
}

export default CartSummary;
