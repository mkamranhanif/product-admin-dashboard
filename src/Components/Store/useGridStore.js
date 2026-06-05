import axios from 'axios'
import { create } from 'zustand'

const useStore = create((set) => ({
  data: [],
  isLoading: (true),
  error: (null),
  searchQuery: "",
  selectedCategory: "All",
  sortConfig: { key: "id", direction: "asc" },
  pageNumber: 1,
  itemsPerPage: 10,
  selectedFilter: "",


  async fetchData() {
    set({ isLoading: (true), error: (null) })
    try {
      const res = await axios.get("https://fakestoreapi.com/products")
      set({ data: res.data })
    }
    catch (err) {
      set({ error: err.message })
    }
    finally {
      set({ isLoading: (false) })
    }
  },

  setSearchQuery(query) {
    set({ searchQuery: query, pageNumber: 1 })
  },
  setSelectedFilter(value) {
    set({ selectedFilter: value })
  },
  setCategory(categ) {
    set({ selectedCategory: categ, pageNumber: 1 })
  },
  setPage(curr) {
    set({ pageNumber: curr })
  },
  setSortConfig(key) {
    console.log(key)
    set((state) => {
      const sameKey = state.sortConfig.key === key
      const nextDirection = sameKey && state.sortConfig.direction === "asc" ? "desc" : "asc"
      return { sortConfig: { key, direction: nextDirection } }
    })
  }


}))

export default useStore