import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import NewsItem from './NewsItem'
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner'
export default function News(props) {
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(20);
    const [totalLength, setTotalLength] = useState(0);
    const [loading,setLoading] = useState(false);

    const makeRequests = async () => {
        setLoading(true);
        props.setProgress(70);
        const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=f6ec74474e4c4b4d87eaedcecbbd5aee&category=${props.category}&page=${page}&pageSize=${pageSize}`);
        props.setProgress(100);
            setTotalLength(res.data.totalResults);
        setLoading(false);
        console.log(page);
        setArticles(res.data.articles);
        console.log(articles);
    }

    const fetchMoreData = async ()=>
    {
       
        const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=f6ec74474e4c4b4d87eaedcecbbd5aee&category=${props.category}&page=${page+1}&pageSize=${pageSize}`);
        setPage(page+1);
        console.log(page);
        setArticles(articles.concat(res.data.articles));
        setTotalLength(res.data.totalResults);
        console.log(articles);
    }

    useEffect(() => {
        document.title= `KHABAR-${props.category.toUpperCase()}`;
        makeRequests();
    }, []);

    return (
        <>
         {loading && <Spinner/>}
        <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalLength}
            loader={<h4>Loading...</h4>}
        >
            <div className="row">
                {
                    articles && articles.map((element) => {
                        return <NewsItem key={element.url} url={element.urlToImage} title={element.title} description={element.description} />
                    })
                }
            </div>
            </InfiniteScroll>


        </>
       
        )
}
