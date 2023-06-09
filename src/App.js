import React from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import PasswordDisplay from './components/PasswordDisplay';
import PasswordForm from './components/PasswordForm';
import { PasswordProvider } from './context/PasswordContext';

function App() {
  return (
    <PasswordProvider>
      <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-base-300 to-base-100">
        <Header />
        <main className="container px-6 m-auto">
          <PasswordDisplay />
          <PasswordForm />
        </main>
        <Footer />
      </div>
    </PasswordProvider>
  );
}

export default App;
