import { Injectable } from '@angular/core';
import { HfInference } from "@huggingface/inference"
import { Message } from './message';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChataiService {
  accessToken = ""; // tutaj wklej swój klucz z https://huggingface.co/settings/tokens
  private client = new HfInference(this.accessToken);
  private system = "jesteś programistą javascript\nnie dodawaj dodatkowych informacji\nnie dodawaj dodatkowych znaczników\nnie dodawaj backticków"
  private messages: Message[] = []
  private _obs: BehaviorSubject<Message[]> = new BehaviorSubject(this.messages);
  public obs = this._obs.asObservable();
  // system, user, assistant
  constructor() {
    this.messages.push({ role: "system", content: this.system });
   }

  async quest(question: string) {
    this.messages.push({ role: "user", content: question });
    const stream = this.client.chatCompletionStream({
      model: "codellama/CodeLlama-34b-Instruct-hf",
      messages: this.messages,
      temperature: 0.9,
      max_tokens: 2048,
      top_p: 0.8
    });
    let out = "";
    for await (const chunk of stream) {
      if (chunk.choices && chunk.choices.length > 0) {
        const newContent = chunk.choices[0].delta.content;
        out += newContent;
      }  
    }
    this.messages.push({ role: "assistant", content: out });
    this._obs.next(this.messages);
  }

}
