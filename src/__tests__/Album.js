/*
import { act, cleanup, render, waitFor, screen } from "@testing-library/react";
import mockedAxios from "axios";
import Album from "../pages/Album";

jest.mock("axios");
afterEach(cleanup);

describe("Album page", function() {
	var response = {
		data: {
			name: "pink planet",
				 album_type: "album",
				 id: "74UvOvL6L4tZbYFtY759ZG",
				 total_tracks: 18,
				 images: [{
						url: "https://i.scdn.co/image/ab67616d0000b27375af9fb0fa8dc8f3adef6905"
				 }],
				 tracks: {
						items: [{
							 artists: [{
									name: "Pink Sweat$"
							 }],
							 duration_ms: 156340,
							 id: "0nB638XyP3dR5XwysuYRsK",
							 name: "PINK CITY",
						}]
				 }
		}
	};

	it("shows album songs", async function() {
		mockedAxios.get.mockResolvedValue(response);
		act(function() {
			render(<Album id="74UvOvL6L4tZbYFtY759ZG" />);
		});

		await waitFor(function() {
			var text = screen.getByText(/pink/i);
			expect(text).toBeInTheDocument();
		});
	});
}); */
