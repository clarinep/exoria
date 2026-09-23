// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeGalaxy from 'starlight-theme-galaxy';

// https://astro.build/config
export default defineConfig({
	site: 'https://clarinep.github.io',
	base: '/exoria',
	integrations: [
		starlight({
			title: 'Exoria',
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/clarinep/exoria',
				},
			],
			customCss: [
				'./src/styles/custom.css',
			],
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			plugins: [
				starlightThemeGalaxy(),
			],
		}),
	],
});
