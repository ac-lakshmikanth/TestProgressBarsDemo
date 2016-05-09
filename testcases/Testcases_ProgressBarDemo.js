describe('Test suite For progress bars demo',function() {

	it('TestCase_limit_min_zero',function () {
		var result = progressBars.getProgressBarNewState(-25,10);
		expect(result.newValue).toBe(0);
	});

	it('TestCase_limit_valid_range',function () {
		var result = progressBars.getProgressBarNewState(25,10);
		expect(result.newValue).toBe(35);
	});

	it('TestCase_limit_max_value',function () {
		var result = progressBars.getProgressBarNewState(25,95);
		expect(result.newValue).toBe(100);
	});

});
