/** @format */

import {
  Typography,
  Chip,
  Container,
  Grid,
  Fab,
  Stack,
  Box,
  Card,
  Avatar,
  CardMedia,
  CardContent,
  CardHeader,
  IconButton
} from '@mui/material';
import { Wrapper } from '../../components/CustomTagName';

const Blog = () => {
  return (
    <>
      <Container sx={{ padding: '100px 0' }}>
        <Grid container>
          <Grid item xs={4}>
            <Wrapper sx={{ width: '75%', margin: '0 auto' }}>
              <Typography sx={{ fontSize: 12, mb: 4 }} variant="body2" color="primary.light">
                LATEST NEWS
              </Typography>
              <Typography sx={{ fontSize: 48 }} className="fw-light" component="h3" color="primary">
                From Our Blog
              </Typography>
            </Wrapper>
          </Grid>
          <Grid item xs={8}>
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <Card variant="outlined">
                  <CardMedia
                    component="img"
                    height={'270px'}
                    image="https://minim-demo.myshopify.com/cdn/shop/articles/blog-v3.jpg?v=1550120730"
                    alt=""
                  />

                  <CardContent>
                    <Stack spacing={2}>
                      <Typography sx={{ fontSize: 12 }} className="text-uppercase" component="h6">
                        architect
                      </Typography>
                      <Typography sx={{ fontSize: 16 }} className="fw-large" component="h3">
                        House in Hamilton
                      </Typography>
                      <Typography sx={{ fontSize: 14 }} className="text-muted" component="p">
                        Lorem ipsum dolor sit amet, consect etur sapien adipiscing elit. Mauris vel
                        auctorol....
                      </Typography>
                      <Typography
                        sx={{ fontSize: 14, border: 'none', background: 'transparent' }}
                        component="button"
                        display="inline-flex"
                      >
                        Read More
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card variant="outlined">
                  <CardMedia
                    component="img"
                    height={'270px'}
                    image="https://minim-demo.myshopify.com/cdn/shop/articles/blog-v2.jpg?v=1550117048"
                    alt=""
                  />
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Stack className="trending" direction="column" spacing={4} justifyContent="center">
          <Typography className="text-center" component="h2">
            Trending on Instagram
          </Typography>
          <Grid container spacing={1.5}>
            <Grid item xs={3}>
              <Box>
                <CardMedia
                  component="img"
                  height={'285px'}
                  image="https://minim-demo.myshopify.com/cdn/shop/files/instagram1.jpg?v=1614310312"
                  alt=""
                />
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box>
                <CardMedia
                  component="img"
                  height={'285px'}
                  image="https://minim-demo.myshopify.com/cdn/shop/files/instagram2.jpg?v=1614310312"
                  alt=""
                />
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box>
                <CardMedia
                  component="img"
                  height={'285px'}
                  image="https://minim-demo.myshopify.com/cdn/shop/files/instagram3.jpg?v=1614310312"
                  alt=""
                />
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box>
                <CardMedia
                  component="img"
                  height={'285px'}
                  image="https://minim-demo.myshopify.com/cdn/shop/files/instagram4.jpg?v=1614310312"
                  alt=""
                />
              </Box>
            </Grid>
          </Grid>
          <Wrapper className="text-center">
            <Chip label="Follow @minim.store" variant="outlined" />
          </Wrapper>
        </Stack>
      </Container>
    
    </>
  );
};

export default Blog;
