import { useParams } from "react-router";
import Header from "../components/Header";
import RightAside from "../components/HomeLayoutComponent/RightAside";
import NewsDetailsCard from "./NewsDetailsCard";
import { useEffect, useState } from "react";

const NewsDetails = () => {
      const [news, setNews] = useState({});
 
      const {id} = useParams();
      
      useEffect(()=>{
            fetch(`/public/news.json`)
            .then(res => res.json())
            .then(data =>{
                 const detailsNews = data.find((n) => n.id == id);
                 setNews(detailsNews)
            })
      }, [id]);

  return (
    <div>
      <Header />
      {/* main section */}
      <main className="grid grid-cols-12 gap-5 py-6">
        {/* left side */}
        <section className="col-span-9">
          <NewsDetailsCard news={news}/>
        </section>
        {/* Right side */}
        <aside className="col-span-3">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
