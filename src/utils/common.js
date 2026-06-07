// Falcron
// Author: mayankitscsb-droid
/**
 * Returns a promise that resolves after `ms` milliseconds.
 * @param {number} ms
 * @returns {Promise<void>}
 */
export async function sleep(ms) {
	return new Promise((r) => setTimeout(r, ms));
}

/**
 * Project: Falcron
 * Author: mayankitscsb-droid (Aegis)
 * Organization: mayankitscsb-droid
 * GitHub: https://github.com/mayankitscsb-droid/Falcron
 * License: Custom
 *
 * © 2026 mayankitscsb-droid. All rights reserved.
 */