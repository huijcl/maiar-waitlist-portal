import { Shield, Heart, DollarSign } from "lucide-react";

const features = [
  {
    name: 'NYC Restaurant Worker Coverage',
    description: 'Tailored healthcare coverage designed specifically for NYC restaurant and hospitality workers.',
    icon: DollarSign,
  },
  {
    name: 'Simple & Transparent',
    description: 'Clear pricing and coverage details. No hidden fees or surprise bills.',
    icon: Shield,
  },
  {
    name: 'Quality Care',
    description: 'Access to a network of trusted NYC healthcare providers and specialists.',
    icon: Heart,
  },
];

export const Features = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-tern-600">Why Choose Maiar</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Healthcare coverage for NYC hospitality workers
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Note: We currently provide coverage for primary care visits and lab work with affordable copays. This is not a comprehensive health insurance plan.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-tern-100">
                  <feature.icon className="h-8 w-8 text-tern-600" aria-hidden="true" />
                </div>
                <dt className="text-xl font-semibold leading-7 text-gray-900">
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};