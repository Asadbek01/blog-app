import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  getMonthDay(dateString: string): string {
    const date = new Date(dateString);
    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.getDate();
    return `${month} ${day}`;
  }
  getReadTime(content: any): string {
    const text = this.extractTextFromContent(content);

    // Validate if text is a non-empty string before processing
    if (typeof text !== 'string' || text.trim() === '') {
        return '';
    }

    const wordsPerMinute = 100;
    const numberOfWords = text.split(/\s/g).length;
    const minutes = numberOfWords / wordsPerMinute;
    const readTime = Math.ceil(minutes);
    return `${readTime} min read`;
}

 extractTextFromContent(content: any): string {
    if (typeof content === 'string') {
        // If content is already a string, use it as is
        return content;
    } else if (typeof content === 'object' && content.hasOwnProperty('text')) {
        // If content is an object with a 'text' property, use the 'text' property
        return content.text;
    } else {
        // Convert other types of content to string representation
        return String(content);
    }
}

getDateAndMinutes(dateString: string): string {
  const date = new Date(dateString);

  // Validate if date is valid before processing
  if (isNaN(date.getTime())) {
   return ""
  }

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hour = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${day}.${month}.${year} | ${hour}:${minutes}`;
}


likeBlog(blog: any) {
  // Implement your like functionality here
  console.log(`Liked: ${blog.title}`);
}

shareBlog(blog: any) {
  // Implement your share functionality here
  console.log(`Shared: ${blog.title}`);
}


addEllipsisIfNeeded() {
  // Delay to ensure that the DOM has been rendered
  setTimeout(() => {
    const elements = document.querySelectorAll('.two-line-ellipsis');
   console.log(elements)
    elements.forEach((element: any) => {
      var maxHeight = parseFloat(getComputedStyle(element).maxHeight);

      if (element.scrollHeight > maxHeight) {
        var text = element.innerText;
        var truncatedText = this.truncateTextToFit(element, text, maxHeight);
        element.innerHTML = truncatedText;
        console.log(element)
      }
    });
  });
}


 truncateTextToFit(element:any, text:any, maxHeight:any) {
  var mid;
  var low = 0;
  var high = text.length - 1;

  while (low < high) {
    mid = Math.ceil((low + high) / 2);
    element.innerText = text.slice(0, mid + 1);
    
    if (element.scrollHeight <= maxHeight) {
      low = mid;
    } else {
      high = mid - 1;
    }
  }

  return text.slice(0, low) + '...';
}
}