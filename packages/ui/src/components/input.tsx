'use client';
import * as React from 'react';

import { cn } from '@workspace/ui/lib/utils';

import { Eye, EyeOff } from 'lucide-react';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
	const [showPassword, setShowPassword] = React.useState(false);

	const showPasswordHandler = () => {
		setShowPassword((prev) => !prev);
	};

	const inputType = type === 'password' ? (showPassword ? 'text' : 'password') : type;
	return (
		<div className="relative">
			<input
				type={inputType}
				data-slot="input"
				className={cn(
					'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-12 w-full min-w-0 rounded-lg border bg-transparent px-3 py-1 text-base  transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
					'focus-visible:border-ring focus-visible:ring-ring/15 focus-visible:ring-[1px]',
					'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive 2xl:h-16 2xl:text-base',
					className,
				)}
				autoComplete={type === 'password' ? 'off' : 'on'}
				{...props}
			/>
			{type === 'password' && (
				<button
					className="absolute right-5 top-1/2 opacity-50 -translate-y-1/2 cursor-pointer size-5 2xl:size-10 inline-block"
					onClick={showPasswordHandler}
					type="button"
				>
					{showPassword ? <EyeOff /> : <Eye />}
				</button>
			)}
		</div>
	);
}
export { Input };
