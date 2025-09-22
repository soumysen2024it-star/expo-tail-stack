import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import logo from "@/assets/logo.png";

interface HomeProps {
  userRole: 'user' | 'admin';
  onLogout: () => void;
}

const Home = ({ userRole, onLogout }: HomeProps) => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary-glow))] text-primary-foreground p-6">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <div className="flex items-center gap-3">
            <img src={logo} alt="PRERNA" className="w-10 h-10" />
            <div>
              <h1 className="text-xl font-semibold">PRERNA</h1>
              <Badge variant="secondary" className="mt-1 bg-white/20 text-white">
                {userRole === 'admin' ? 'Administrator' : 'User'}
              </Badge>
            </div>
          </div>
          <Button 
            variant="outline" 
            size="sm"
            onClick={onLogout}
            className="border-white/30 text-white hover:bg-white/20"
          >
            Logout
          </Button>
        </div>
      </header>

      <main className="p-6 max-w-md mx-auto space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Welcome back!
          </h2>
          <p className="text-muted-foreground">
            {userRole === 'admin' 
              ? 'Access your administrative dashboard and manage system settings.'
              : 'Explore your personalized dashboard and manage your account.'
            }
          </p>
        </div>

        <div className="grid gap-4">
          <Card className="p-6 shadow-[var(--shadow-card)]">
            <h3 className="font-semibold text-lg mb-2 text-foreground">Quick Actions</h3>
            <div className="space-y-3">
              {userRole === 'admin' ? (
                <>
                  <Button variant="outline" className="w-full justify-start">
                    📊 View Analytics
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    👥 Manage Users
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    ⚙️ System Settings
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="outline" className="w-full justify-start">
                    📋 My Tasks
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    📁 Documents
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    🔔 Notifications
                  </Button>
                </>
              )}
            </div>
          </Card>

          <Card className="p-6 shadow-[var(--shadow-card)]">
            <h3 className="font-semibold text-lg mb-2 text-foreground">Recent Activity</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-foreground">Login successful</span>
                <span className="text-muted-foreground">Just now</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-foreground">Profile updated</span>
                <span className="text-muted-foreground">2 hours ago</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-foreground">Data synchronized</span>
                <span className="text-muted-foreground">1 day ago</span>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Home;