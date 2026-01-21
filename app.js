let books = JSON.parse(localStorage.getItem("books")) || [];

// DOM
const bookList = document.getElementById("bookList");
const addBtn = document.getElementById("addBtn");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const searchInput = document.getElementById("search");
const sortSelect = document.getElementById("sort");
const fetchBtn = document.getElementById("fetchBtn");
const loader = document.getElementById("loader");

// Subjects for random fetch
const subjects = ["fantasy", "science", "history", "romance", "programming"];

// Render
function renderBooks(list) {
  bookList.innerHTML = "";

  if (list.length === 0) {
    bookList.innerHTML = "<li>No books found.</li>";
    return;
  }

  list.forEach((book, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${book.title} by ${book.author}</span>
      <button onclick="removeBook(${index})">Remove</button>
    `;
    bookList.appendChild(li);
  });
}

// Add
addBtn.addEventListener("click", () => {
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();

  if (!title || !author) return alert("Fill all fields");

  books.push({ title, author });
  saveAndRender();

  titleInput.value = "";
  authorInput.value = "";
});

// Remove
function removeBook(index) {
  books.splice(index, 1);
  saveAndRender();
}

// Search + Sort
searchInput.addEventListener("input", filterAndRender);
sortSelect.addEventListener("change", filterAndRender);

function filterAndRender() {
  const query = searchInput.value.toLowerCase();

  let filtered = books.filter(
    (b) =>
      b.title.toLowerCase().includes(query) ||
      b.author.toLowerCase().includes(query),
  );

  const sort = sortSelect.value;
  if (sort === "title-asc")
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  if (sort === "title-desc")
    filtered.sort((a, b) => b.title.localeCompare(a.title));
  if (sort === "author-asc")
    filtered.sort((a, b) => a.author.localeCompare(b.author));
  if (sort === "author-desc")
    filtered.sort((a, b) => b.author.localeCompare(a.author));

  renderBooks(filtered);
}

// Async Random Fetch
fetchBtn.addEventListener("click", async () => {
  const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];

  loader.classList.remove("hidden");
  fetchBtn.disabled = true;
  fetchBtn.textContent = "Loading...";

  try {
    const res = await fetch(
      `https://openlibrary.org/subjects/${randomSubject}.json?limit=5`,
    );
    const data = await res.json();

    const newBooks = data.works.map((work) => ({
      title: work.title,
      author: work.authors[0]?.name || "Unknown",
    }));

    books = [...books, ...newBooks];
    saveAndRender();
  } catch (err) {
    alert("Failed to load books");
  } finally {
    loader.classList.add("hidden");
    fetchBtn.disabled = false;
    fetchBtn.textContent = "📚 Load Random Books";
  }
});

// Storage
function saveAndRender() {
  localStorage.setItem("books", JSON.stringify(books));
  filterAndRender();
}

// Init
renderBooks(books);
