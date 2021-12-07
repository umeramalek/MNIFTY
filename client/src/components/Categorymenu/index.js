import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';
// import { idbPromise } from '../../utils/helpers';

/*
*** @CategoryMenu returns the menu that displays all the categories
*/


function CategoryMenu() {
  const [state, dispatch] = useStoreContext();
  const { categories } = state;
  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);
  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
    }
  }, [categoryData, loading, dispatch]);
  const showCategory = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };
  return (
    <div>
      <h2 className="maysCategory" >SORT:</h2>
      {categories.map((item) => (
        <button
          key={item._id}
          onClick={() => {
            showCategory(item._id);}}
          > {item.name} </button>
      ))}
    </div>
  );
}
export default CategoryMenu;
