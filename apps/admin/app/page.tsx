import { buttonVariants } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';
import Link from 'next/link';

export default function Home() {
	const home = process.env.NEXT_PUBLIC_HOME_URL || '/';

	console.log('Home URL:', home);
	return (
		<div>
			<div className="mb-10">
				<a href={home} className={cn(buttonVariants({}))}>
					Go to home
				</a>
				<a href="/admin" className={cn(buttonVariants({ variant: 'default' }))}>
					Go to Admin
				</a>
			</div>

			<h1 className={cn('text-3xl font-bold underline')}>Admin App</h1>
		</div>
	);
}
