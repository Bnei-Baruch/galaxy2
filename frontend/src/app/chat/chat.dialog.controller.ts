import { IUser, AuthService } from '../components/auth/auth.service';
import { ChatService } from './chat.service';

/* @ngInject */
export class ChatDialogController {
  user: IUser;
  messageText: string;
  messages: any[];

  constructor(private chat: ChatService, private authService: AuthService) {
  }

  send() {
    this.messages.push({
      from: this.authService.user,
      text: this.messageText
    });
    this.chat.send(this.user, this.messageText);
    this.messageText = '';
  }

}

