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

}