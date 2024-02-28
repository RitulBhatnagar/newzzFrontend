'use client'
import React, {useState} from 'react';
import { useRouter, useParams } from 'next/navigation';
import { slugify } from '@/utils/slug';
import { Article } from '@/lib/types';
import axios from 'axios';
import {Divider, Image} from "@nextui-org/react";
import { Divide } from 'lucide-react';
const Page = () => {
  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title[0]);
  const slugifiedTitle = slugify(decodedTitle);
  const [article, setArticle] = useState<Article[]>([])
  const fetchData = async() => {
    try{
      const response = await axios.get(
        `${process.env.API_KEY}/article?articleTitle=${title}`
      );
      setArticle(response.data);
    }
    catch(error){
      console.log(error)
    }
  }
  // console.log(article)
  fetchData();

  return (
<div className="flex flex-col items-center justify-center min-h-screen p-4">
  <div className="w-full max-w-3xl p-4">
    <div className="aspect-w-16 aspect-h-9 rounded-md overflow-hidden">
      <img className="object-cover w-full h-full" src={article?.imageURI} alt="article image" />
    </div>
    <div className="mt-4">
    <div className="mt-4 text-gray-600 text-sm flex flex-row justify-between mb-4 ">
        <p className='font-bold'>Author: {article?.metadata?.author}</p>
        <p>Published Date: {article?.metadata?.articlePublishedOn}</p>
      </div>
      <h1 className="text-2xl font-bold">{article?.title}</h1>
      <p className="mt-2 text-gray-800">{article?.content}</p>
    </div>
  </div>
</div>


  );
};

export default Page;
