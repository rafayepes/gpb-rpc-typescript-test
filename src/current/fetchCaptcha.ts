import { RPC } from "./RPC.ts";
import { ServerGetCaptcha, MessageType } from "./bma-proto.ts";

export function fetchCaptcha(uid: string, forceNew = false) {
  const captchaRequest = new ServerGetCaptcha()
    .setUid(uid)
    .setForceNew(forceNew || false);

  return new Promise((resolve, reject) => {
    new RPC(MessageType.SERVER_GET_CAPTCHA, captchaRequest)
      .on(MessageType.CLIENT_GET_CAPTCHA, (err: any, response: string) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(response);
      })
      .request();
  }).then(response => response.toJSON());
}
