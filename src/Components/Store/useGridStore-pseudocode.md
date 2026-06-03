# useGridStore - Pseudocode

Goal: add filter, sort, and pagination state so `DataGrid` can process a raw array of objects.

## State shape (high level)

- data: []
- isLoading: false
- error: null
- searchQuery: ""
- selectedCategory: "All"
- sortConfig: { key: "id", direction: "asc" }
- currentPage: 1
- itemsPerPage: 10

## Actions (high level)

- setSearchQuery(query)
  - update searchQuery
  - reset currentPage to 1

- setSelectedCategory(category)
  - update selectedCategory
  - reset currentPage to 1

- setSortConfig(key)
  - if the same key is clicked and direction is "asc", flip to "desc"
  - otherwise set direction to "asc"

- setPage(pageNumber)
  - update currentPage

## fetchData flow (high level)

- set isLoading = true and error = null
- try to fetch products array
- on success: set data to response array
- on error: set error message
- finally: set isLoading = false

## Notes

- Keep `data` as the raw API array; all filtering, sorting, and pagination happens in `DataGrid`.
- Optional: name the hook `useGridStore` to match the file name.
