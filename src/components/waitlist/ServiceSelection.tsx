import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { healthcareServices } from "./constants";

interface ServiceSelectionProps {
  selectedServices: string[];
  setSelectedServices: (services: string[]) => void;
  otherServices: string;
  setFormData: (data: any) => void;
}

export const ServiceSelection = ({ 
  selectedServices, 
  setSelectedServices, 
  otherServices,
  setFormData 
}: ServiceSelectionProps) => {
  const handleServiceToggle = (service: string) => {
    setSelectedServices(
      selectedServices.includes(service)
        ? selectedServices.filter(s => s !== service)
        : [...selectedServices, service]
    );
  };

  return (
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

      <div>
        <Label htmlFor="otherServices">Other Services or Comments</Label>
        <Textarea
          id="otherServices"
          placeholder="Tell us about any other healthcare services you're interested in..."
          value={otherServices}
          onChange={(e) => setFormData(prev => ({ ...prev, otherServices: e.target.value }))}
          className="h-24"
        />
      </div>
    </div>
  );
};