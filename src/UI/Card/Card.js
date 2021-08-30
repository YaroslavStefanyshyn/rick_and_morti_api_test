import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import s from './Card.module.css'

const useStyles = makeStyles({
  root: {
    width: 300,
    height: 410,
    justifySelf: 'center',
  },
  media: {
    height: 250,
    width: 300,
  },
  content: {
    width: 250,
    height: 160
  }
});

export default function MediaCard({c}) {
  const cls = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card className={cls.root}>
      <CardActionArea onClick={handleClick} >
        <CardMedia
          className={cls.media}
          image={c.image}
          title={c.name}
        />
        <CardContent className={cls.content}>
          <Typography gutterBottom variant="h5" component="h2">
            {c.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Status: {c.status}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Species: {c.species}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Gender: {c.gender}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Popover 
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 120, left: 865 }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        >
        <Typography className={s.BigCard}>
          <img src={c.image} alt='' />
        </Typography>
        <Typography gutterBottom variant="h5" component="h2">
            {c.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Status: {c.status}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Species: {c.species}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Gender: {c.gender}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Type: {c.type}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Origin: {c.origin.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Location: {c.location.name}
        </Typography>
      </Popover>
    </Card>
  );
}