DataGrid():
  // read state + actions from store
  const { data, isLoading, error, searchQuery, selectedCategory,
          sortConfig, currentPage, itemsPerPage, fetchData, setPage } = useGridStore()

  // fetch once on mount
  useEffect(() => { fetchData() }, [])

  // 1) filter by category
  filteredByCategory = selectedCategory === "All"
    ? data
    : data.filter(item => item.category === selectedCategory)

  // 2) filter by search
  filteredBySearch = filteredByCategory.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
    // optionally include description too
  )

  // 3) sort
  sorted = sort(filteredBySearch, sortConfig.key, sortConfig.direction)

  // 4) paginate
  start = (currentPage - 1) * itemsPerPage
  end = start + itemsPerPage
  pageRows = sorted.slice(start, end)
  totalPages = ceil(sorted.length / itemsPerPage)

  // render
  return (
    <FilterBar />      // reads/writes store (search, category)
    <Table rows={pageRows} isLoading={isLoading} error={error} />
    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setPage} />
  )