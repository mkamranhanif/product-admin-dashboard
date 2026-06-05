# Pagination and Sorting Logic Explained

Here is a detailed breakdown of how the sorting and pagination logic works in your `DataGrid.jsx` file. This pipeline takes the filtered data and prepares the exact chunk of rows to display on the screen.

---

### 1. `getSortValue`

```javascript
const getSortValue = (item, key) => {
    if (key === "rating" || key === "rate") {
        return item.rating?.rate ?? item.rate ?? 0
    }
    if (key === "reviews" || key === "count") {
        return item.rating?.count ?? item.count ?? 0
    }
    return item[key]
}
```
**What it does:** Extracts the correct value to sort by from a single product object.
**Why it's needed:** Most fields like `title` or `price` can be accessed directly (e.g., `item["title"]`). However, the Fake Store API nests ratings inside an object (e.g., `rating: { rate: 4.5, count: 120 }`). This function acts as a helper: if you want to sort by "rating", it digs into the object to grab `item.rating.rate`. If you want to sort by "reviews", it grabs `item.rating.count`. For anything else, it just returns the normal `item[key]`.

---

### 2. `compareValues`

```javascript
const compareValues = (aValue, bValue) => {
    const isString = typeof aValue === "string" || typeof bValue === "string"
    if (isString) {
        return String(aValue ?? "").localeCompare(String(bValue ?? ""), undefined, {
            numeric: true,
            sensitivity: "base",
        })
    }
    const aNumber = typeof aValue === "number" ? aValue : Number(aValue) || 0
    const bNumber = typeof bValue === "number" ? bValue : Number(bValue) || 0
    return aNumber - bNumber
}
```
**What it does:** A generic formula that decides which of two values should come first. 
**How it works:**
- If either value is a text string (like the product title), it converts both to strings and uses JavaScript's built-in `localeCompare` to alphabetize them. The `{ numeric: true }` option is a clever trick that ensures "Product 10" comes *after* "Product 2", rather than before it.
- If the values are numbers (like price), it simply subtracts them (`aNumber - bNumber`). If the result is negative, `a` is smaller and comes first. If positive, `b` is smaller.

---

### 3. `sortedData`

```javascript
const sortedData = [...filteredData].sort((a, b) => {
    const aValue = getSortValue(a, sortConfig.key)
    const bValue = getSortValue(b, sortConfig.key)
    const result = compareValues(aValue, bValue)
    return sortConfig.direction === "asc" ? result : -result
})
```
**What it does:** Creates the final sorted list of products.
**How it works:** 
- `[...filteredData]` makes a safe copy of the data array so we don't accidentally mutate the original data.
- It uses `.sort()` to compare every item in the list against each other.
- It grabs the two values using `getSortValue`, and runs them through `compareValues`. 
- Finally, it checks the store's `sortConfig.direction`. If the user wants ascending order (`asc`), it keeps the result. If they want descending (`desc`), it flips the math to negative (`-result`), which reverses the list.

---

### 4. `totalPages`

```javascript
const totalPages = Math.max(1, Math.ceil(sortedData.length / itemsPerPage))
```
**What it does:** Calculates how many pages are needed to display all the products.
**How it works:** It divides the total number of products by the items per page (e.g., 25 products / 10 per page = 2.5). `Math.ceil` rounds this up to the nearest whole number (so 2.5 becomes 3 pages). `Math.max(1, ...)` acts as a safety net ensuring you always have at least `1` page, even if the table is completely empty.

---

### 5. `useEffect` (The Boundary Check)

```javascript
useEffect(() => {
    if (pageNumber < 1) {
        setPage(1)
        return
    }
    if (pageNumber > totalPages) {
        setPage(totalPages)
    }
}, [pageNumber, totalPages, setPage])
```
**What it does:** Prevents the user from getting stuck on an empty, non-existent page.
**How it works:** Imagine a user is on **Page 5**, and then they type something into the search bar. The search results might only have enough items to fill **2 Pages**. Without this effect, the grid would still try to display Page 5, showing a completely blank table. This effect watches the total pages, and if the user is out of bounds (`pageNumber > totalPages`), it immediately snaps them back to the new highest page.

---

### 6. `startIndex` and `pageRows`

```javascript
const startIndex = (pageNumber - 1) * itemsPerPage
const pageRows = sortedData.slice(startIndex, startIndex + itemsPerPage)
```
**What it does:** Slices out the exact chunk of rows to display right now.
**How it works:** 
- **`startIndex`**: If you are on Page 2, and showing 10 items per page, the start index is `(2 - 1) * 10 = 10`. This means we want to start grabbing from the 10th item in the array.
- **`pageRows`**: `slice()` takes a start and end point. It slices from index `10` up to index `20` (`10 + 10`). This gives us exactly items 11 through 20 to hand over to the `Table` component to draw on the screen!
