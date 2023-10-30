import FileSaver from 'file-saver';

import { surpriseMePrompts } from '../constants';

export function getRandomPrompt(prompt:string) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];
  if (randomPrompt === prompt) {
    console.log('same prompt')
    return getRandomPrompt(prompt);
  }
  return randomPrompt;
}

export async function downloadImage(_id:string, photo:string) {
  FileSaver.saveAs(photo, `donwload-${_id}.jpg`)
}