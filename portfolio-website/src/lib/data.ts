import React from 'react'
import samnrollImg from '/public/samnroll.png'
import blackjackImg from '/public/blackjack.png'
import movieexplorerImg from '/public/movie-explorer.png'

export const projects = [
    {
      title : "SamnRoll",
      description : "A full-stack web-app that takes advantage of a hybrid recommender system I developed to generate anime recommendations to the user.",
      tags : ['Next.JS', 'TypeScript', 'AWS EC2', 'AWS RDS', 'Vercel', 'PostgreSQL', 'Flask'],
      imgUrl : samnrollImg
    },
    {
      title : "Blackjack",
      description : "I lead a team in developing a web-app that allows users to play a game of blackjack against the computer.",
      tags : ['Flask', 'PostgreSQL', 'Fly.io', 'Python', 'HTML/CSS'],
      imgUrl : blackjackImg
    },
    {
      title : "Movie Explorer",
      description : "A web-app that allows user to search for and comment on different movies.",
      tags : ['Flask', 'PostgreSQL', 'Fly.io', 'Python', 'HTML/CSS'],
      imgUrl : movieexplorerImg
    }
] as const;