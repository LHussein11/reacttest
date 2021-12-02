import React, { useEffect, useState } from "react";
import "../App.css";

import Lessons from "./Lessons";
import Chapters from "./Chapters";
import data from "../db.json";

function Landing() {
    const [chapterNr, setChapterNr] = useState([]);
    const [lessonsData, setLessonsData] = useState([]);

    async function chaptersData() {
        data.chapters.map(chapter => {
            return chapter.chapterData.map(chapterEl => {
                return setChapterNr((prevState) => [...prevState, {key: chapterEl.chapter, key2: chapterEl.lessons}]) 
            })
        })
    }

    useEffect(() => {
        chaptersData();
    }, []);

    function chapterClicked(a){
        setLessonsData(a)
    }

    return (
    <div className="container">
      <Chapters chapterClicked={chapterClicked} getChapterData={chapterNr}/>
      <Lessons lessons={lessonsData}/>
    </div>
  );
}

export default Landing;