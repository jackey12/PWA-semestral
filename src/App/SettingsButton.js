import React from 'react'
import {styles} from 'refire-app'

const SettingsButton = ({user, toggleVisible, styles}) => {
	if (user) {
		return (
			<button className={styles.button + " pure-button pure-button-primary"} onClick={() => toggleVisible()}>
				Nastavení
			</button>
		)
	} else {
		return (
			<span />
		)

	}
}

const css = {
	button: {
		marginRight: "10px",
	},
}

export default styles(css, SettingsButton)
