// Default Movies (ඩේටාබේස් එකේ මුලින්ම තියෙන ෆිල්ම්ස් ටික)
const defaultMovies = [
    { title: "Cyber Future", genre: "Action • Sci‑Fi", img: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1200" },
    { title: "Shadow World", genre: "Thriller • Mystery", img: "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?q=80&w=1200" },
    { title: "Dream Escape", genre: "Adventure • Fantasy", img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200" },
    { title: "Last Horizon", genre: "Drama • Sci‑Fi", img: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=1200" }
];

// ඩේටාබේස් එක මුලින්ම සෙට් කිරීම
if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify([
        { name: "Admin", email: "admin@cineflex.com", password: "admin123", role: "admin" }
    ]));
}
if (!localStorage.getItem('movies')) {
    localStorage.setItem('movies', JSON.stringify(defaultMovies));
}

// Helper Functions
const DB = {
    getUsers: () => JSON.parse(localStorage.getItem('users')),
    getMovies: () => JSON.parse(localStorage.getItem('movies')),
    saveMovie: (movie) => {
        let movies = DB.getMovies();
        movies.push(movie);
        localStorage.setItem('movies', JSON.stringify(movies));
    },
    registerUser: (user) => {
        let users = DB.getUsers();
        users.push({...user, role: 'user'});
        localStorage.setItem('users', JSON.stringify(users));
    }
};