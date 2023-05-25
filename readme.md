# Decrypt Crypto Web Scraper

This project is a web scraping application that fetches articles from the Decrypt website and sends them to an AWS SQS queue for further processing.

## Prerequisites

- Node.js 14.x
- AWS account
- Serverless Framework

## Installation

1. Clone the repository.
2. Install the dependencies by running the following command:

   ```bash
   npm install

## Usage
To run the web scraping application locally, use the following command:

- sls offline

This will start the application on your local machine.

## Deployment
To deploy the application to AWS Lambda, use the following command:

- sls deploy --stage <stage>

Replace <stage> with the desired deployment stage (e.g., dev, prod).

# Configuration
Before deploying the application, make sure to configure the following environment variables:

- QUEUE_URL: The URL of the AWS SQS queue where the articles will be sent.
- STAGE: The deployment stage (default is tst).
These environment variables can be set in the serverless.yml file.

## Endpoints
The application provides the following endpoint:

GET /fetch-articles: Fetches articles from the Decrypt website and sends them to the configured SQS queue.

## Response Model
The response from the /fetch-articles endpoint will have the following structure:

{
  "message": "Sent <number> articles to queue"
}

## Sample Response
Here's an example of a sample response:

{
  "articleId": "dc2fd2da-a667-4683-9013-1bc14edf4663",
  "title": "Sam Altman’s Worldcoin Raises $115 Million in Round Led by Blockchain Capital",
  "link": "https://decrypt.co/142308/tools-for-humanity-115-million-series-c-funding-blockchain-capital",
  "translatedArticles": {},
  "metadata": {
    "articleSource": "descrypt",
    "articleBaseUrl": "https://decrypt.co/news",
    "articleTimeStampExtracted": 1685022264642,
    "category": "Technology",
    "articlePublishedOn": "May 25, 2023",
    "author": "Jason Nelson",
    "articleLastUpdatedOn": "N/A"
  },
  "content": "Tools for Humanity, the technology company behind Worldcoin, ..."
}

The response includes the articleId, title, link, translatedArticles, metadata, and content fields.
