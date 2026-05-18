describe("Help ALF", function() {

	it("should return Spaceship lost forever when not found", function() {

		const map = 
			"..........\n" +
			"..........\n" +
			"..........\n" +
			"..........\n" +
			"..........\n" +
			"..........";

		expect(findSpaceship(map)).toEqual("Spaceship lost forever");
	});
});

