import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LoginScreen from "./components/LoginScreen";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

const queryClient = new QueryClient();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<'user' | 'admin'>('user');
  const [currentPage, setCurrentPage] = useState('home');

  const handleLogin = (role: 'user' | 'admin') => {
    setUserRole(role);
    setIsLoggedIn(true);
    setCurrentPage('home');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('home');
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home userRole={userRole} onLogout={handleLogout} />;
      case 'profile':
        return <Profile userRole={userRole} />;
      case 'settings':
        return <Settings userRole={userRole} onLogout={handleLogout} />;
      default:
        return <Home userRole={userRole} onLogout={handleLogout} />;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {!isLoggedIn ? (
          <LoginScreen onLogin={handleLogin} />
        ) : (
          <>
            {renderCurrentPage()}
            <Navigation
              currentPage={currentPage}
              onNavigate={setCurrentPage}
              userRole={userRole}
            />
          </>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
