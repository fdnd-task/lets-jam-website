import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';

export async function load() {
	let query = gql`
		query uitleengeschiedenis {
			uitleengeschiedenis1 {
				author
				image {
					url
				}
				title
			}
		}
	`;

	return await hygraph.request(query);
}
