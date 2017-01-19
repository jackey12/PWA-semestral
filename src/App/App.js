import React, {Component} from 'react'
import {styles} from 'refire-app'
import Footer from './Footer'
import TopBar from './TopBar'
import LoadingSpinner from './LoadingSpinner'
import UserSettings from './UserSettings'
import globalStyles from '../globalStyles'

class App extends Component {

	constructor(props) {
		super(props)
		this.state = {
			settingsVisible: false,
		}
		this.toggleSettings = this.toggleSettings.bind(this)
	}

	toggleSettings() {
		this.setState({settingsVisible: !this.state.settingsVisible})
	}

	render() {
		const {
			siteName,
			children,
			loading,
			user,
			board,
			boardKey,
			threadKey,
			authenticatedUser,
			styles,
			theme,
		} = this.props
		const {settingsVisible} = this.state

		if (loading) {
			return <LoadingSpinner />
		}

		return (
			<div>
				<UserSettings
					visible={settingsVisible}
					toggleVisible={this.toggleSettings}
					authenticatedUser={authenticatedUser}
					user={user}
					styles={theme.UserSettings}
				/>
				<div className={styles.header}>
					<TopBar
						siteName={siteName || "default Site Name"}
						authenticatedUser={authenticatedUser}
						user={user}
						board={board}
						boardKey={boardKey}
						threadKey={threadKey}
						toggleSettings={this.toggleSettings}
						styles={theme.TopBar}
						theme={theme}
					/>
				</div>
				<div className={styles.main + " width-limit"}>
					{children}
				</div>
				<div className={styles.footer}>
					<Footer styles={theme.Footer}/>
				</div>
			</div>
		)
	}
}

const css = {
	// register global styles
	":global": globalStyles,
	main: {
		marginBottom: "180px",
	},
	header: {
		marginBottom: "40px",
	},
	footer: {
		position: "absolute",
		left: "0",
		bottom: "0",
		height: "100px",
		width: "100%",
	},
}

export default styles(
	css,
	App
)
