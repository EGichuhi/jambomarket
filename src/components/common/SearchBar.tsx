import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch?: () => void;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, className = '' }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      if (onSearch) onSearch();
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for products, services, shops..."
        className="input py-2 pl-10 pr-4 w-full"
        aria-label="Search"
      />
      <button
        type="submit"
        className="absolute left-0 top-0 h-full flex items-center justify-center w-10 text-secondary-500"
        aria-label="Submit search"
      >
        <Search size={18} />
      </button>
    </form>
  );
};

export default SearchBar;