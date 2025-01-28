import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="animate-float">
            <div className="inline-flex items-center rounded-full bg-tern-100 px-6 py-2 text-tern-700">
              Limited Time Early Access
            </div>
          </div>
          <h1 className="mt-8 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Healthcare coverage that works for you
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl">
            Join Tern Health for affordable, flexible healthcare coverage designed for modern life. Simple plans, transparent pricing, and exceptional care.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Button 
              onClick={scrollToWaitlist}
              className="bg-tern-600 hover:bg-tern-700 text-white px-8 py-6 text-lg"
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};