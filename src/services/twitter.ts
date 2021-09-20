import { RequestUtil } from '../utils/request';
import { config } from '../config';
import { ITwitterSearchResult } from '../typings/twitter';
import _ from 'lodash';

export const TwitterService = {
  /**
   * Fetches search data from twitter.
   * @param search - query to be searched
   */
  fetchSearch: async (search: string): Promise<ITwitterSearchResult[]> => {
    // build query
    const url = 'https://api.twitter.com/2/tweets/search/recent';
    const params = { query: search, max_results: '100', expansions: 'author_id' };
    const query = `${url}?${RequestUtil.queryString(params)}`;
    const headers = { Authorization: `Bearer ${config.twitter.bearer}` };

    // fetch search data
    const res = await RequestUtil.get(query, headers);
    return _.get(res, 'data', []);
  },
};
