import logo from './logo.svg';
import './App.css';
import { AppBar, Avatar, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Pagination from '@material-ui/lab/Pagination';


const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff"
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
    url('https://ripple.com/wp-content/uploads/2020/12/DerivativesInsights-1024x684.jpg')`,
    height: "500px",
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: '4rem',
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em",
    }

  },
  blogsContainer: {
    paddingTop: theme.spacing(3)
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3)
  },

  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240,
  },
  cardActions: {
    display: 'flex',
    margin: '0 10px',
    justifyContent: 'space-between',
  },
  author: {
    display: 'flex',

  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
  }

}));

function App() {
  const classes =  useStyles();
  return (
    <div className="App">
      <AppBar position='sticky' className={classes.appBar}>
        <Toolbar>
          <Typography variant='h6' color='primary'>
            Crypto News
          </Typography>
        </Toolbar>
      </AppBar>
      <Box>
        <Box className={classes.hero}>News Aggregator</Box>
      </Box>
      <Container maxWidth='lg' className={classes.blogsContainer}>
      <Typography variant='h4' className={classes.blogTitle}>
        Articles
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia 
                className={classes.media} 
                image="https://mk0globalbankin3xg02.kinstacdn.com/wp-content/uploads/2019/08/crypto.jpg" 
                title="How to read crypto charts"
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  China bans crypto...yet again.
                </Typography>
                <Typography gutterBottom variant='body2' color='textSecondary' component='p'>
                  China fud coming from all ends this year, as markets continue to travel.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
              <Box className={classes.author}>
                <Avatar 
                  src='https://pbs.twimg.com/profile_images/1133109643734130688/BwioAwkz_400x400.jpg'/>
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Rihanna
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      July 12th, 2021
                    </Typography>
                  </Box>  
              </Box>
              <Box>
                <BookmarkBorderIcon />
              
              </Box>
            </CardActions>

          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.card}>
            <CardActionArea>
              <CardMedia 
                className={classes.media} 
                image="https://i.guim.co.uk/img/media/11dc9ef75006f20cff02ffa52f58d3e2d62b2c55/0_0_3500_2100/master/3500.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=fe1797a2adf66d56aa683356a86234b1" 
                title="The 4 year crypto plan that you should be on."
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  Four year crypto strategy
                </Typography>
                <Typography gutterBottom variant='body2' color='textSecondary' component='p'>
                  The market cycles should be the promary focus of all bitcoin holders, as this drives the price to new all time highs.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
              <Box className={classes.author}>
                <Avatar 
                  src='https://cdn.mos.cms.futurecdn.net/WmiyYCKUovKCvVvAX7LcGG-768-80.jpg'/>
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Catherine Zeta Jones
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      July 12th, 2021
                    </Typography>
                  </Box>  
              </Box>
              <Box>
                <BookmarkBorderIcon />
              
              </Box>
            </CardActions>

          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.card}>
            <CardActionArea>
              <CardMedia 
                className={classes.media} 
                image="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/02/bitcoin.jpg" 
                title="Countries adopting bitcoin"
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  Countries adopting bitcoin
                </Typography>
                <Typography gutterBottom variant='body2' color='textSecondary' component='p'>
                  Big news in crypto, spanish speaking countries are now adopting crypto as a legal tender .
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
              <Box className={classes.author}>
                <Avatar 
                  src='https://www.looper.com/img/gallery/the-surprising-place-margot-robbie-worked-before-she-became-famous/l-intro-1618925553.jpg'/>
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Margo Robbie
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      July 12th, 2021
                    </Typography>
                  </Box>  
              </Box>
              <Box>
                <BookmarkBorderIcon />
              
              </Box>
            </CardActions>

          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.card}>
            <CardActionArea>
              <CardMedia 
                className={classes.media} 
                image="https://mediacloud.kiplinger.com/image/private/s--XHDd-00v--/v1610132542/Investing/2021-outlook-bitcoin-prices.jpg" 
                title="The 2021 outlook for bitcoin prices"
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  The 2021 outlook for Bitcoin
                </Typography>
                <Typography gutterBottom variant='body2' color='textSecondary' component='p'>
                  MArkets have been moving sidways for a while, but over all sentiment is still bullish.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
              <Box className={classes.author}>
                <Avatar 
                  src='https://i.insider.com/60d4a7ef5f52060018bbeddf?width=700'/>
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Salma Hayek
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      July 12th, 2021
                    </Typography>
                  </Box>  
              </Box>
              <Box>
                <BookmarkBorderIcon />
              
              </Box>
            </CardActions>

          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.card}>
            <CardActionArea>
              <CardMedia 
                className={classes.media} 
                image="https://www.investopedia.com/thmb/-4ZL6TDokj1HEhUJZv1xKAB8ndQ=/3484x0/filters:no_upscale():max_bytes(150000):strip_icc()/bitcoin-mining-software-5b73752fc9e77c0057beb28f.jpg" 
                title="How to buy crypto"
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  How to buy crypto and earn wealth 
                </Typography>
                <Typography gutterBottom variant='body2' color='textSecondary' component='p'>
                  Step by step guide on how to buy crypto currency.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
              <Box className={classes.author}>
                <Avatar 
                  src='https://www.the-sun.com/wp-content/uploads/sites/6/2021/06/NINTCHDBPICT000658191915.jpg'/>
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Trisha Hanna
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      July 12th, 2021
                    </Typography>
                  </Box>  
              </Box>
              <Box>
                <BookmarkBorderIcon />
              
              </Box>
            </CardActions>

          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.card}>
            <CardActionArea>
              <CardMedia 
                className={classes.media} 
                image="https://www2.deloitte.com/content/dam/Deloitte/nl/Images/promo_images/deloitte-nl-innovation-is-the-bitcoin-blockchain-resilient-to-attacks-from-quantum-computers-promo.jpg" 
                title="Quantum computers and the future of crypto"
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  Quantum Computers and crypto
                </Typography>
                <Typography gutterBottom variant='body2' color='textSecondary' component='p'>
                  How could the surge of quantum computing impact the crypto asset market.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
              <Box className={classes.author}>
                <Avatar 
                  src='https://upload.wikimedia.org/wikipedia/commons/1/17/Toni_Braxton_2%2C_2013.jpg'/>
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Toni Braxton
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      July 12th, 2021
                    </Typography>
                  </Box>  
              </Box>
              <Box>
                <BookmarkBorderIcon />
              
              </Box>
            </CardActions>

          </Card>
        </Grid>
      </Grid>
       <Box my={4} className={classes.paginationContainer}>
          <Pagination count={10} />

       </Box>
        </Container>
    </div>
  );
}

export default App;
