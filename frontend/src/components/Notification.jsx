import { useEffect } from 'react';

function Notification({ message, setMessage }) {
    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => setMessage(''), 3000);
            return () => clearTimeout(timer);
        }
    }, [message, setMessage]);

    if (!message) return null;

    return (
        <div className="mt-4 p-2 bg-green-100 text-green-700 rounded">
            {message}
        </div>
    );
}

export default Notification;