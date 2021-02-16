import mockedAxios from "axios";
import { act, cleanup, render, waitFor, screen } from "@testing-library/react";
import Featured from "../pages/Featured";
import TokenContext from "../TokenContext";

jest.mock("axios");
afterEach(cleanup);

describe("Featured component", function () {
	var response = {
		data: {
			playlists: {
				items: [
					{
						id: "37i9dQZF1DWXLeA8Omikj7",
						name: "rock on",
						description: "Hypnotic electronic for studies and a relax.",
						images: [
							{
								url: "https://i.scdn.co/image/ab67706f000000031df043181e0a5b20707ce3a9",
							},
						],
					},
					{
						id: "37i9dQZF1DX4bSrsRWE9cd",
						name: "Ksssaaa",
						description: "That special feeling of being calm, happy and relaxed at the same time.",
						images: [
							{
								url: "https://i.scdn.co/image/ab67706f00000003e05418b847fe9720badea0e5",
							},
						],
					},
				],
			},
		},
	};

	var mockContext = [
		{
			access_token: "1234",
		},
	];

	it("shows featured playlists", async function () {
		mockedAxios.get.mockResolvedValue(response);
		act(function () {
			render(
				<TokenContext.Provider value={mockContext}>
					<Featured />
				</TokenContext.Provider>
			);
		});

		await waitFor(function () {
			var text = screen.getByText(/rock on/i);
			expect(text).toBeInTheDocument();
		});
	});
});
