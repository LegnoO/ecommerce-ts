/** @format */

import React from "react";
import {
  Typography,
  CardMedia,
  CardContent,
  Container,
  Card,
  Grid,
} from "@mui/material";

const Product = () => {
  return (
    <>
      <Typography
        sx={{ color: "#3c3c3c" }}
        className="text-center mb-5 fw-light"
        variant="h4">
        Our Products
      </Typography>
      <Container className="section-break">
        <Grid container spacing={4}>
          <Grid item xs={3}>
            <Card className="shadow-none">
              <CardMedia
                component="img"
                image="https://minim-demo.myshopify.com/cdn/shop/products/11-shop_dc7f2c3c-6550-45b8-b910-fbb215e9c111.png?v=1552896618"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="body2">
                  OTTOMAN CHAIR
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  $250.00
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Product;
