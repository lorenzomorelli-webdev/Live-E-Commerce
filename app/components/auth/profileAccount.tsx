import { User } from "@supabase/supabase-js";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { signOut } from "@/app/actions/auth";

export function Account({ user }: { user: User }) {
  return (
    <Card className="max-w-md mx-auto my-8">
      <div>Bentornato {user.user_metadata.full_name}!</div>
      <CardHeader>
        <div className="flex items-center space-x-4">
          <Avatar className="h-20 w-20">
            <AvatarImage
              src="/avatar.webp"
              alt={`${user.user_metadata.full_name}'s avatar`}
            />
            <AvatarFallback>{user.user_metadata.full_name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-2xl">{user.user_metadata.full_name}</CardTitle>
            <p className="text-sm text-muted-foreground">{user.email}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between">
            <Label>Member Since</Label>
            <span className="font-medium">January 2023</span>
          </div>
          <div className="flex justify-between">
            <Label>Orders</Label>
            <span className="font-medium">23</span>
          </div>
          <div className="flex justify-between">
            <Label>Wishlist Items</Label>
            <span className="font-medium">7</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <form>
          <Button
            className="w-full"
            formAction={signOut}>
            Logout
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
