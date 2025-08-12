// src/components/SearchBar.jsx
import React from "react";

export default function SearchBar({ query, onChange }) {
  return (
    <input
      type="text"
      placeholder="Buscar por nombre o email..."
      value={query}
      onChange={(e) => onChange(e.target.value)}
      className="search-input"
    />
  );
}
