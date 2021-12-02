import React from 'react'


function Chapters({ getChapterData, chapterClicked }){
    if(getChapterData === undefined || getChapterData.length === 0) {
        return null;
    }
    
    let chapters = getChapterData.map(chapter => {
        return <h4 
        key={Date.now() + Math.random()}
        onClick={() => {
            return chapterClicked(chapter.key2)
        }}
        >
        {chapter.key}
        </h4>
    })


  return (
    <div className="containerChapters">
      <h2>Chapters</h2>
      {chapters}
    </div>
  )
}

export default Chapters

/*

*/