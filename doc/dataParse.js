
data = {
	components: {
		View: {
			style: {
				type: 'dir',
				Children: {
					flex: {
						type: 'input',
						limit: 'number',
					},
					flexDirection: {
						type: 'select',
						limit: 'row, column',
					},
					marginTop: {
						type: 'input',
						limit: 'number',						
					}

				}

			},

		}
	},
	commonStyle: {

	}
}