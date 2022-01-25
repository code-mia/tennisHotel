const SearchBar = () => {
    return(
    <form action="/recherche" method="get" class="search">
        <label htmlFor="header-search">
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Rechercher un hotel"
            name="search" 
        />
        <button><img src={process.env.PUBLIC_URL + "/images/research.png"}/></button>
    </form>
    );
};

export default SearchBar;