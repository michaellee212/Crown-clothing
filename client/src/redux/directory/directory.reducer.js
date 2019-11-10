const INITIAL_STATE = {
	sections: [
		{
			title: 'hats',
			imageUrl: 'https://i.imgur.com/RZ4Ytht.jpg',
			id: 1,
			linkUrl: 'shop/hats'
		},
		{
			title: 'jackets',
			imageUrl: 'https://i.imgur.com/niiFDaC.jpg',
			id: 2,
			linkUrl: 'shop/jackets'
		},
		{
			title: 'shoes',
			imageUrl: 'https://i.imgur.com/Iuha3Wu.jpg',
			id: 3,
			linkUrl: 'shop/shoes'
		},
		{
			title: 'womens',
			imageUrl: 'https://i.imgur.com/xJjP43C.jpg',
			size: 'large',
			id: 4,
			linkUrl: 'shop/womens'
		},
		{
			title: 'mens',
			imageUrl: 'https://i.imgur.com/LsnnuDC.jpg',
			size: 'large',
			id: 5,
			linkUrl: 'shop/mens'
		}
	]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default directoryReducer;
