import { FaEye, FaStar } from "react-icons/fa";
import { format } from "date-fns";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { Link } from "react-router";


const NewsCard = ({ news }) => {
  const {
    id,
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
    tags,
    others,
  } = news;

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition">
      {/* Thumbnail */}
      <figure>
        <img
          src={thumbnail_url}
          alt={title}
          className="h-56 w-full object-cover"
        />
      </figure>

      <div className="card-body">
        {/* Badges */}
        <div className="flex gap-2 mb-2">
          {others?.is_trending && (
            <div className="badge badge-error text-white">Trending</div>
          )}
          {others?.is_today_pick && (
            <div className="badge badge-success text-white">Today’s Pick</div>
          )}
        </div>

        {/* Title */}
        <h2 className="card-title text-lg leading-snug">{title}</h2>

        {/* Author */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 mt-3">
            <img
              src={author?.img}
              alt={author?.name}
              className="w-10 h-10 rounded-full"
            />
            <div className="text-sm">
              <p className="font-semibold">{author?.name}</p>
              <p className="text-gray-500">
                {format(new Date(author?.published_date), "PP")}
              </p>
            </div>
          </div>

          <div className="flex items-center">
           <button className="cursor-pointer"> <CiBookmark className="text-2xl" /></button>
            <button className="cursor-pointer"><CiShare2 className="text-2xl" /></button>
          </div>
        </div>

        {/* Details */}
        <p className="text-sm mt-3 text-gray-600">
          {details.slice(0, 200)}...
          <Link to={`/news-details/${id}`}>
          <span className="text-orange-400 font-semibold cursor-pointer hover: underline">
            Read More
          </span>
          </Link>
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag, index) => (
            <span key={index} className="badge badge-outline">
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="card-actions justify-between items-center mt-4">
          {/* Rating */}
          <div className="flex items-center gap-1">
            {[...Array(rating?.number)].map((_, i) => (
              <FaStar key={i} className="text-warning" />
            ))}
            <span className="ml-1 badge badge-primary">{rating?.badge}</span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-1 text-gray-600">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
