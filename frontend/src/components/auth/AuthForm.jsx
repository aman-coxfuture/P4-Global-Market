import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';

export function AuthForm({ schema, fields, onSubmit, error, loading, submitText }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {error && (
        <div className="p-3 text-sm text-red-500 bg-red-900/20 border border-red-500/50 rounded-sm">
          {error}
        </div>
      )}
      
      {fields.map(f => (
        <div key={f.name}>
          <label className="block text-xs font-semibold text-slate-300 mb-1">{f.label}</label>
          <Input
            type={f.type || 'text'}
            {...register(f.name)}
            error={errors[f.name]}
            placeholder={f.placeholder}
          />
          {errors[f.name] && <p className="text-red-500 text-xs mt-1">{errors[f.name].message}</p>}
        </div>
      ))}
      
      <Button type="submit" variant="action" className="w-full mt-6" disabled={loading}>
        {loading ? 'Processing...' : submitText}
      </Button>
    </form>
  );
}
