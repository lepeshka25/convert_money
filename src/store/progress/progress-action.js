import {PROGRESS_UPDATE} from "./progress-constant";

export const updateActionProgress = (payload) => ({
	payload,
	type: PROGRESS_UPDATE,
})