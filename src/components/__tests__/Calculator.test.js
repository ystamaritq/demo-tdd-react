// setup for testing
// import dependecies
import React from "react";
// import react-testing methods (destructuring the methods in the library)
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";
import Math from "./../Calculator";
import Calculator from "./../Calculator";

// the test is async because we can predict the behaviour of the lifecycle methods (re-render methods)
// recommend time frame for running the test
// key factor to make the test fail will be the assertion => expect
// we are using just jest package for now
// describe we must to putting in the top

// 1) wrap all test in 1 describe block
// 2) add another test
describe("Calculator", () => {
	test("display a div with a p", async () => {
		// Arrange your test
		const { container, asFragment, debug } = render(<Calculator />);
		// debug();
		// Act your test - the user is not interacting with this

		// Assert your test (a test can have more than one assertion)

		// if something stop in code is because its throw an error
		// toBe is call the matcher
		expect(container.find("div").length).toEqual(1);
	});

	// calculator
});
