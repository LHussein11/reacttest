import React from "react";

function Lessons(props) {
  console.log(props.choosenLesson)

  return (
    <div>
      <h2>Lessons</h2>
      <p>{props.choosenLesson}</p>
    </div>
  );
}

export default Lessons;
