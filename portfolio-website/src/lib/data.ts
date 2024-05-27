import React from 'react';
import samnrollImg from '/public/samnroll.png';
import blackjackImg from '/public/blackjack.png';
import movieexplorerImg from '/public/movie-explorer.png';
import portfolioImg from '/public/portfolio.png';
import blockpartyImg from '/public/blockparty.png';
import { FaGraduationCap } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";

export const projects = [
    {
        title: "blockparty",
        description: "A MERN stack application that allows users to \
        find others to play volleyball with in their area. \
        Users can create or join events and chat with \
        other users with real-time messaging. The app also \
        features an integrated weather tracker to help users \
        plan their events.",
        fullInfo: ["Blockparty is a MERN stack application \
        tailored for volleyball enthusiasts. \
        Leveraging MongoDB, Express, React, and Node.js, this \
        platform seamlessly connects users, allowing them to discover \
        and join volleyball events in their area. With sleek design \
        powered by Tailwind CSS, the app provides intuitive navigation \
        and a delightful user experience.", 
        "A standout feature is the integration of real-time messaging \
        via Socket.IO, enabling instant communication between users. \
        Additionally, the app includes an integrated weather tracker, \
        ensuring users can plan their volleyball activities effectively. \
        Through innovative technologies and thoughtful design, this MERN \
        app redefines how volleyball enthusiasts connect and engage \
        with their community."],
        tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Tailwind CSS', 'Socket.io', 'Render'],
        imgUrl: blockpartyImg,
        pageUrl: "https://blockparty-meetup.vercel.app/",
        gitUrl: ['https://github.com/sgcook97/vball-meetup-client',
                'https://github.com/sgcook97/vball-meetup-api']
    },
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
        tags : ['Next.js', 'TypeScript', 'AWS EC2', 'AWS RDS', 'Vercel', 'PostgreSQL', 'Flask'],
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
      tags : ['Flask', 'PostgreSQL', 'Django', 'Fly.io', 'Python', 'HTML/CSS'],
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
      tags : ['Flask', 'PostgreSQL', 'Django', 'Fly.io', 'Python', 'HTML/CSS'],
      imgUrl : movieexplorerImg,
      pageUrl : "https://movie-explorer2.fly.dev",
      gitUrl : ['https://github.com/sgcook97/movie-explorer']
    },
    {
        title : "Sam Cook",
        description : "A porfolio website that introduces you to me, Sam Cook.",
        fullInfo : ["This webiste was created to help people like yourself get \
        to know me and see what I can do. It was built using Next.js and React, \
        utilizing Tailwind for seamless styling. There are options to view the \
        various projects I have deployed, or download my resume as a pdf, or \
        even contact me through email directly from the site via Resend and \
        React-Email. The project was deployed to Vercel for uninterrupted \
        acces worldwide."],
        tags : ['Next.js', 'Tailwind CSS', 'TypeScript', 'React Email', 'Resend', 'React', 'Framer Motion', 'Vercel', 'HTML/CSS'],
        imgUrl : portfolioImg,
        pageUrl : "https://samcook.vercel.app",
        gitUrl : ['https://github.com/sgcook97/portfolio-website']
    }
] as const;

export const skills = [
    'Next.js', 'Python', 'Vite', 'PostgreSQL', 'MongoDB', 'Express.js', 'React', 'AWS',
    'Tailwind', 'Git/Github', 'Socket.io', 'Flask', 'C++', 'JavaScript', 'Node.js',
    'TypeScript', 'Java', 'Django', 'HTML/CSS', 'SQL', 'MySQL', 'REST APIs'
] as const;

export const experience = [
    {
        title: "Student",
        location: "Austin Community College",
        description: "I studied Computer Science for two years \
        before transferring to a 4-year institution.",
        icon: React.createElement(FaGraduationCap),
        date: "Jan 2020 - Dec 2021"
    },
    {
        title: "Graduated College",
        location: "Texas State University",
        description: "I graduated with a Bachelor of Science in \
        Computer Science and a Minor in Mathematics.",
        icon: React.createElement(FaGraduationCap),
        date: "Jan 2022 - Dec 2023"
    },
    {
        title: "Aspiring Software Engineer",
        location: "Austin, TX",
        description: "I'm freshly graduated looking for my start \
        in Software Engineering. I'm excited for what's in store. \
        Let's connect if you would like to work together!",
        icon: React.createElement(FaReact),
        date: "Dec 2023 - present"
    },
] as const;