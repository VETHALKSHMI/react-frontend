import React from 'react'
import { useParams } from 'react-router-dom';

const LyricsPage = () => {
    const { godId } = useParams();

  console.log("Current god:", godId);
  return (
    <div>{godId}test</div>
  )
}

export default LyricsPage