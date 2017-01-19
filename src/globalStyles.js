export default {
	html: {
		position: "relative",
		minHeight: "100%",
	},
	body: {
		margin: "0 0 100px",
	},
	".App-logo": {
		animation: "App-logo-spin infinite 5s linear",
		height: "100px",
	},
	blockquote: {
		marginLeft: 0,
		paddingLeft: "10px",
		borderLeft: "5px solid #ddd",
	},
	p: {
		margin: 0,
	},
	// elemental overrides
	".Pagination": {
		marginBottom: 0,
	},
	".Pagination__count": {
		display: "none",
	},
	"@keyframes App-logo-spin": {
		"from": {transform: "rotate(0deg)"},
		"to": {transform: "rotate(360deg)"},
	},
	".width-limit": {
		"max-width": "980px",
		margin: "auto",
	},
	".button-secondary": {
	background: "rgb(66, 184, 221)",
	},

}
