import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const startProjectSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  companyName: z.string().min(1, 'Company name is required'),
  projectType: z.string().min(1, 'Please select a project type'),
  budgetRange: z.string().min(1, 'Please select a budget range'),
  timeline: z.string().min(1, 'Please select a timeline'),
  projectDescription: z.string().min(1, 'Project description is required'),
});

type StartProjectFormData = z.infer<typeof startProjectSchema>;

const inputStyles =
  'w-full px-4 py-2.5 rounded-xl bg-secondary/50 border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50';

const projectTypes = [
  'Web Application',
  'Mobile Application',
  'Enterprise Software',
  'Data & Analytics',
  'AI/ML Solution',
  'E-commerce',
  'Other',
];

const budgetRanges = [
  'Under $10,000',
  '$10,000 - $25,000',
  '$25,000 - $50,000',
  '$50,000 - $100,000',
  '$100,000+',
];

const timelines = ['1-3 months', '3-6 months', '6-12 months', '12+ months'];

export const StartProjectDialog: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<StartProjectFormData>({
    resolver: zodResolver(startProjectSchema),
  });

  const onSubmit = () => {
    toast.success("Project inquiry submitted! We'll contact you within 24 hours.");
    reset();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Start a Project</DialogTitle>
          <DialogDescription>
            Tell us about your project and we'll get back to you within 24 hours.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input type="text" placeholder="John Doe" className={inputStyles} {...register('fullName')} />
              {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input type="email" placeholder="john@example.com" className={inputStyles} {...register('email')} />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Company Name</label>
            <input type="text" placeholder="Your Company" className={inputStyles} {...register('companyName')} />
            {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Project Type</label>
            <select className={inputStyles} {...register('projectType')}>
              <option value="">Select a project type</option>
              {projectTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            {errors.projectType && <p className="text-red-500 text-xs mt-1">{errors.projectType.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Budget Range</label>
            <select className={inputStyles} {...register('budgetRange')}>
              <option value="">Select a budget range</option>
              {budgetRanges.map((range) => (
                <option key={range} value={range}>{range}</option>
              ))}
            </select>
            {errors.budgetRange && <p className="text-red-500 text-xs mt-1">{errors.budgetRange.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Timeline</label>
            <select className={inputStyles} {...register('timeline')}>
              <option value="">Select a timeline</option>
              {timelines.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
            {errors.timeline && <p className="text-red-500 text-xs mt-1">{errors.timeline.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Project Description</label>
            <textarea
              rows={4}
              placeholder="Describe your project..."
              className={inputStyles}
              {...register('projectDescription')}
            />
            {errors.projectDescription && (
              <p className="text-red-500 text-xs mt-1">{errors.projectDescription.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-full bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors"
          >
            Submit Inquiry
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
