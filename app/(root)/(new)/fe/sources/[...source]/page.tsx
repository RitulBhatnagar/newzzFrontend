import React from 'react'
import { useParams } from 'next/navigation'

const SourceArticle = () => {
    const {source} = useParams();
  return (
    <div>SourceArticle</div>
  )
}

export default SourceArticle