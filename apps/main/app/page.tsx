import { buttonVariants } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';
import Link from 'next/link';

export default function Home() {
	return (
		<div>
			<div className="mb-10">
				<Link href="/" className={cn(buttonVariants({}))}>
					Go to home
				</Link>
				<a href="/admin" className={cn(buttonVariants({ variant: 'default' }))}>
					Go to Admin
				</a>
			</div>

			<h1 className={cn('text-3xl font-bold underline')}>Main App</h1>
		</div>
	);
}
