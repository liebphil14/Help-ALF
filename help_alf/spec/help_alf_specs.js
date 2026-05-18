describe("Help ALF", function() {

	it("should return coordinates of spaceship when found", function() {

		const map = 
			"..........\n" +
			"..........\n" +
			"..........\n" +
			".......X..\n" +
			"..........\n" +
			"..........";

		expect(findSpaceship(map)).toEqual([7, 2]);
	});
});

