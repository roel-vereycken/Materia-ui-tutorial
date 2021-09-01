import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(5),
  },
  media: {
    height: "250px",
    [theme.breakpoints.down("sm")]: {
      heigth: "150px",
    },
  },
}));

function Post() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.pexels.com/photos/7319337/pexels-photo-7319337.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          title="My Post"
        ></CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5">
            My First Post
          </Typography>
          <Typography variant="body2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consectetur doloribus labore laudantium pariatur vitae cumque nam
            eum amet veritatis tempore. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Consectetur doloribus labore laudantium pariatur
            vitae cumque nam eum amet veritatis tempore.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default Post;
