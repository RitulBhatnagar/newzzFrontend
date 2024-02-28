'use client'
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Article } from '@/lib/types';
import axios from 'axios';
import { Divider } from '@nextui-org/react';
import { Code } from '@nextui-org/react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@nextui-org/react';
import TextTruncate from 'react-text-truncate';
import Link from 'next/link';
import { slugify } from '@/utils/slug';
const Page = () => {
  const params = useParams();
  const source = params.name;

  const [data, setData] = useState<Article[]>([]);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.API_KEY}/getSources?source=${source}&page=1`
        );
        setData(response.data.articles);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [source]);

  const handleOpenModal = (article: Article) => {
    setSelectedArticle(article);
    onOpen();
  };

  return (
    <div>
      <div className="flex flex-col items-center mx-2">
        <Code color="warning" className="text-5xl  w-full text-center h-20 py-5 mx-4 my-4 font-light text-red-500">
          {source} Source
        </Code>
        <Code color="success" className="text-2xl mx-4">
          112 Articles
        </Code>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((article, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/4">
            <Card isFooterBlurred className=" w-96 h-[300px] mx-3 my-2">
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <h4 className=" text-zinc-100 font-bold text-sm ">
                  <TextTruncate
               line = {3}
               element = "h4"
               textTruncate = "..."
               text = {article.title}
                  />
                </h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="Relaxing app background"
                className="z-0 w-full h-full object-fill"
                src={article.imageURI}
              />
              <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                <div className="flex flex-grow gap-2 items-center">
                  <div className="flex flex-col">
                    <p className="text-tiny text-white/60">{article.metadata.articlePublishedOn}</p>
                  </div>
                </div>
                <Button onPress={() => handleOpenModal(article)} radius="full" size="sm">
                  Read More
                </Button>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
      <Modal  placement="top-center" isOpen={isOpen} onOpenChange={onOpenChange} >
        <ModalContent>
        {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <h3>{selectedArticle?.title}</h3>
              </ModalHeader>
              <ModalBody>
              <TextTruncate
                line = {10}
                element = "p"
                textTruncate = "..."
                text = {selectedArticle?.subHeading}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                  <Link href = {`/news/${slugify(selectedArticle?.title)}`}>
                <Button color="primary" onPress={onClose}>
                  See More About it
                </Button>
                  </Link>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Page;
