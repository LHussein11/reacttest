import React from 'react'


function Chapters({ chapterInfo, openLesson }){
  
  let newChapter = chapterInfo.map(chapter => {
    return <h4 key={Date.now() + Math.random()} onClick={openLesson}>{chapter}</h4>
  })

  return (
    <div className="containerChapters">
      <h2>Chapters</h2>
      {newChapter}
    </div>
  )
}

export default Chapters