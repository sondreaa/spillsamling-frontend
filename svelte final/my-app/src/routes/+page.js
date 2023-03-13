import sanityClient from "@sanity/client";

const client = sanityClient({
projectId: "34pxatbq",
dataset: "production",
apiVersion: "2021-10-21",
useCdn: false
});



export async function load() {

    const data = await client.fetch(`*[_type == "spill"] | order(title asc)`);
    
    if (data) {
    
        return {
        spill: data
        
        };
    }
    return {
        status: 500,
        body: new Error("Internal Server Error")
    };

}

