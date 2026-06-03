# Project Plan

Learning-first plan tailored to the current scope and data keys (`id`, `title`, `description`, `price`, `rating`, `count`).

## Plan
- Define global grid state in `useGridStore`: raw `data`, `isLoading`, `error`, `searchQuery`, `sortConfig`, `quickFilter`, `currentPage`, `itemsPerPage`.
- In `DataGrid`, fetch once on mount, then derive `visibleRows` through a strict pipeline: search -> quick filter -> sort -> paginate.
- Build `FilterBar` with a debounced text input (filters `title` only), a sort dropdown (price or rating), and a quick-filter dropdown (premium, budget, top rated).
- Build `Table` with 5 columns: ID, Name, Description (truncate), Price (two decimals), Reviews (rating + count).
- Build `Pagination` with prev and next and disabled boundaries.
- Add states: loading, error, empty results.

## Pseudocode: Zustand Store
```pseudo
createStore = () => ({
  data: [],
  isLoading: false,
  error: null,

  searchQuery: "",
  quickFilter: "all",         // all | premium | budget | topRated
  sortConfig: { key: "id", direction: "asc" },

  currentPage: 1,
  itemsPerPage: 10,

  setSearchQuery(q) => set({ searchQuery: q, currentPage: 1 }),
  setQuickFilter(v) => set({ quickFilter: v, currentPage: 1 }),
  setSortConfig(key) => set(state => {
    isAsc = state.sortConfig.key == key && state.sortConfig.direction == "asc"
    return { sortConfig: { key, direction: isAsc ? "desc" : "asc" } }
  }),
  setPage(n) => set({ currentPage: n }),

  fetchData: async () => {
    set({ isLoading: true, error: null })
    try:
      res = await fetch("https://fakestoreapi.com/products")
      json = await res.json()
      set({ data: json, isLoading: false })
    catch err:
      set({ error: err.message, isLoading: false })
  }
})
```

## Pseudocode: Data Pipeline in DataGrid
```pseudo
// helpers
getRatingValue(item):
  if item.rating is object: return item.rating.rate
  else return item.rating

getCountValue(item):
  if item.rating is object: return item.rating.count
  else return item.count

normalize(str): return str.toLowerCase().trim()

// DataGrid
useEffect(() => fetchData(), [])

filtered = data
  .filter(item => normalize(item.title).includes(normalize(searchQuery)))

filtered = filtered.filter(item => {
  if quickFilter == "premium": return item.price > 100
  if quickFilter == "budget": return item.price < 50
  if quickFilter == "topRated": return getRatingValue(item) > 4.0
  return true
})

sorted = sort(filtered, (a, b) => {
  valueA = sortKey == "price" ? a.price : getRatingValue(a)
  valueB = sortKey == "price" ? b.price : getRatingValue(b)

  if valueA is string: return compareStrings(valueA, valueB, direction)
  else return compareNumbers(valueA, valueB, direction)
})

startIndex = (currentPage - 1) * itemsPerPage
endIndex = startIndex + itemsPerPage
paged = sorted.slice(startIndex, endIndex)

render FilterBar, Table(paged), Pagination
```

## Pseudocode: FilterBar (Debounced Search)
```pseudo
localInput = searchQuery
useEffect(() => {
  timeout = setTimeout(() => setSearchQuery(localInput), 300)
  return () => clearTimeout(timeout)
}, [localInput])

onChangeSearch(e) => setLocalInput(e.target.value)

onChangeSort(e) => setSortConfig(e.target.value)
onChangeQuickFilter(e) => setQuickFilter(e.target.value)
```

## Pseudocode: Table Rendering
```pseudo
TableHeader:
  columns = [id, title, description, price, reviews]
  for each column:
    if sortable: onClick => setSortConfig(columnKey)

TableRow(item):
  idCell = "#" + padLeft(item.id, 3)
  nameCell = item.title
  descCell = truncate(item.description, 50) + "..."
  priceCell = "$" + item.price.toFixed(2)
  reviewsCell = "star " + getRatingValue(item) + " (" + getCountValue(item) + " reviews)"
```

## Pseudocode: Pagination
```pseudo
totalPages = ceil(sorted.length / itemsPerPage)

prevDisabled = currentPage == 1
nextDisabled = currentPage == totalPages

onPrev => if !prevDisabled then setPage(currentPage - 1)
onNext => if !nextDisabled then setPage(currentPage + 1)
```
