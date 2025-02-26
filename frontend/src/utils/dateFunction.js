export function formatReleaseDate(date) {
	return new Date(date).toLocaleDateString("mx-MX", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
}