import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import styles from './search..module.css'

export default function Busca() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles['form-search']} id="searchForm" onSubmit={handleSearch}>
      <div className={styles['form-input']}>
        <input
          className={styles['search-input']}
          type="search"
          id="searchInput"
          placeholder="Buscar..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <button type="submit" className={styles['search-btn']}>
          <FaSearch />
        </button>
        
      </div>
    </form>
  );
}
