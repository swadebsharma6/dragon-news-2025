import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  const {
    title,
    thumbnail_url,
    details,
  } = news;
  return (
    <div className="max-w-3xl mx-auto">
      <div className="card bg-base-100 shadow-xl p-5">
        <figure>
          <img
            src={thumbnail_url}
            alt="News Image"
            className="w-full object-cover"
          />
        </figure>

        <div className="card-body">
          <h2 className="card-title text-xl font-bold">{title}</h2>

          <p className="text-sm text-gray-500 leading-relaxed">{details}</p>

          {/* Footer Section */}
          <div className="flex justify-between items-center pt-4">
            <div className="flex items-center gap-2">
              <div className="badge badge-primary">Trending</div>
              <span className="text-sm text-gray-500">⭐ 4.0</span>
            </div>
            <span className="text-sm text-gray-500">👁 6789 Views</span>
          </div>
        </div>
        <Link to={`/category/${news.category_id}`}>
        <button className="btn btn-secondary">Back To Category</button>
        </Link>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
