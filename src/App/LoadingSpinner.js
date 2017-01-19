import React from 'react'
import {Spinner} from 'elemental'
import {styles} from 'refire-app'

const LoadingSpinner = ({styles}) => (
	<div className={styles.spinnerContainer}>
		<div className={styles.center}>
			<Spinner size="lg"/>
		</div>
	</div>
)

const css = {
	spinnerContainer: {
		width: "100%",
		height: "100%",
	},
	center: {
		display: "block",
		position: "absolute",
		top: "50%",
		left: "50%",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
		fontSize: "24px",
		color:"black",
	},
}

export default styles(css, LoadingSpinner)
