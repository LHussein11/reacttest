import React, { useEffect, useState } from "react";
import "../App.css";

import Lessons from "./Lessons";
import Chapters from "./Chapters";
import data from "../db.json";

function Landing() {
  const [chapterData, setChapterData] = useState([]);
  const [lessonData, setLessonData] = useState([]);

  function openLesson(lessonInput) {
      if(lessonInput === undefined){
          return null
      }
    console.log(lessonInput);
    return setLessonData(lessonInput);
  }

  function chapterChoosen() {
    let newData = data.chapters?.map((dataEl) => {
      let newLessons = dataEl.Lessons?.map((lesson) => {
        let lessonsRender = (
          <div>
            <h2>{lesson.LessonNr}</h2>
          </div>
        );
        return lessonsRender;
      });
      openLesson(newLessons);
      return [dataEl.chapterNr, openLesson(newLessons)];
    });

    return setChapterData(newData);
  }

  useEffect(() => {
    chapterChoosen();
  }, []);

  return (
    <div className="container">
      <Chapters openLesson={chapterChoosen} chapterInfo={chapterData} />
      <Lessons choosenLesson={lessonData} />
    </div>
  );
}

export default Landing;