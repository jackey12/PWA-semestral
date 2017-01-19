import React from 'react'
import {Link, styles} from 'refire-app'
import AuthenticationMenu from './AuthenticationMenu'
import BoardLink from './BoardLink'
import SettingsButton from './SettingsButton'
import logo from '../logo.svg';
import {Glyph} from 'elemental'

const TopBar = ({
	siteName,
	authenticatedUser,
	board,
	boardKey,
	threadKey,
	toggleSettings,
	user,
	styles,
	theme,
}) => {
	return (
		<div className={styles.topBarContainer}>
			<div className={styles.headerLayout + " width-limit"}>
				<div className="pure-g">
					<div className=" pure-u-2-5">
						<h2>
							<Link to="/" className={styles.headerLink}>
								Jackey Forum
							</Link>
						</h2>
					</div>
					<div className="pure-u-1-5">
						<img src={logo} className="App-logo" alt="logo"/>
					</div>
					<div className={styles.buttonsContainer + " pure-u-2-5"}>

						{authenticatedUser &&
						<div className="pure-g">
							<div className="pure-u-1-3">
							</div>
							<div className="pure-u-2-3">
								<Link to={`/profile/${authenticatedUser.uid}`} title={authenticatedUser.displayName}>
									<img
										className={styles.profImage}
										src={authenticatedUser.profileImageURL}
									/>
								</Link>
								<span className={styles.profInfo}>
									{authenticatedUser.displayName}
								</span>
							</div>
						</div>

						}
						<div className={styles.buttonsGrid + " pure-g"}>
							<SettingsButton
								user={user}
								toggleVisible={toggleSettings}
								styles={theme.SettingsButton}
							/>
							<AuthenticationMenu
								user={authenticatedUser}
								styles={theme.AuthenticationMenu}
							/>
						</div>
					</div>

				</div>
			</div>
			<div className={styles.miniNav + " width-limit"}>
				<Link to="/" className={styles.link}>
					<Glyph icon="home"/> Domů
				</Link>

				<BoardLink
					board={board}
					boardKey={boardKey}
					threadKey={threadKey}
					style={styles.link}
				/>
			</div>
		</div>
	)
}

const css = {
	topBarContainer: {
		width: "100%",
		minHeight: "120px",
		//paddingTop: "10px",
	},
	headerLayout: {
		minHeight: "120px",
		padding: "0 0",
		color: "#ffffff",
		img: {
			textalign: "center",
		}
	},
	header: {
		display: "inline-block",
		margin: 0,
		paddingTop: "12px",
		fontSize: "14px",
		"@media (min-width: 480px)": {
			paddingTop: "5px",
			fontSize: "20px",
		},
	},
	profImage: {
		width: "40px",
		height: "40px",
		borderRadius: "20px",
		display: "inline-block",
		verticalAlign: "top",
		margin: "10px",
		textAlign:"right",
	},
	profInfo: {
		verticalAlign: "middle",
		marginTop:"18px",
		display: "inline-block",
		height: "40px",

	},
	buttonsGrid: {
		verticalAlign: "middle",
		marginTop:"18px",
		display: "inline-block",
		height: "40px",

	},
	headerLink: {
		display: "inline-block",
		margin: 0,
		paddingTop: "12px",
		fontSize: "14px",
		color: "white",
		"@media (min-width: 480px)": {
			paddingTop: "5px",
			fontSize: "20px",
		},
	},
	miniNav: {
		marginTop: "0px",
	},
	buttonsContainer: {
		// position: "absolute",
		// right: "20px",
		// top: "8px",
		textAlign:"right",

	},
	link: {
		color: "#3c9def",
	},
}

export default styles(css, TopBar)
