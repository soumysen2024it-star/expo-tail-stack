import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ChevronRight, Shield, Bell, Palette, HelpCircle } from "lucide-react";
import { useState } from "react";

interface SettingsProps {
  userRole: 'user' | 'admin';
  onLogout: () => void;
}

const Settings = ({ userRole, onLogout }: SettingsProps) => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [autoSync, setAutoSync] = useState(true);

  const settingsItems = [
    { 
      icon: Shield,
      title: 'Security & Privacy',
      description: 'Manage your account security',
      action: 'navigate'
    },
    { 
      icon: Palette,
      title: 'Appearance',
      description: 'Customize app theme',
      action: 'navigate'
    },
    { 
      icon: HelpCircle,
      title: 'Help & Support',
      description: 'Get assistance and documentation',
      action: 'navigate'
    }
  ];

  if (userRole === 'admin') {
    settingsItems.unshift({
      icon: Shield,
      title: 'Admin Panel',
      description: 'Access administrative controls',
      action: 'navigate'
    });
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="bg-gradient-to-r from-[hsl(var(--muted))] to-[hsl(220 13% 95%)] border-b border-border p-6">
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-bold text-foreground">Settings</h1>
          <p className="text-muted-foreground mt-1">Manage your preferences and account</p>
        </div>
      </header>

      <main className="p-6 max-w-md mx-auto space-y-6">
        <Card className="p-6 shadow-[var(--shadow-card)]">
          <h2 className="text-lg font-semibold text-foreground mb-4">Preferences</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Receive push notifications
                </p>
              </div>
              <Switch
                checked={notifications}
                onCheckedChange={setNotifications}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">Dark Mode</Label>
                <p className="text-sm text-muted-foreground">
                  Switch to dark theme
                </p>
              </div>
              <Switch
                checked={darkMode}
                onCheckedChange={setDarkMode}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">Auto Sync</Label>
                <p className="text-sm text-muted-foreground">
                  Automatically sync data
                </p>
              </div>
              <Switch
                checked={autoSync}
                onCheckedChange={setAutoSync}
              />
            </div>
          </div>
        </Card>

        <Card className="p-6 shadow-[var(--shadow-card)]">
          <h2 className="text-lg font-semibold text-foreground mb-4">General</h2>
          <div className="space-y-2">
            {settingsItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="w-full justify-between p-4 h-auto"
              >
                <div className="flex items-center gap-3">
                  <item.icon className="h-5 w-5 text-muted-foreground" />
                  <div className="text-left">
                    <div className="font-medium text-foreground">{item.title}</div>
                    <div className="text-sm text-muted-foreground">{item.description}</div>
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </Button>
            ))}
          </div>
        </Card>

        <Card className="p-6 shadow-[var(--shadow-card)]">
          <h2 className="text-lg font-semibold text-foreground mb-4">Account</h2>
          <div className="space-y-3">
            <Button variant="outline" className="w-full justify-start">
              🔄 Sync Data
            </Button>
            <Button variant="outline" className="w-full justify-start">
              📥 Export Data
            </Button>
            <Button 
              variant="destructive" 
              className="w-full justify-start"
              onClick={onLogout}
            >
              🚪 Sign Out
            </Button>
          </div>
        </Card>

        <div className="text-center text-sm text-muted-foreground">
          <p>PRERNA v1.0.0</p>
          <p>© 2024 All rights reserved</p>
        </div>
      </main>
    </div>
  );
};

export default Settings;