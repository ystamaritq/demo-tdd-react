// setup for testing
// import dependecies
import React from "react";
// import react-testing methods (destructuring the methods in the library)
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";

// the test is async because we can predict the behaviour of the lifecycle methods (re-render methods)
// recommend time frame for running the test
// key factor to make the test fail will be the assertion => expect
// we are using just jest package for now
test("loads and displays greeting", async () => {
	// Arrange your test
	// Act your test
	// Assert your test (a test can have more than one assertion)
	// if something stop in code is because its throw an error
	expect(true).toBe(true);
	expect(false).toBe(true);
});
