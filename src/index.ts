import { TwitterService } from './services/twitter';

const main = async () => {
  const data = await TwitterService.fetchSearch('casting call');
  console.log(data);
};

main();
