import Filter_By_Category from "./Filter-By-Category/Filter_By_Category";
import Filter_By_More from "./Filter-By-From-To/Filter_By_More";
import Filter_By_Price from "./Filter-By-Price/Filter_By_Price";

export default function FilterMenue() {
  return (
    <aside className="filter-menu border-l border-t rounded-t-lg p-2 w-full flex flex-col justify-start items-center">
        {/**Filter By More */}
        <Filter_By_More />
        {/**Filter By Sub Category */}
        <Filter_By_Category />
        {/**Filter By Price */}
        <Filter_By_Price />
    </aside>
  )
}
