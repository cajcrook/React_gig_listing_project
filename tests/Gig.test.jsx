
import {render,screen} from "@testing-library/react";
import Gig from "../src/components/Gig";

test("band_name - renders correctly", () => {
    render(<Gig band_name = "Band Name"/>);
    expect(screen.getByRole("heading")).toHaveTextContent("Band Name");
});

test("event_description - renders correctly", () => {
    render(<Gig event_description = "Event Description"/>);
    expect(screen.getByText("Event Description")).toBeInTheDocument();
});

test("time_date - renders correctly", () => {
    render(<Gig time_date = "Time Date"/>);
    expect(screen.getByText("Time Date")).toBeInTheDocument();
});

test("location - renders correctly", () => {
    render(<Gig event_description = "Location"/>);
    expect(screen.getByText("Location")).toBeInTheDocument();
});
