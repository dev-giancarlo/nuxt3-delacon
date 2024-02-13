import { createResolver, defineNuxtModule, addPluginTemplate } from '@nuxt/kit'

export default defineNuxtModule({
	setup(moduleOptions) {

		// Check if `mid` or `cid` is null, or if `cid` is an array with at least one element
		if ( !moduleOptions.mid || !moduleOptions.cid || (Array.isArray(moduleOptions.cid) && moduleOptions.cid.length === 0) ) {
			console.error("MID or CID should not be null.");
			return;
		}

		const resolver = createResolver(import.meta.url);

		// Convert `cid` to string if it's an array
		const processedCid = Array.isArray(moduleOptions.cid) ? moduleOptions.cid.join('-') : moduleOptions.cid

		// Retrieve the mid and `cid` from module options
		const options = {
			mid: moduleOptions.mid,
			cid: processedCid,
		};


		addPluginTemplate({
			src: resolver.resolve('runtime/plugin.js'),
			filename: 'nuxt3-delacon.js',
			mode: 'client',
			options: {
				...options
			}
		})

	}
})
