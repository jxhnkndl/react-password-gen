import React from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import PasswordDisplay from './components/PasswordDisplay';
import PasswordForm from './components/PasswordForm';

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <main className="container px-6">
        <PasswordDisplay />
        <PasswordForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
