import { ChatService } from './chat.service';

/* @ngInject */
export class ChatDialogController {
  messageText: string;
  messages: any[];
  login: string;

  constructor(private chat: ChatService,
              scope: ng.IScope,
              messages: any[],
              login: string) {
    this.messages = messages;
    this.login = login;
  }

  cancel() {
    this.chat.cancel();
  }

  send() {
    this.chat.send(this.messageText);
    this.messageText = '';
  }

}

