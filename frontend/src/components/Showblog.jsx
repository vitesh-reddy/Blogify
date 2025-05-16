function ShowBlog({ blog, onBack }) {
    if (!blog) return null;
    return (
        <div className="max-w-3xl mx-auto mt-10 p-8 bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-2xl shadow-2xl border border-blue-200">
            <button
                onClick={onBack}
                className="mb-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                ← Back
            </button>
            <h1 className="text-5xl font-extrabold mb-4 text-blue-800 drop-shadow">{blog.title}</h1>
            <div className="mb-4 flex flex-wrap gap-2">
                {blog.tags && blog.tags.split(',').map(tag => (
                    <span key={tag} className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                        #{tag.trim()}
                    </span>
                ))}
            </div>
            <div className="prose prose-lg max-w-none mb-8" dangerouslySetInnerHTML={{ __html: blog.content }} />
            <div className="text-right text-gray-500 text-sm">
                Published: {new Date(blog.updated_at).toLocaleString()}
            </div>
        </div>
    );
}

export default ShowBlog;