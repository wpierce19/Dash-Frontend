import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { useThemeStore } from './useThemeStore';

// Component to toggle between light and dark themes
const AppTheme = () => {
    const isDarkMode = useThemeStore((s) => s.isDarkMode);
    const toggleTheme = useThemeStore((s) => s.toggleTheme);

  return (
    <button
        onClick={toggleTheme}
        className='block w-full text-left px-4 py-2 hover:bg-gray-100'
    >
        {isDarkMode ? (
            <SunIcon className='h-5 w-5 text-yellow-400 inline mr-2'/>
        ) : (
            <MoonIcon className='h-5 w-5 text-gray-600 inline mr-2'/>
        )}
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default AppTheme;