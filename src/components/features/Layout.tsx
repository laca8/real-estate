import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react'


// Define available themes


// Theme Content Component
const ThemeContent = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        // Check if user has a theme preference in localStorage
        const savedTheme = localStorage.getItem('theme');

        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.classList.add(savedTheme);
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light'
            ? 'dark'
            : theme === 'dark'
                ? 'system'
                : 'light';

        // Remove old theme classes
        document.documentElement.classList.remove('light', 'dark');

        if (newTheme === 'system') {
            // Check system preference
            const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light';
            document.documentElement.classList.add(systemTheme);
        } else {
            // Add new theme class
            document.documentElement.classList.add(newTheme);
        }

        // Save to localStorage
        localStorage.setItem('theme', newTheme);
        setTheme(newTheme);
    };


    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-lg transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Toggle theme"
        >
            {theme === 'light' ? (
                <Sun className="w-8 h-8 text-gray-600 font-bold" />
            ) : (
                <Moon className="w-8 h-8 text-gray-100 font-bold" />
            )}
        </button>
    );
};

// Theme Hook

export default ThemeContent