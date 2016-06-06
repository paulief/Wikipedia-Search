jest.unmock('../components/SearchBox/SearchBox');

describe('<SearchBox/>', () => {
	it('adds maths', () => {
		expect(1+2).toEqual(3);
	});
});
