const BlogDetailedPage = () => {
  return (
    <div className="min-h-screen text-white">
      <div className="max-w-4xl mx-auto p-6">
        {/* Back Button */}
        <button className="mb-6 text-gray-400 hover:text-white transition">
          &larr; Back
        </button>

        {/* Title Section */}
        <h1 className="text-4xl font-bold mb-2">
          Ace the Javascript Interview
        </h1>
        <div className="flex items-center justify-between text-gray-400 text-sm mb-6">
          <div>
            <p>Manu Arora / July 03, 2021</p>
          </div>
          <div>
            <p>21 min read &bull; 15,734 views</p>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-8">
          <img
            src="https://via.placeholder.com/800x400" // Replace with the actual image URL
            alt="Ace the Javascript Interview"
            className="rounded-lg w-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="prose prose-invert max-w-none">
          <p>
            Recently, there is a lot of demand for Javascript developers out
            there. If youre familiar with <code>React</code> and{" "}
            <code>Angular</code>, then that will be a plus for you. But if you
            fail to answer the basics of Javascript, you will have a tough time
            clearing the tech interview rounds of the companies for which youre
            appearing.
          </p>
          <p>
            Ive compiled down all the popular concepts and questions related to
            a Javascript interview. No matter at what level of understanding
            youre currently at, this will help you out.
          </p>

          {/* Add more sections as required */}
          <h2>Why Javascript?</h2>
          <p>
            Javascript is the most widely used programming language in web
            development. Its versatile, powerful, and has a rich ecosystem of
            libraries and frameworks that make it suitable for a variety of
            applications.
          </p>

          <h2>Key Topics to Prepare</h2>
          <ul>
            <li>Understanding of ES6+ features</li>
            <li>Asynchronous programming (Promises, Async/Await)</li>
            <li>DOM manipulation and event handling</li>
            <li>Closures, scopes, and hoisting</li>
            <li>JavaScript design patterns</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailedPage;
