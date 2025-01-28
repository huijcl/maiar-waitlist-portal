import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

const industries = [
  "Restaurant Worker",
  "Hospitality",
  "Retail",
  "Service Industry",
  "Gig Worker",
  "Other"
];

const coverageTypes = [
  "Employer-provided",
  "Individual Plan (Marketplace)",
  "Medicaid",
  "Medicare",
  "No Coverage",
  "Other"
];

const healthcareServices = [
  "Primary Care",
  "Preventive Care",
  "Mental Health",
  "Dental",
  "Vision",
  "Prescription Drugs",
  "Specialist Visits",
  "Emergency Care"
];

const states = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", 
  "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", 
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", 
  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", 
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", 
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", 
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", 
  "Wisconsin", "Wyoming"
];

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
      description: "We'll notify you when Tern Health launches in your area.",
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

  const handleServiceToggle = (service: string) => {
    setSelectedServices(current =>
      current.includes(service)
        ? current.filter(s => s !== service)
        : [...current, service]
    );
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
        <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-xl space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                required
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                required
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              />
            </div>

            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              />
            </div>

            <div>
              <Label htmlFor="income">Annual Income</Label>
              <Input
                id="income"
                type="number"
                placeholder="Enter your annual income"
                value={formData.income}
                onChange={(e) => setFormData(prev => ({ ...prev, income: e.target.value }))}
              />
            </div>

            <div>
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                type="number"
                placeholder="Enter your age"
                value={formData.age}
                onChange={(e) => setFormData(prev => ({ ...prev, age: e.target.value }))}
              />
            </div>

            <div>
              <Label htmlFor="industry">Industry</Label>
              <Select 
                value={formData.industry}
                onValueChange={(value) => setFormData(prev => ({ ...prev, industry: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your industry" />
                </SelectTrigger>
                <SelectContent>
                  {industries.map((industry) => (
                    <SelectItem key={industry} value={industry.toLowerCase()}>
                      {industry}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="coverage">Current Healthcare Coverage</Label>
              <Select
                value={formData.healthcareCoverage}
                onValueChange={(value) => setFormData(prev => ({ ...prev, healthcareCoverage: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your current coverage" />
                </SelectTrigger>
                <SelectContent>
                  {coverageTypes.map((coverage) => (
                    <SelectItem key={coverage} value={coverage.toLowerCase()}>
                      {coverage}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="state">State of Residence</Label>
              <Select
                value={formData.stateOfResidence}
                onValueChange={(value) => setFormData(prev => ({ ...prev, stateOfResidence: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your state" />
                </SelectTrigger>
                <SelectContent>
                  {states.map((state) => (
                    <SelectItem key={state} value={state.toLowerCase()}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label>What healthcare services are you looking for?</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {healthcareServices.map((service) => (
                  <div key={service} className="flex items-center space-x-2">
                    <Checkbox
                      id={service}
                      checked={selectedServices.includes(service)}
                      onCheckedChange={() => handleServiceToggle(service)}
                    />
                    <Label htmlFor={service} className="cursor-pointer">
                      {service}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label htmlFor="otherServices">Other Services or Comments</Label>
              <Textarea
                id="otherServices"
                placeholder="Tell us about any other healthcare services you're interested in..."
                value={formData.otherServices}
                onChange={(e) => setFormData(prev => ({ ...prev, otherServices: e.target.value }))}
                className="h-24"
              />
            </div>
          </div>

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
