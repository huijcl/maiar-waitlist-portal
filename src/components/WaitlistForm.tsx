import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { FormFields } from "./waitlist/FormFields";
import { ServiceSelection } from "./waitlist/ServiceSelection";

export const WaitlistForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    income: "",
    age: "",
    industry: "",
    healthcareCoverage: "",
    stateOfResidence: "",
    otherServices: ""
  });
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    console.log("Form submission:", { ...formData, selectedServices });
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Successfully joined waitlist!",
      description: "We'll notify you when Maiar Health launches in your area.",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      income: "",
      age: "",
      industry: "",
      healthcareCoverage: "",
      stateOfResidence: "",
      otherServices: ""
    });
    setSelectedServices([]);
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
            Be the first to know when Maiar Health launches in your area. We're gauging demand to ensure we build the best coverage network for your needs. Early members get exclusive benefits and priority access.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-xl space-y-6">
          <FormFields formData={formData} setFormData={setFormData} />
          <ServiceSelection 
            selectedServices={selectedServices}
            setSelectedServices={setSelectedServices}
            otherServices={formData.otherServices}
            setFormData={setFormData}
          />
          <Button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-tern-600 hover:bg-tern-700 text-white"
          >
            {isLoading ? "Joining..." : "Join Waitlist"}
          </Button>
        </form>
      </div>
    </div>
  );
};