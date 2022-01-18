import React, { useEffect } from "react";
import axios from "axios";
import Example from './example.json';

const NewsScreen = () => {
  useEffect(() => {
    // axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=5611e75fa901423bba7fec8d5061b191')
    // .then(res => {
    //   console.log(JSON.stringify(res))
    // })
    console.log(Example)
  }, [])
  
  return (
    <div className="news">

    </div>
  )
}

export default NewsScreen;