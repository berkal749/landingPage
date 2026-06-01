import { DottedSurface } from './components/ui/DottedSurface'
import { LogoAnimation } from './components/sections/LogoAnimation'





import { useState } from 'react';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? 'dark bg-black text-white' : 'bg-white text-black'}>
      {/* Background Canvas Effect */}
      <DottedSurface isDark={darkMode} />

      {/* Your Page Content */}
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-5xl font-bold tracking-tight">Dotted Surface</h1>
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="mt-6 rounded-md bg-zinc-800 px-4 py-2 text-sm text-white dark:bg-zinc-200 dark:text-black"
        >
          Toggle Theme
        </button>
      </main>
    </div>
  );
}