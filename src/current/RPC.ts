import {
  MessageType,
  MessageBody,
  ServerGetCaptcha,
  Captcha,
  ClientGetCaptcha
} from "./bma-proto.ts";

type messsage = ServerGetCaptcha | ClientGetCaptcha;

export class RPC {
  constructor(serverMessage: MessageType, message: messsage) {}
  on(
    clientMessage: MessageType,
    callback: (err: any, message: messsage) => void
  ) {}
}
