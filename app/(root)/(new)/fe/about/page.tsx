import React from 'react';

const About = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-semibold mb-4">About This Project</h1>
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Technologies Used</h2>
                <ul className="list-disc ml-4">
                    <li>Frontend Technologies: React, TypeScript, Tailwind CSS, Next.js</li>
                    <li>Backend Technologies: Node.js, Express, MongoDB, Mongoose, AWS Lambda, AWS EventBridge, AWS S3 Bucket</li>
                </ul>
            </div>
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">How Articles Are Curated?</h2>
                <p>Articles are scraped from various sources and stored in the database using scheduled ⌚ Cron Jobs. This automated process ensures a regular influx of new content.</p>
            </div>
            <div>
                <h2 className="text-xl font-semibold mb-2">System Architecture</h2>
                <img src="/veve.webp" alt="System Architecture" className="w-full rounded-lg shadow-lg" />
            </div>
        </div>
    );
};

export default About;
