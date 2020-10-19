import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';

const Home = () => {
  return (
    <motion.div className="home container"
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:1,duration:1.5}}
    >
      <h2>
        Welcome to Pizza Joint
      </h2>
      <Link to="/base">
        <motion.button
        whileHover={{scale:1.1,
        boxShadow:' 0px 0px 10px 2px rgba(250,250,250,1)',
        textShadow:' 0px 0px 10px 2px rgba(250,250,250,1)'
        }}
        
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;