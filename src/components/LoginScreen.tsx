import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import logo from "@/assets/logo.png";

interface LoginScreenProps {
  onLogin: (role: 'user' | 'admin') => void;
}

const LoginScreen = ({ onLogin }: LoginScreenProps) => {
  const [currentView, setCurrentView] = useState<'select' | 'user' | 'admin'>('select');
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (credentials.username && credentials.password) {
      onLogin(currentView as 'user' | 'admin');
    }
  };

  if (currentView === 'select') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-sm p-8 shadow-[var(--shadow-card)] border-2">
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <img src={logo} alt="PRERNA" className="w-16 h-16" />
            </div>
            <h1 className="text-xl font-semibold text-foreground">PRERNA</h1>
            <p className="text-primary text-sm font-medium">
              Secure login for User and Administrators
            </p>
            <div className="space-y-3">
              <p className="text-sm text-foreground">Login as:</p>
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  className="flex-1 h-12"
                  onClick={() => setCurrentView('user')}
                >
                  👤 User
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1 h-12"
                  onClick={() => setCurrentView('admin')}
                >
                  👨‍💼 Admin
                </Button>
              </div>
            </div>
            <Button 
              className="w-full h-12 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary-glow))] hover:opacity-90 transition-opacity"
              onClick={() => setCurrentView('user')}
            >
              Login
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-sm p-8 shadow-[var(--shadow-card)] border-2">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <img src={logo} alt="PRERNA" className="w-16 h-16" />
            </div>
            <h1 className="text-xl font-semibold text-foreground">PRERNA</h1>
            <p className="text-primary text-sm font-medium">
              Secure login for {currentView === 'user' ? 'User' : 'Admin'}
            </p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-primary text-sm">
                {currentView === 'user' ? 'Username' : 'Admin Username Id'}
              </Label>
              <Input
                id="username"
                type="text"
                placeholder={currentView === 'user' ? 'Enter User Id' : 'Enter Admin Id'}
                value={credentials.username}
                onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                className="h-12"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-primary text-sm">
                Admin Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter Password"
                value={credentials.password}
                onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                className="h-12"
                required
              />
            </div>
          </div>

          <div className="space-y-3">
            <Button 
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary-glow))] hover:opacity-90 transition-opacity"
            >
              Login as {currentView === 'user' ? 'User' : 'Admin'}
            </Button>
            
            <Button 
              type="button"
              variant="ghost"
              onClick={() => setCurrentView('select')}
              className="w-full text-muted-foreground"
            >
              ← Back to role selection
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default LoginScreen;