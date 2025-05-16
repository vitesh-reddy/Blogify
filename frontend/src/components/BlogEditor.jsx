import { useState, useCallback, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { saveDraft, publishBlog } from '../services/api';
import Notification from './Notification';
import useDebounce from '../hooks/useDebounce';

function BlogEditor({ token, setView, fetchBlogs, editBlog }) {
    const [currentBlog, setCurrentBlog] = useState(editBlog || { id: '', title: '', content: '', tags: '', status: 'draft' });
    const [notification, setNotification] = useState('');
    const [autoSaveTimer, setAutoSaveTimer] = useState(null);

    // Auto-save every 30 seconds
    useEffect(() => {
        if (!token) return;
        const interval = setInterval(() => {
            handleAutoSave();
        }, 30000);
        return () => clearInterval(interval);
    });

    // Debounced auto-save after 5s inactivity
    const debouncedSave = useDebounce(async (blogData) => {
        await handleAutoSave(blogData);
    }, 5000);

    const handleChange = useCallback((field, value) => {
        setCurrentBlog(prev => {
            const updated = { ...prev, [field]: value };
            if (field === 'title' || field === 'content' || field === 'tags') {
                debouncedSave(updated);
            }
            return updated;
        });
    }, [debouncedSave]);

    const handleAutoSave = async (blogData = currentBlog) => {
        if (!blogData.title && !blogData.content) return;
        try {
            const response = await saveDraft(blogData, token);
            setNotification('Draft auto-saved!');
            setCurrentBlog(response);
            fetchBlogs();
        } catch (error) {
            setNotification('Auto-save failed!');
        }
    };

    const handleSaveDraft = async () => {
        try {
            const response = await saveDraft(currentBlog, token);
            setNotification('Draft saved!');
            setCurrentBlog(response);
            fetchBlogs();
        } catch (error) {
            setNotification('Error saving draft!');
        }
    };

    const handlePublish = async () => {
        try {
            await publishBlog({ ...currentBlog, status: 'published' }, token);
            setNotification('Blog published!');
            setCurrentBlog({ id: '', title: '', content: '', tags: '', status: 'draft' });
            fetchBlogs();
        } catch (error) {
            setNotification('Error publishing blog!');
        }
    };

    return (
        <div className="max-w-3xl mx-auto mt-10 p-8 bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-2xl shadow-2xl border border-blue-200">
            <h2 className="text-4xl font-extrabold mb-6 text-blue-700 drop-shadow">✍️ Write Your Blog</h2>
            <input
                type="text"
                value={currentBlog.title}
                onChange={(e) => handleChange('title', e.target.value)}
                placeholder="Blog Title"
                className="w-full p-4 mb-6 border-2 border-blue-200 rounded-lg text-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
            <ReactQuill
                value={currentBlog.content}
                onChange={(value) => handleChange('content', value)}
                className="mb-6 bg-white rounded-lg"
                theme="snow"
                placeholder="Start writing your amazing story..."
            />
            <input
                type="text"
                value={currentBlog.tags}
                onChange={(e) => handleChange('tags', e.target.value)}
                placeholder="Tags (comma-separated)"
                className="w-full p-3 mb-6 border-2 border-blue-200 rounded-lg text-lg"
            />
            <div className="flex flex-wrap gap-4 justify-end">
                <button
                    onClick={handleSaveDraft}
                    className="bg-gray-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-900 transition"
                >
                    Save Draft
                </button>
                <button
                    onClick={handlePublish}
                    className="bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-green-500 hover:to-green-700 transition"
                >
                    Publish
                </button>
                <button
                    onClick={() => setView('list')}
                    className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                    View Blogs
                </button>
            </div>
            <Notification message={notification} setMessage={setNotification} />
        </div>
    );
}

export default BlogEditor;