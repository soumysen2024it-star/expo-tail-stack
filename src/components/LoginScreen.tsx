import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import logo from "@/assets/logo.png";

interface LoginScreenProps {
  onLogin: (role: 'user' | 'admin') => void;
}

const LoginScreen = ({ onLogin }: LoginScreenProps) => {
  const [currentView, setCurrentView] = useState<'select' | 'user-login' | 'admin-login' | 'user-signup' | 'admin-signup' | 'profile'>('select');
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });
  const [profileData, setProfileData] = useState({
    name: '',
    age: '',
    phone: '',
    emergencyContact1: '',
    emergencyContact2: ''
  });
  const [selectedRole, setSelectedRole] = useState<'user' | 'admin'>('user');

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (credentials.username && credentials.password) {
      onLogin(selectedRole);
    }
  };

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (credentials.username && credentials.password && credentials.confirmPassword) {
      if (credentials.password === credentials.confirmPassword) {
        setCurrentView('profile');
      }
    }
  };

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (profileData.name && profileData.age && profileData.phone && profileData.emergencyContact1) {
      onLogin(selectedRole);
    }
  };

  // Role Selection Screen
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
                  onClick={() => {
                    setSelectedRole('user');
                    setCurrentView('user-login');
                  }}
                >
                  👤 User
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1 h-12"
                  onClick={() => {
                    setSelectedRole('admin');
                    setCurrentView('admin-login');
                  }}
                >
                  👨‍💼 Admin
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground">Don't have an account?</p>
              <div className="flex gap-3">
                <Button 
                  variant="ghost" 
                  className="flex-1 text-primary"
                  onClick={() => {
                    setSelectedRole('user');
                    setCurrentView('user-signup');
                  }}
                >
                  Sign up as User
                </Button>
                <Button 
                  variant="ghost" 
                  className="flex-1 text-primary"
                  onClick={() => {
                    setSelectedRole('admin');
                    setCurrentView('admin-signup');
                  }}
                >
                  Sign up as Admin
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  // Profile Completion Screen
  if (currentView === 'profile') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md p-8 shadow-[var(--shadow-card)] border-2">
          <form onSubmit={handleProfileSubmit} className="space-y-6">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <img src={logo} alt="PRERNA" className="w-16 h-16" />
              </div>
              <h1 className="text-xl font-semibold text-foreground">Complete Your Profile</h1>
              <p className="text-primary text-sm font-medium">
                Please provide additional information
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-primary text-sm">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={profileData.name}
                  onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                  className="h-12"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="age" className="text-primary text-sm">Age</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="Enter your age"
                  value={profileData.age}
                  onChange={(e) => setProfileData({...profileData, age: e.target.value})}
                  className="h-12"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-primary text-sm">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={profileData.phone}
                  onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                  className="h-12"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="emergency1" className="text-primary text-sm">Emergency Contact 1</Label>
                <Input
                  id="emergency1"
                  type="tel"
                  placeholder="Emergency contact number"
                  value={profileData.emergencyContact1}
                  onChange={(e) => setProfileData({...profileData, emergencyContact1: e.target.value})}
                  className="h-12"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="emergency2" className="text-primary text-sm">Emergency Contact 2 (Optional)</Label>
                <Input
                  id="emergency2"
                  type="tel"
                  placeholder="Second emergency contact"
                  value={profileData.emergencyContact2}
                  onChange={(e) => setProfileData({...profileData, emergencyContact2: e.target.value})}
                  className="h-12"
                />
              </div>
            </div>

            <div className="space-y-3">
              <Button 
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary-glow))] hover:opacity-90 transition-opacity"
              >
                Complete Registration
              </Button>
              
              <Button 
                type="button"
                variant="ghost"
                onClick={() => setCurrentView('select')}
                className="w-full text-muted-foreground"
              >
                ← Back to start
              </Button>
            </div>
          </form>
        </Card>
      </div>
    );
  }

  // Login and Signup Forms
  const isLogin = currentView.includes('login');
  const isSignup = currentView.includes('signup');
  const roleText = selectedRole === 'user' ? 'User' : 'Admin';

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-sm p-8 shadow-[var(--shadow-card)] border-2">
        <form onSubmit={isLogin ? handleLoginSubmit : handleSignupSubmit} className="space-y-6">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <img src={logo} alt="PRERNA" className="w-16 h-16" />
            </div>
            <h1 className="text-xl font-semibold text-foreground">PRERNA</h1>
            <p className="text-primary text-sm font-medium">
              {isLogin ? `Secure login for ${roleText}` : `Sign up as ${roleText}`}
            </p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-primary text-sm">
                {selectedRole === 'user' ? 'Username' : 'Admin Username ID'}
              </Label>
              <Input
                id="username"
                type="text"
                placeholder={selectedRole === 'user' ? 'Enter User ID' : 'Enter Admin ID'}
                value={credentials.username}
                onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                className="h-12"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-primary text-sm">
                Password
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

            {isSignup && (
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-primary text-sm">
                  Confirm Password
                </Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  value={credentials.confirmPassword}
                  onChange={(e) => setCredentials({...credentials, confirmPassword: e.target.value})}
                  className="h-12"
                  required
                />
              </div>
            )}
          </div>

          <div className="space-y-3">
            <Button 
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary-glow))] hover:opacity-90 transition-opacity"
            >
              {isLogin ? `Login as ${roleText}` : `Sign up as ${roleText}`}
            </Button>
            
            <div className="flex justify-between text-xs">
              <Button 
                type="button"
                variant="ghost"
                onClick={() => setCurrentView('select')}
                className="text-muted-foreground p-0 h-auto"
              >
                ← Back
              </Button>
              
              {isLogin && (
                <Button 
                  type="button"
                  variant="ghost"
                  onClick={() => setCurrentView(selectedRole === 'user' ? 'user-signup' : 'admin-signup')}
                  className="text-primary p-0 h-auto"
                >
                  Need an account? Sign up
                </Button>
              )}
              
              {isSignup && (
                <Button 
                  type="button"
                  variant="ghost"
                  onClick={() => setCurrentView(selectedRole === 'user' ? 'user-login' : 'admin-login')}
                  className="text-primary p-0 h-auto"
                >
                  Have an account? Login
                </Button>
              )}
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default LoginScreen;