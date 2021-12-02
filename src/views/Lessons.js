import React from "react";

function Lessons({ lessons }) {
    let eachLesson = lessons.map(lesson => {
        return (
        <h4 key={Date.now() + Math.random()}>{lesson.LessonNr}</h4>
        )
    })


  return (
    <div>
      <h2>Lessons</h2>
      {eachLesson}
    </div>
  );
}

export default Lessons;
