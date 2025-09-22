import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import logo from "@/assets/logo.png";

interface ProfileProps {
  userRole: 'user' | 'admin';
}

const Profile = ({ userRole }: ProfileProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: userRole === 'admin' ? 'Admin User' : 'John Doe',
    email: userRole === 'admin' ? 'admin@prerna.com' : 'john.doe@prerna.com',
    phone: '+1 234 567 8900',
    department: userRole === 'admin' ? 'Administration' : 'Operations'
  });

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(315 65% 80%)] text-accent-foreground p-6">
        <div className="max-w-md mx-auto text-center">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <img src={logo} alt="Profile" className="w-20 h-20 rounded-full bg-white p-2" />
              <Badge 
                variant="secondary" 
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white text-accent"
              >
                {userRole === 'admin' ? 'Admin' : 'User'}
              </Badge>
            </div>
          </div>
          <h1 className="text-xl font-semibold">{profile.name}</h1>
          <p className="text-accent-foreground/80">{profile.email}</p>
        </div>
      </header>

      <main className="p-6 max-w-md mx-auto space-y-6">
        <Card className="p-6 shadow-[var(--shadow-card)]">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-foreground">Profile Information</h2>
            <Button
              variant="outline"
              size="sm"
              onClick={() => isEditing ? handleSave() : setIsEditing(true)}
            >
              {isEditing ? 'Save' : 'Edit'}
            </Button>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm text-muted-foreground">Full Name</Label>
              {isEditing ? (
                <Input
                  id="name"
                  value={profile.name}
                  onChange={(e) => setProfile({...profile, name: e.target.value})}
                />
              ) : (
                <p className="text-foreground font-medium">{profile.name}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm text-muted-foreground">Email</Label>
              {isEditing ? (
                <Input
                  id="email"
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile({...profile, email: e.target.value})}
                />
              ) : (
                <p className="text-foreground font-medium">{profile.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm text-muted-foreground">Phone</Label>
              {isEditing ? (
                <Input
                  id="phone"
                  value={profile.phone}
                  onChange={(e) => setProfile({...profile, phone: e.target.value})}
                />
              ) : (
                <p className="text-foreground font-medium">{profile.phone}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="department" className="text-sm text-muted-foreground">Department</Label>
              {isEditing ? (
                <Input
                  id="department"
                  value={profile.department}
                  onChange={(e) => setProfile({...profile, department: e.target.value})}
                />
              ) : (
                <p className="text-foreground font-medium">{profile.department}</p>
              )}
            </div>
          </div>
        </Card>

        <Card className="p-6 shadow-[var(--shadow-card)]">
          <h3 className="font-semibold text-lg mb-4 text-foreground">Account Statistics</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-primary/10 rounded-lg">
              <div className="text-2xl font-bold text-primary">127</div>
              <div className="text-sm text-muted-foreground">Days Active</div>
            </div>
            <div className="text-center p-4 bg-accent/10 rounded-lg">
              <div className="text-2xl font-bold text-accent">42</div>
              <div className="text-sm text-muted-foreground">
                {userRole === 'admin' ? 'Users Managed' : 'Tasks Completed'}
              </div>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Profile;