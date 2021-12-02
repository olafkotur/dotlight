import { TwitterService } from './services/twitter';
import _ from 'lodash';

const main = async () => {
  const data = await TwitterService.fetchSearch('casting call');

  const filtered = data.filter((v) => {
    const keywords: string[] = ['audition', 'paid', '$', '£', 'female', 'apply', 'application'];
    for (const word of keywords) {
      if (v.text.includes(word)) {
        return true;
      }
    }
  });

  // console.log(data);
  console.log(filtered);
};

main();
