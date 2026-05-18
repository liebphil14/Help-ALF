describe("Help ALF", function() {

	it("should count multiple rows correctly", function() {

		const map = 
			"..........\n" +
			"..........\n" +
			"..........\n" +
			"...X......\n" +
			"..........\n" +
			"..........";

		expect(findSpaceship(map)).toEqual([3, 2]);
	});
});

