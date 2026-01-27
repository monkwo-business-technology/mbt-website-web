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

const applications = [
  'CRIBRO',
  'CASH COMPLETE',
  'IDEA WAVE',
  'BLUECANARY',
  'BLUEPRIME',
  'SIMPLEX',
  'Ticketing Application',
  'E-Commerce Tool',
  'Scheduling Application',
  'Payroll System',
] as const;

const requestDemoSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  companyName: z.string().min(1, 'Company name is required'),
  phoneNumber: z.string().optional(),
  applications: z.array(z.string()).min(1, 'Please select at least one application'),
  preferredDate: z.string().optional(),
  additionalNotes: z.string().optional(),
});

type RequestDemoFormData = z.infer<typeof requestDemoSchema>;

const inputStyles =
  'w-full px-4 py-2.5 rounded-xl bg-secondary/50 border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50';

export const RequestDemoDialog: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RequestDemoFormData>({
    resolver: zodResolver(requestDemoSchema),
    defaultValues: {
      applications: [],
    },
  });

  const onSubmit = () => {
    toast.success("Demo request submitted! We'll reach out to schedule your demo.");
    reset();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Request a Demo</DialogTitle>
          <DialogDescription>
            Select the applications you'd like to see in action and we'll schedule a personalized demo.
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
            <label className="block text-sm font-medium mb-1">Phone Number (optional)</label>
            <input type="text" placeholder="+1 (555) 000-0000" className={inputStyles} {...register('phoneNumber')} />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Applications to Demo</label>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {applications.map((app) => (
                <label key={app} className="flex items-center gap-2 text-sm cursor-pointer">
                  <input
                    type="checkbox"
                    value={app}
                    className="rounded border-border text-accent focus:ring-accent/50"
                    {...register('applications')}
                  />
                  {app}
                </label>
              ))}
            </div>
            {errors.applications && (
              <p className="text-red-500 text-xs mt-1">{errors.applications.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Preferred Demo Date (optional)</label>
            <input type="date" className={inputStyles} {...register('preferredDate')} />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Additional Notes (optional)</label>
            <textarea
              rows={3}
              placeholder="Any specific features or questions..."
              className={inputStyles}
              {...register('additionalNotes')}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-full bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors"
          >
            Request Demo
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
