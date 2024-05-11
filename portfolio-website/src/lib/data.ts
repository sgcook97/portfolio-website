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
      fullInfo : ["The Blackjack Web App delivers the \
      thrill of the casino to your fingertips, powered \
      by a robust Flask server written in Python. \
      Anchored by a Postgres Database for persistent \
      data storage, this app ensures seamless \
      gameplay and user experiences. Integrating \
      with the Deck of Cards REST API, players \
      can immerse themselves in authentic card-shuffling \
      excitement with every hand dealt. User login \
      functionality adds a personalized touch, allowing \
      players to track their progress."],
      tags : ['Flask', 'PostgreSQL', 'Fly.io', 'Python', 'HTML/CSS'],
      imgUrl : blackjackImg,
      pageUrl : "https://blackjack.fly.dev/",
      gitUrl : ['https://github.com/sgcook97/blackjack-web-app']
    },
    {
      title : "Movie Explorer",
      description : "A web-app that allows user to search \
      for and comment on different movies.",
      fullInfo : ["The Movie Explorer is a dynamic web application \
      designed to immerse users in the world of cinema exploration \
      and interaction. Utilizing Flask, the app seamlessly integrates \
      with the TMDB API, empowering users to search for and discover a \
      vast array of movies with ease. A sophisticated user comment \
      system, powered by PostgreSQL, allows users to engage with their \
      favorite films by leaving comments and feedback directly within \
      the app. Crafted with a responsive user interface using HTML/CSS, \
      the Movie Explorer ensures a seamless viewing experience across \
      various devices. Leveraging the computing capabilities of Fly.io, \
      the app is deployed with utmost reliability and performance, \
      guaranteeing uninterrupted access for users worldwide."],
      tags : ['Flask', 'PostgreSQL', 'Fly.io', 'Python', 'HTML/CSS'],
      imgUrl : movieexplorerImg,
      pageUrl : "https://movie-explorer2.fly.dev",
      gitUrl : ['https://github.com/sgcook97/movie-explorer']
    }
] as const;