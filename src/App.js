import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import wordsToNumbers from 'words-to-numbers';
import alanBtn from '@alan-ai/alan-sdk-web';


import logo from './images/logo.png';
import { NewsCards, Modal } from './components';
import useStyles from './styles';

const App = () => {
  const [activeArticle, setActiveArticle] = useState(0);
  const [newsArticles, setNewsArticles] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    alanBtn({
      key: '5074c42b7fbec3c19d21460e1fc7afbd2e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: ({ command, articles, number }) => {
        if (command === 'newsHeadlines') {
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if (command === 'instructions') {
          setIsOpen(true);
        } else if (command === 'highlight') {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === 'open') {
          const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
          const article = articles[parsedNumber - 1];

          if (parsedNumber > articles.length) {
            alanBtn().playText('Please try that again...');
          } else if (article) {
            window.open(article.url, '_blank');
            alanBtn().playText('Opening...');
          } else {
            alanBtn().playText('Please try that again...');
          }
        }else if (command === 'read') {
          const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
          const article = articles[parsedNumber - 1];

          if (parsedNumber > articles.length) {
            alanBtn().playText('There is no article present you trying to read');
          } else if (article) {
            alanBtn().playText(`${article.title}`);
          } else {
            alanBtn().playText('Please try that again...');
          }
        }
      },
    });
  }, []);

  return (
    <div>
      <div className={classes.logoContainer}>
        { 
          newsArticles.length ? (
            <div className={classes.infoContainer}>
              <div 
              data-aos="slide-up"
              data-aos-offset="0"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="slide-up"
              className={classes.card}><Typography variant="h5" component="h2">Try saying: <br /><br />"Open article number 4"</Typography></div>
              <div
              data-aos="slide-down"
              data-aos-offset="130"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="slide-down"
              className={classes.card}><Typography variant="h5" component="h2">Try saying: <br /><br />"read article number 7"</Typography></div>
              <div
              data-aos="slide-up"
              data-aos-offset="130"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="slide-up"
              className={classes.card}><Typography variant="h5" component="h2">Try saying: <br /><br />"Go back"</Typography></div>
            </div>
          ) : null
        }
        <img src="./image.jpg" className={classes.alanLogo} alt="logo" />
        {!newsArticles.length ? (
        <div className={classes.voicebox} 
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="fade-left"
        >
          <Typography variant="h4" component="h2" style={{color:'white'}} >
            <b><i>Voice Controlled Site</i></b>
          </Typography>
        </div>
      ) : null}
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </div>
  );
};

export default App;
