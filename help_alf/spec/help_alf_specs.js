describe("Help ALF", function() {

	it("correct count when x and y are the same", function() {

		const map = 
			"..........\n" +
			"..........\n" +
			"...X......\n" +
			"..........\n" +
			"..........\n" +
			"..........";

		expect(findSpaceship(map)).toEqual([3, 3]);
	});
});

