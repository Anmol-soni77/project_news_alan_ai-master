import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {
    minWidth: 250,
    minHeight: 300,
    // backgroundColor: 'blue'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function BasicCard({Cardinfo}) {
  const classes = useStyles();

  return (
    <Card className={classes.root} style={{ backgroundColor: Cardinfo.color }}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {Cardinfo.title}
          <br /> 
          <br /> 
        </Typography>
        <Typography variant="h5" component="p">
          {Cardinfo.info}
          <br />
        </Typography>
        <Typography variant="h6" component="h6">
          Try saying: <br /> <i>{Cardinfo.text}</i>
        </Typography>
      </CardContent>
    </Card>
  );
}
