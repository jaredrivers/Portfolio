import sanityClient from "@sanity/client";

export default sanityClient({
	projectId: "46l7gprx",
	dataset: "production",
	apiVersion: "2022-03-25",
	useCdn: false,
});
