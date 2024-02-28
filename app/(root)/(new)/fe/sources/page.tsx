'use client'
import React, {useState, useEffect} from 'react'
import {Card, CardHeader, CardBody, Image}  from "@nextui-org/react";
import Link from "next/link";
import axios from "axios"


const Sources = () => {
    const[sources, setSources] = useState([]);
    useEffect(() => {
       const fetchData = async () => {
          const response = await axios.get(`${process.env.API_KEY}/getSources`)
          setSources(response.data)
       }
       fetchData();
    }, [])
    // console.log(sources)
  return (
<div className="">
  <div className="flex flex-wrap mx-2">
    {sources.map((source, index) => (
      <div key={source._id} className={`w-full sm:w-1/2 md:w-1/2 lg:w-1/3 px-2 mb-4 ${index === sources.length - 1 && sources.length % 3 !== 0 ? 'md:mx-auto' : ''}`}>
        <Link   href={`/source/${source._id}`}>

        <Card className="py-4 my-6 mx-5 bg-gray-100 cursor-pointer">
         
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">Articles</p>
              <small className="text-default-900">{source?.count} articles</small>
              <h3 className="font-bold text-large">{source._id}</h3>
            </CardHeader>
          
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={`/logos/${source._id}.svg`}
              width={100}
              />
          </CardBody>
        </Card>
        </Link>
      </div>
    ))}
  </div>
  <footer className="bg-gray-200 py-8 text-center">
    <p className="text-3xl text-gray-800 font-bold mb-4">🚀 Exciting News Ahead! 🚀</p>
    <p className="text-lg text-gray-700 mb-6">Going to Add More Sources 🔥!</p>
  </footer>
</div>


  
  )
}

export default Sources