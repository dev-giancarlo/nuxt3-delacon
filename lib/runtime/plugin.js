export default defineNuxtPlugin(() => {

    const router = useRouter()
    
    router.afterEach(() => {
        // Insert your script execution logic here
        if (process.client) {

            const scriptTags = document.head.getElementsByTagName('script')

            // Iterate over each script tag
            for (let i = 0; i < scriptTags.length; i++) {
                const script = scriptTags[i]
                
                // Check if the script source contains "vxml4.plavxml.com"
                if (script.src && script.src.includes('vxml4.plavxml.com')) {
                    
                    // Remove the script tag
                    script.parentNode.removeChild(script)
                }
            }
            
            const html = document.createElement('script')
            html.async = true
            html.src = `//vxml4.plavxml.com/sited/ref/ctrk/<%= options.mid %>-<%= options.cid %>`
            document.head.appendChild(html)

        }
    })
    
})