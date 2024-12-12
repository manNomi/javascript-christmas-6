import { OUTPUT_MESSAGES } from '../config/outputMessage.js';
import print from '../View/print.js';

export default class OutputService {
  listAdderFormatter(separator, items) {
    const formattedItems = items.map((item) => ` ${item} `);
    return `[${separator}${formattedItems.join('|')}]`;
  }

  listFormatter(resultList) {
    const formattedString = resultList.join(' | ');
    return `[ ${formattedString} ]`;
  }
}
