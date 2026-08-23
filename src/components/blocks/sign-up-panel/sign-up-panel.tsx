import Button from '@/components/elements/button/button';

import { useForm } from 'react-hook-form';

type SignUpFormValues = {
  email: string;
};

export default function SignUpPanel() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormValues>({
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (data: SignUpFormValues) => {
    console.log(data);

    // send email;
  };

  return (
    <div className="flex flex-col gap-8 border-r border-l p-6" id="subscription">
      <h2 className="text-h2">Sign Up for Our Newsletters</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <p className="text-content">
          Stay informed with the latest news, updates, and exclusive content delivered straight to your inbox.
        </p>
        <input
          type="email"
          placeholder="Input your email address here"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className="min-h-10 grow rounded-lg border px-6 py-2 font-semibold tracking-wider"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Please enter a valid email address',
            },
          })}
        />

        {errors.email && (
          <p id="email-error" className="text-sm text-red-600">
            {errors.email.message}
          </p>
        )}

        <Button type="submit" view="secondary" className="ml-auto" disabled={isSubmitting}>
          {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
        </Button>
      </form>
    </div>
  );
}
