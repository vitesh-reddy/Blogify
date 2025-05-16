import { useState, useEffect } from 'react';
import BlogEditor from './components/BlogEditor';
import BlogList from './components/BlogList';
import Login from './components/Login';
import Signup from './components/Signup';
import ShowBlog from './components/ShowBlog';
import { getBlogs, logout } from './services/api';

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [blogs, setBlogs] = useState({ drafts: [], published: [] });
    const [view, setView] = useState('editor');
    const [editBlog, setEditBlog] = useState(null);
    const [showLogin, setShowLogin] = useState(true);
    const [showBlog, setShowBlog] = useState(null);

    useEffect(() => {
        if (loggedIn) fetchBlogs();
    }, [loggedIn]);

    const fetchBlogs = async () => {
        try {
            const data = await getBlogs();
            setBlogs({
                drafts: data.filter(blog => blog.status === 'draft'),
                published: data.filter(blog => blog.status === 'published')
            });
        } catch (error) {
            setLoggedIn(false);
        }
    };

    const handleLogout = async () => {
        await logout();
        setLoggedIn(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200">
            {!loggedIn ? (
                showLogin ? (
                    <Login setLoggedIn={setLoggedIn} setShowLogin={setShowLogin} />
                ) : (
                    <Signup setShowLogin={setShowLogin} />
                )
            ) : showBlog ? (
                <ShowBlog blog={showBlog} onBack={() => setShowBlog(null)} />
            ) : (
                <>
                    <div className="flex justify-end p-4">
                        <button
                            onClick={handleLogout}
                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                        >
                            Logout
                        </button>
                    </div>
                    {view === 'editor' ? (
                        <BlogEditor
                            setView={setView}
                            fetchBlogs={fetchBlogs}
                            editBlog={editBlog}
                            setEditBlog={setEditBlog}
                        />
                    ) : (
                        <BlogList
                            blogs={blogs}
                            setView={setView}
                            fetchBlogs={fetchBlogs}
                            setEditBlog={setEditBlog}
                            setShowBlog={setShowBlog}
                        />
                    )}
                </>
            )}
        </div>
    );
}

export default App;