export const FilterBar = ({setSearchTerm}) => {  
      return (  
        <div className="filter-bar">
          <input
            onChange={(event) => {setSearchTerm(event.target.value)}}
            type="text"
            placeholder="Search Posts"
            className="post-search"
            />
        </div>
      )
    }