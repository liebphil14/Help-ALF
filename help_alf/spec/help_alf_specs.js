describe("Help ALF", function() {

	it("should return coordinates of spaceship and should be found in last row", function() {

		const map = 
			"..........\n" +
			"..........\n" +
			"..........\n" +
			"..........\n" +
			"..........\n" +
			"......X...";

		expect(findSpaceship(map)).toEqual([6, 0]);
	});
});

