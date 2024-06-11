import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemAvatar,
  Checkbox,
  Typography,
  IconButton,
  Box,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";

function ProductList({ products, checked, handleToggle }) {
  const [quantityChange, setquantityChange] = useState(
    products[0].cartLine.quantity
  );

  const handleAdd = (value) => {
    return () => {
      setquantityChange(quantityChange + 1);
      alert(value.cartLine.sku + " numaralı ürünün adedi 1 arttırıldı.");
    };
  };

  const handleRemove = (value) => {
    return () => {
      setquantityChange(quantityChange - 1);
      alert(value.cartLine.sku + " numaralı ürünün adedi 1 azaltıldı.");
    };
  };

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 450,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#1e1e1e",
      }}
    >
      {products.map((item) => {
        const labelId = `checkbox-list-label-${item}`;

        return (
          <ListItem
            key={item.cartLine.sku}
            secondaryAction={
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                  }}
                >
                  <IconButton sx={{ color: "white" }} onClick={handleAdd(item)}>
                    <AddIcon />
                  </IconButton>
                  <Typography sx={{ margin: "auto" }}>
                    {(item.cartLine.quantity = +quantityChange)}
                  </Typography>
                  <IconButton
                    sx={{ color: "white" }}
                    onClick={handleRemove(item)}
                  >
                    <RemoveIcon />
                  </IconButton>
                </Box>
                <IconButton
                  sx={{
                    height: "5%",
                    margin: "auto",
                    color: "gray",
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            }
          >
            <ListItemButton role={undefined} onClick={handleToggle(item)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(item) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                  sx={{ color: "white" }}
                />
              </ListItemIcon>
              <ListItemAvatar>
                <img
                  src={item.cartLine.pictureUrl}
                  width="50"
                  height="50"
                  style={{
                    border: "1px solid #000",
                    borderRadius: "50%",
                  }}
                  alt={item.cartLine.name}
                  loading="lazy"
                ></img>
              </ListItemAvatar>
              <ListItemText
                sx={{ p: 1 }}
                primary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      sx={{ display: "inline", fontWeight: "bold" }}
                      variant="body2"
                      color="white"
                    >
                      {item.trademarkName}
                    </Typography>
                    <Typography
                      component="span"
                      sx={{ display: "inline", ml: 1 }}
                      variant="subtitle2"
                      color="white"
                    >
                      {item.cartLine.name}
                    </Typography>
                  </React.Fragment>
                }
                secondary={
                  <Typography
                    component="span"
                    sx={{
                      display: "inline",
                      fontWeight: "bold",
                    }}
                    variant="subtitle1"
                    color="white"
                  >
                    {Intl.NumberFormat("tr-TR", {
                      style: "decimal",
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    }).format(item.cartLine.lineTotal * item.cartLine.quantity)}
                    <Typography
                      component="span"
                      sx={{
                        display: "inline",
                        fontWeight: "bold",
                        ml: 1,
                      }}
                    >
                      TL
                    </Typography>
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}

export default ProductList;
