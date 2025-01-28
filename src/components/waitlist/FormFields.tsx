import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { industries, coverageTypes, states } from "./constants";

interface FormFieldsProps {
  formData: {
    name: string;
    email: string;
    phone: string;
    income: string;
    age: string;
    industry: string;
    healthcareCoverage: string;
    stateOfResidence: string;
    otherServices: string;
  };
  setFormData: (data: any) => void;
}

export const FormFields = ({ formData, setFormData }: FormFieldsProps) => {
  return (
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
    </div>
  );
};