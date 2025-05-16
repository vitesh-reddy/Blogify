import { useState } from 'react';
import { signup } from '../services/api';

function Signup({ setShowLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        if (password !== confirm) {
            setError('Passwords do not match');
            return;
        }
        try {
            await signup({ email, password });
            setSuccess('Signup successful! Please login.');
            setTimeout(() => setShowLogin(true), 1500);
        } catch (err) {
            setError(err.response?.data?.message || 'Signup failed');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
            <form onSubmit={handleSignup}>
                <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full p-2 mb-4 border rounded"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full p-2 mb-4 border rounded"
                    required
                />
                <input
                    type="password"
                    value={confirm}
                    onChange={e => setConfirm(e.target.value)}
                    placeholder="Confirm Password"
                    className="w-full p-2 mb-4 border rounded"
                    required
                />
                <button type="submit" className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">
                    Sign Up
                </button>
                {error && <p className="mt-2 text-red-500">{error}</p>}
                {success && <p className="mt-2 text-green-500">{success}</p>}
            </form>
            <p className="mt-4 text-center">
                Already have an account?{' '}
                <button className="text-blue-600 underline" onClick={() => setShowLogin(true)}>
                    Login
                </button>
            </p>
        </div>
    );
}

export default Signup;