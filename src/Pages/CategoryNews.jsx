import { useEffect, useState, } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../components/NewsCard/NewsCard";


const CategoryNews = () => {
       const data = useLoaderData();
      const {id} = useParams();
     
      const [filterNews, setFilterNews] = useState([]);   

      useEffect(()=>{
            if(id == '0'){
                  setFilterNews(data);
                  return;
            }
            else if(id == "1"){
                  const breakingNews = data.filter((news) => news?.others?.is_today_pick == true);    setFilterNews(breakingNews)
             }
             else{
                  const filtered = data.filter((news) => news.category_id == id);
                   setFilterNews(filtered)
             }
          
      }, [data, id])

      return (
            <div>
                  <h3 className="font-bold my-3">Total news {filterNews.length} found</h3>
                  <div className="grid grid-cols-1 gap-3">
                        {
                              filterNews.map((news) => <NewsCard 
                              key={news.id}
                              news={news}
                              ></NewsCard>)
                        }
                  </div>
            </div>
      );
};

export default CategoryNews;