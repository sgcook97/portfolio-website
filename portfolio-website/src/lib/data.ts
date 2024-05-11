import React from 'react'
import samnrollImg from '/public/samnroll.png'
import blackjackImg from '/public/blackjack.png'
import movieexplorerImg from '/public/movie-explorer.png'

export const projects = [
    {
      title : "SamnRoll",
      description : "A full-stack web-app that takes \
      advantage of a hybrid recommender \
      system I developed to generate anime \
      recommendations to the user.",
      fullInfo : ["The SamnRoll web app seamlessly \
      integrates a powerful Flask API backend with a dynamic \
      Next.js client frontend, offering users a comprehensive \
      platform for discovering their next favorite anime. \
      At its core, the Flask API backend orchestrates the \
      intricate recommendation system, drawing on both \
      content-based and collaborative filtering algorithms \
      to tailor suggestions to each user's unique preferences. \
      Leveraging a PostgreSQL database hosted on AWS RDS, \
      it efficiently stores and retrieves anime details, \
      user ratings, and authentication data, \
      ensuring a secure and reliable user experience. \
      Additionally, the backend integrates with the \
      MyAnimeList API, enriching the user experience \
      with anime information and imagery.",
      "On the frontend, the Next.js client, crafted \
      with TypeScript, provides an intuitive interface \
      for users to interact with the recommendation system. \
      Upon registration, users curate their favorite anime \
      selections, empowering the backend to generate \
      personalized recommendations. Upon login, users \
      are greeted with a vibrant home screen showcasing \
      tailored suggestions alongside top-rated anime titles. \
      With features like anime search, detailed viewing, and \
      rating functionalities, users can actively engage with \
      the platform to refine their recommendations further."],
      tags : ['Next.JS', 'TypeScript', 'AWS EC2', 'AWS RDS', 'Vercel', 'PostgreSQL', 'Flask'],
      imgUrl : samnrollImg, 
      pageUrl : "https://samnroll.vercel.app/",
      gitUrl : ['https://github.com/sgcook97/anime-rec-client',
                'https://github.com/sgcook97/anime-rec-api']
    },
    {
      title : "Blackjack",
      description : "I lead a team in developing a web-app \
      that allows users to play a game of \
      blackjack against the computer.",
      fullInfo : [""],
      tags : ['Flask', 'PostgreSQL', 'Fly.io', 'Python', 'HTML/CSS'],
      imgUrl : blackjackImg,
      pageUrl : "https://blackjack.fly.dev/",
      gitUrl : ['https://github.com/sgcook97/blackjack-web-app']
    },
    {
      title : "Movie Explorer",
      description : "A web-app that allows user to search \
      for and comment on different movies.",
      fullInfo : [""],
      tags : ['Flask', 'PostgreSQL', 'Fly.io', 'Python', 'HTML/CSS'],
      imgUrl : movieexplorerImg,
      pageUrl : "https://movie-explorer2.fly.dev",
      gitUrl : ['https://github.com/sgcook97/movie-explorer']
    }
] as const;