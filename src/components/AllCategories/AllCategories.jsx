import { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch('/public/categories.json').then((res)=>res.json());

const AllCategories = () => {

      const categories = use(categoryPromise);

     
      return (
            <>
                  <h2 className="font-bold p-2">All Categories: {categories.length}</h2>

                  <div className="grid grid-cols-1 p-2 gap-2">
                        {
                           categories.map(category => <NavLink 
                              className={'btn bg-base-100 hover:bg-base-200 font-semibold'}
                              key={category.id}
                              to={`/category/${category.id}`}
                              >{category.name}
                              </NavLink>)   
                        }
                  </div>
            </>
      );
};

export default AllCategories;