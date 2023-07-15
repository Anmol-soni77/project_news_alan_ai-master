import React from 'react';
import { Grid, Grow, Typography } from '@material-ui/core';

import NewsCard from './NewsCard/NewsCard';
import useStyles from './styles.js';
// import BasicCard from './BasicCard/BasicCard'

const infoCards = [
  { color: '#bcbcff', title: 'Latest of News',info:'This will give you the recent news', text: 'what are the recent news' },
  { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
  { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
  { color: '#283593', title: 'News by Sources', info: 'The Times of India,The Hindu,CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
];

const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();

  if (!articles.length) {
    return (
      <Grow in>
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {infoCards.map((infoCard) => (
            <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard} >
              <div className={classes.card} style={{ backgroundColor: infoCard.color }} 
              data-aos="zoom-out-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="zoom-out-up">
                <Typography variant="h5" component="h5" style={{color:'black'}}> <b> {infoCard.title} </b></Typography>
                {infoCard.info ? <Typography variant="h6" component="h6"><strong>{infoCard.title.split(' ')[2]}</strong>: <br />{infoCard.info}</Typography> : null}
                <Typography variant="h6" component="h6" style={{color:'black'}}> Try saying: <br /> "<i>{infoCard.text}</i>" </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }

  return (
    <Grow in>
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
            <NewsCard activeArticle={activeArticle} i={i} article={article}/>
          </Grid>
        ))}
      </Grid>
    </Grow>
    
  );
};

export default NewsCards;
