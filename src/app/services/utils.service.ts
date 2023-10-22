import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  //   <span class="desc-date">Sep 26</span>
  // <span class="desc-date">4 min read</span>

//   createdAt
// : 
// "2023-10-20T18:36:06.070Z"
// publishedAt
// : 
// "2023-10-20T18:36:21.542Z"
// slug
// : 
// "first-blog"
// summary
// : 
// "Heres gonna be the first blog"
// updatedAt
// : 
// "2023-10-20T23:25:22.400Z"

// create a function that takes in a date and returns a string in the format of "MMM DD" (e.g. "Sep 26") 
// create a function that takes in a date and returns a string in the format of "X min read" (e.g. "4 min read")

  constructor() { }

  getMonthDay(dateString: string): string {
    const date = new Date(dateString);
    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.getDate();
    return `${month} ${day}`;
  }

getReadTime(text: string): string {
  const wordsPerMinute = 100;
  const numberOfWords = text.split(/\s/g).length;
  const minutes = numberOfWords / wordsPerMinute;
  const readTime = Math.ceil(minutes);
  return `${readTime} min read`;
}


convertToHtmlTags(markdownText:any) {
  // Convert **text** to <strong>text</strong>
  const boldRegex = /\*\*(.*?)\*\*/g;
  markdownText = markdownText.replace(boldRegex, '<strong>$1</strong>');

  // Convert [text](url) to <a href="url">text</a>
  const linkRegex = /\[(.*?)\]\((.*?)\)/g;
  markdownText = markdownText.replace(linkRegex, '<a href="$2">$1</a>');

  // img tag
  const imgRegex = /!\[(.*?)\]\((.*?)\)/g;
  markdownText = markdownText.replace(imgRegex, '<img src="$2" alt="$1">');
  

  return markdownText;
}
// What will be the argument for getReadTime()? // argumnet 
// answer: the blog text 
}
