describe("Help ALF", function() {

	it("should return coordinates of spaceship and should be found in first row", function() {

		const map = 
			"...X......\n" +
			"..........\n" +
			"..........\n" +
			"..........\n" +
			"..........\n" +
			"..........";

		expect(findSpaceship(map)).toEqual([3, 5]);
	});
});

