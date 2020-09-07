import React from 'react';
// import { Card, Button } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const News = (props) => {
    const {title, description, urlToImage} = props.article;
    const useStyles = makeStyles({
        root: {
          maxWidth: 345,
          outline: 'none',
        },
        media: {
          height: 140,
          outline: 'none',
        },
      });
      const classes = useStyles();
    return (
        <div>
            {/* <Card>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                {description}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card> */}

            <Card className={classes.root}>
            <CardActionArea style={{outline: 'none'}}>
                <CardMedia
                className={classes.media}
                image={urlToImage}
                title="Contemplative Reptile"
                
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {description}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button style={{outline: 'none'}} size="small" color="primary">
                Share
                </Button>
                <Button style={{outline: 'none'}} size="small" color="primary">
                Learn More
                </Button>
            </CardActions>
            </Card>
        </div>
    );
};

export default News;