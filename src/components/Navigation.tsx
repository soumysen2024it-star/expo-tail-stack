import { Home, User, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  userRole: 'user' | 'admin';
}

const Navigation = ({ currentPage, onNavigate, userRole }: NavigationProps) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-lg">
      <div className="flex justify-around items-center py-2 px-4 max-w-md mx-auto">
        {navItems.map(({ id, label, icon: Icon }) => (
          <Button
            key={id}
            variant="ghost"
            size="sm"
            onClick={() => onNavigate(id)}
            className={`flex flex-col items-center gap-1 h-auto py-2 px-3 ${
              currentPage === id 
                ? 'text-primary bg-primary/10' 
                : 'text-muted-foreground hover:text-primary'
            }`}
          >
            <Icon size={20} />
            <span className="text-xs">{label}</span>
          </Button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;