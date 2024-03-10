import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { ComponentProps } from 'react';

export function useSeoProps(
	props: Partial<ComponentProps<typeof NextSeo>> = {},
): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();

	const title = 'Shantanu ─ developer';
	const description = "Hey 👋 I'm Shantanu, a developer";

	return {
		title,
		description,
		canonical: `https://shxntanu.dev/${router.asPath}`,
		openGraph: {
			title,
			description,
			site_name: 'Shantanu',
			url: `https://shxntanu.dev/${router.asPath}`,
			type: 'website',
			images: [
				{
					url: 'https://shxntanu.vercel.app/banner.png',
					alt: description,
					width: 1280,
					height: 720,
				},
			],
		},
		twitter: {
			cardType: 'summary_large_image',
			handle: '@shxntanu',
			site: '@shxntanu',
		},
		...props,
	};
}
