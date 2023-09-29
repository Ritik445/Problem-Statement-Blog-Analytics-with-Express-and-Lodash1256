app.get('/api/blog-search', (req, res) => {
  const query = req.query.query.toLowerCase();
  const matchingBlogs = blogs.filter(blog => blog.title.toLowerCase().includes(query));
  res.json(matchingBlogs);
});
