import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import "/src/app/components/css/busca.css";

const Busca = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <form className="form-search" id="searchForm" onSubmit={handleSearch}>
      <div className="form-input">
        <input
          type="search"
          id="searchInput"
          placeholder="Buscar..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-btn"><FaSearch /></button>
      </div>
    </form>
  );
}

export default Busca;
