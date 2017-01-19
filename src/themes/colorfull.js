const bgColor = "#ffffff"
const textColor = "#000000"
const textColorFooter = "#ffffff"
const buttonBgColor = "#248ac4"
const buttonTextColor = "#fff"
const linkColor = "#57a8c9"
const accentColor = "#d64242"
const headerbackground = "#000000"
const background = "#61dafb"

const postBackground = "#57a8c9"
const postColor = "#ffffff"
const postNameColor = "#000000"
const postEditColor = "#a6642b"

const buttonStyles = {
	background: buttonBgColor,
	color: buttonTextColor,
	textShadow: "none",
	"&:hover": {
		background: background,
		//color: linkColor,
	},
}
const buttonLoginStyles = {
	background: "rgb(66, 184, 221)",
	color: buttonTextColor,
	textShadow: "none",
	"&:hover": {
		background: background,
		//color: linkColor,
	},
}

const linkStyles = {
	color: linkColor,
	"&:hover, &:active, &:focus": {
		color: linkColor,
	},
}

const dialogStyles = {
	container: {
		"& .Modal-content": {
			backgroundColor: bgColor,
		},
	},
	modal: {
		background: bgColor,
		color: textColor,
	},
}

export default {
	App: {
		App: {
			":global": {
				body: {
					background: background,
				},
			},
		},
		Footer: {
			footerLayout: {
				background: headerbackground,
				color: textColorFooter,
			},
			container: {
				background: headerbackground,
				color: textColorFooter,
			},
		},
		TopBar: {
			topBarContainer: {
				background: headerbackground,
				color: linkColor,
			},
			link: linkStyles,
		},
		AuthenticationMenu: {
			button: buttonLoginStyles,
		},
		SettingsButton: {
			button: buttonStyles,
		},
		UserSettings: {
			...dialogStyles,
		},
	},
	Categories: {
		Categories: {
			category: {
				background: bgColor,
			},
			header: {
				color: textColor,
			},
		},
		Boards: {
			link: linkStyles,
		},
	},
	Board: {
		Board: {
			container: {
				background: bgColor,
			},
			header: {
				color: textColor,
			},
		},
		BoardSettings: {
			...dialogStyles,
		},
		Thread: {
			title: linkStyles,
			threadContainer: {
				color: linkColor,
			},
		},
		Threads: {
			noThreadsYet: {
				color: textColor,
			},
		},
		SettingsButton: {
			button: buttonStyles,
		},
		NewThreadButton: {
			button: buttonStyles,
		},
		PostNewThread: {
			container: {
				background: bgColor,
			},
			displayName: {
				color: linkColor,
			},
		},
		PreviewFields: {
			topicPreview: {
				color: linkColor,
			},
			textPreview: {
				color: linkColor,
			},
		},
		TextFields: {
			topic: {
				background: bgColor,
				color: linkColor,
			},
			text: {
				background: bgColor,
				color: linkColor,
			},
		},
	},
	Profile: {
		Profile: {
			container: {
				background: bgColor,
				color: linkColor,
			},
			header: {
				color: textColor,
			},
		},
		ThreadsStarted: {
			threadLink: linkStyles,
		},
	},
	Thread: {
		Thread: {
			container: {
				background: bgColor,
			},
			header: {
				color: textColor,
			},
			lockContainer: {
				color: linkColor,
			},
		},
		ReplyToThread: {
			container: {
				background: bgColor,
			},
			displayName: {
				color: textColor,
			},
		},
		PreviewFields: {
			textPreview: {
				color: linkColor,
			},
		},
		TextFields: {
			text: {
				background: bgColor,
				color: linkColor,
			},
		},
		Post: {
			container: {
				background: postBackground,
			},
			bodyContainer: {
				color: postColor,
			},
			nameContainer: {
				color: postNameColor,
			},
			postDate: {
				color: postNameColor,
			},
			edited: {
				color: postNameColor,
			},
		},
		EditButton: {
			button: {
				color: postEditColor,
			},
		},
		DeletePostButton: {
			button: {
				color: postEditColor,
			},
		},
		ReplyButton: {
			button: {
				color: postEditColor,
			},
		},
		QuoteButton: {
			button: {
				color: postEditColor,
			},
		},
		UpvoteButton: {
			button: {
				color: postEditColor,
			},
			buttonActive: {
				color: accentColor,
			},
		},
		DeletePostDialog: {
			...dialogStyles,
		},
		DeleteDialog: {
			...dialogStyles,
		},
		LockDialog: {
			...dialogStyles,
		},
	},
}
