import React, { useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import Header from './layout/Header';
import Footer from './layout/Footer';
import PasswordDisplay from './components/PasswordDisplay';
import PasswordForm from './components/PasswordForm';
import { PasswordProvider } from './context/PasswordContext';
import ThemeContext from './context/ThemeContext';

function App() {
  const { isDarkTheme } = useContext(ThemeContext);

  // set app theme based on dark/light mode state
  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      isDarkTheme ? 'dark' : 'light'
    );
  }, [isDarkTheme]);

  return (
    <PasswordProvider>
      <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-base-300 to-base-100">
        <Header />
        <main className="container columns-1 md:max-w-lg px-6 m-auto">
        <motion.div
            initial={{ opacity: 0, transform: 'translateY(20px)' }}
            animate={{ opacity: 1, transform: 'translateY(0px)' }}
            transition={{ duration: 0.6 }}
          >
            <PasswordDisplay />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, transform: 'translateY(20px)' }}
            animate={{ opacity: 1, transform: 'translateY(0px)' }}
            transition={{ duration: 0.25, delay: 0.2 }}
          >
            <PasswordForm />
          </motion.div>
        </main>
        <Footer />
      </div>
    </PasswordProvider>
  );
}

export default App;
