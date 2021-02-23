const { expect } = require("chai");

describe("range", () => {

	const { range } = require("../dist");

	it("with single argument", () => {
		expect(range(5)).to.deep.equal([0, 1, 2, 3, 4]);
	});

	it("with double arguments", () => {
		expect(range(5, 10)).to.deep.equal([5, 6, 7, 8, 9]);
	});

	it("with triple arguments", () => {
		expect(range(1, 7, 3)).to.deep.equal([1, 4]);
		expect(range(1, 8, 3)).to.deep.equal([1, 4, 7]);
		expect(range(1, 10, 3)).to.deep.equal([1, 4, 7]);
		expect(range(1, 11, 3)).to.deep.equal([1, 4, 7, 10]);
		expect(range(-1, -11, -3)).to.deep.equal([-1, -4, -7, -10]);
		expect(range(-1, -12, -5)).to.deep.equal([-1, -6, -11]);
	});

});

describe("xrange", () => {

	const { xrange } = require("../dist");

	it("with single argument", () => {
		expect([...xrange(5)]).to.deep.equal([0, 1, 2, 3, 4]);
	});

	it("with double arguments", () => {
		expect([...xrange(5, 10)]).to.deep.equal([5, 6, 7, 8, 9]);
	});

	it("with triple arguments", () => {
		expect([...xrange(1, 7, 3)]).to.deep.equal([1, 4]);
		expect([...xrange(1, 8, 3)]).to.deep.equal([1, 4, 7]);
		expect([...xrange(1, 10, 3)]).to.deep.equal([1, 4, 7]);
		expect([...xrange(1, 11, 3)]).to.deep.equal([1, 4, 7, 10]);
		expect([...xrange(-1, -11, -3)]).to.deep.equal([-1, -4, -7, -10]);
		expect([...xrange(-1, -12, -5)]).to.deep.equal([-1, -6, -11]);
	});

});

describe("shuffle", () => {

	const { shuffle } = require("../dist");

	it("shuffle", () => {
		const array = [0, 1, 2, 3, 4, 5];
		for (const value of shuffle(array)) expect(array.indexOf(value)).to.not.equal(-1);
	});

});
