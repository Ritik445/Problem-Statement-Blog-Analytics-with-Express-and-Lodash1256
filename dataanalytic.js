const _ = require('lodash');

// Assuming the blog data is in response.data
const blogs = response.data;

// Calculate the total number of blogs
const totalBlogs = blogs.length;

// Find the blog with the longest title
const longestTitleBlog = _.maxBy(blogs, 'title.length');

// Determine the number of blogs with "privacy" in the title
const privacyBlogs = blogs.filter(blog => blog.title.toLowerCase().includes('privacy'));

// Create an array of unique blog titles
const uniqueTitles = _.uniqBy(blogs, 'title');

// Prepare the response object
const stats = {
  totalBlogs,
  longestTitle: longestTitleBlog.title,
  privacyTitleCount: privacyBlogs.length,
  uniqueTitles: uniqueTitles.map(blog => blog.title)
};

res.json(stats);
