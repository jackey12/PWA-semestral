import React from 'react'
import {Card, Glyph} from 'elemental'
import {styles} from 'refire-app'

const Footer = ({styles}) => (
	<div className={styles.footerLayout}>
		<div className={styles.container + " width-limit"}>
			<div className="pure-g">
				<div className="pure-u-1-2">
					Semestralní projekt předmětu PWA<br />
					Školní rok 2016/2017<br />
					Technická univerzita v Liberci
				</div>
				<div className="pure-u-1-2">
					Vytvořil Jakub Hirnšal<br />
					React - Redux <br />
					Refire app
				</div>
			</div>

		</div>
	</div>
)

const css = {
	footerLayout: {
	},
	container: {
		//marginTop: "50px",
		paddingTop: "20px",
		minHeight: "100px",
		textAlign: "center",
	},
}

export default styles(css, Footer)
