"use client";
import React, { useEffect, useState } from 'react'
import Navigation from './_components/navigation'
import axios from "axios";
import {Article} from "@/lib/types"
import TextTruncate from 'react-text-truncate';
import { useRouter } from 'next/navigation';
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Navbar} from "@nextui-org/react";
import Topbar from './_components/Topbar';
import { Button } from "@/components/ui/button"
import { NextConfig } from 'next';
import PaginationComp from './_components/PaginationComp';
import { slugify } from '@/utils/slug';
interface NewsSource{
  source : string,
  label : string,
  src : string,
}
const NewPage = () => {
  const[articles, setArticles] = useState<Article[]>([]);
  const[currentPage, setCurrentPage] = useState<Article[]>([]);
  const[isLoading, setIsLoading] = useState(false);
  const[error, setError] = useState("");
  const[pagination, setPagination] = useState({
    pageNumber : 1,
    totalPages : 1
  })
  const router = useRouter();

  const fetchData = async() => {
   

     try{
      const response = await axios.get(
        `${process.env.API_KEY}/articles?collection=scrapped&page=${pagination.pageNumber}`
      );
      const fetchedArticles = response.data.getArticles;
      // console.log("fetchedArticles",fetchedArticles)
      // setArticles((prevArticles) => {
      //   const updatedArticles = [...prevArticles];
      //   updatedArticles[pagination.pageNumber] = fetchedArticles;
      //   return updatedArticles;
      // });
      setArticles(fetchedArticles);
      setCurrentPage(fetchedArticles);
      setPagination({
        ...pagination,
        totalPages: response.data.totalPages,
      });
     }
     catch(error){
     console.log(error);
     }
    }
  useEffect(() => {
  
    fetchData();
  }, [pagination.pageNumber]);
  const handlePageChange = async (newPageNumber: number) => {
    setPagination({
      ...pagination,
      pageNumber: newPageNumber
    });
  }

// console.log("clickedPage",pagination.pageNumber)
// console.log("articles", articles)


  return (
    <div className="w-full">
    {/* <Topbar /> Adjust width to cover the whole screen */}
    <div className='flex justify-center'>
      <div className="grid grid-cols-1">
        {articles?.map((article, index) => (
          <div key={index} className="mb-4">
            <Card
              key={index}
              isBlurred
              
              className="border-l-success-200 bg-background/60 dark:bg-default-100/50 max-w-[610px]"
              shadow="sm"
            >
              <CardBody className="flex items-center justify-center h-full">
                {article?.imageURI ? (
                  <img src={article?.imageURI} alt={article?.title} />
                ) : (
                  <img src="/News-3.jpg" alt="Default Image" />
                )}

                  <Divider className='mt-4'/>
                <div className="flex flex-col ml-4">
                  <h2 className='text-lg text-black font-bold mt-2'>
                    <TextTruncate
                      line={2}
                      element="h2"
                      truncateText="..."
                      text={article?.title}
                    />
                  </h2>
                  <span className="text-lg text-left text-gray-800 mt-3">
                    <TextTruncate
                    line = {2.5}
                    element = "span"
                    TextTruncate = "..."
                    text = {article?.subHeading}
                    />
                  </span>
                  <div className="mt-4">
                      <Link href={`/news/${slugify(article.title)}`}>
                    <Button className="text-left">
                      Read More
                     </Button> 
                      </Link>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </div>
    <PaginationComp handlePageChange = {handlePageChange} totalPages = {pagination.totalPages}/>
  </div>
  )

}

export default NewPage