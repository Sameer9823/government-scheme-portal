'use client'
import React, { useEffect, useState } from "react";
import axios from "axios";

// Define the shape of a news article
interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  source: { name: string };
}

const News: React.FC = () => {
  const [news, setNews] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch news data
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/everything?q=government+schemes&apiKey=7a61a5e6933c41a39aacc59e7df21064"
        );
        setNews(response.data.articles);
        setLoading(false);
      } catch (error: any) {
        setError("Failed to fetch news articles.");
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold text-center mb-10">
          Government Schemes & Policies News
        </h1>

        {/* Loading Spinner */}
        {loading && (
          <div className="flex justify-center items-center h-64">
            <div className="loading loading-spinner loading-lg text-primary"></div>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="text-center text-red-500">
            <p>{error}</p>
          </div>
        )}

        {/* News Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {!loading &&
            !error &&
            news.length > 0 &&
            news.map((article, index) => (
              <div
                key={index}
                className="card w-full bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-200"
              >
                {/* Article Image */}
                <figure>
                  <img
                    src={article.urlToImage || "/default-news.jpg"}
                    alt="News Image"
                    className="h-48 w-full object-cover"
                  />
                </figure>

                <div className="card-body">
                  <h2 className="card-title">{article.title}</h2>
                  <p>{article.description}</p>

                  <p className="text-sm text-gray-500">
                    {new Date(article.publishedAt).toLocaleDateString()} by{" "}
                    {article.source.name}
                  </p>

                  <div className="card-actions justify-end">
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            ))}

          {/* If no news articles */}
          {!loading && !error && news.length === 0 && (
            <p className="text-center">No news articles available at the moment.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default News;
