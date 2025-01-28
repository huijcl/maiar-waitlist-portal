import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

export const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Successfully joined waitlist!",
      description: "We'll notify you when Tern Health launches in your area.",
    });
    
    setEmail("");
    setIsLoading(false);
  };

  return (
    <div id="waitlist" className="bg-tern-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Join our waitlist
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Be the first to know when Tern Health launches in your area. Early members get exclusive benefits and priority access.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-md">
          <div className="flex gap-x-4">
            <Input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="min-w-0 flex-auto"
            />
            <Button 
              type="submit" 
              disabled={isLoading}
              className="bg-tern-600 hover:bg-tern-700 text-white"
            >
              {isLoading ? "Joining..." : "Join Now"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};