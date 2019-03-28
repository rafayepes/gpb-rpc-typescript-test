export const enum MessageType {
  // body: ServerGetCaptcha
  // response: CLIENT_GET_CAPTCHA
  // notes: Message sent to the server to request a captcha image to show to the user. Clients must send this message upon receiving :ref:`ServerErrorType.SERVER_ERROR_TYPE_CAPTCHA_REQUIRED`
  // notes: [anonymous=true]
  // notes: [allow_when_blocked=true]
  SERVER_GET_CAPTCHA = 340,

  // body: ClientGetCaptcha
  // notes: The captcha image and configuration info
  CLIENT_GET_CAPTCHA = 341
}

export class MessageBody {
  server_get_captcha?: ServerGetCaptcha;
  client_get_captcha?: ClientGetCaptcha;
  message_type?: MessageType;

  setServerGetCaptcha(server_get_captcha: ServerGetCaptcha) {
    this.server_get_captcha = server_get_captcha;
  }

  setClientGetCaptcha(client_get_captcha: ClientGetCaptcha) {
    this.client_get_captcha = client_get_captcha;
  }

  setMessageType(message_type: MessageType) {
    this.message_type = message_type;
  }
}

export class ServerGetCaptcha {
  uid: string;
  force_new?: boolean;
  setUid(uid: string) {
    this.uid = uid;
  }

  setForceNew(force_new: boolean) {
    this.force_new = force_new;
  }
}

export class Captcha {
  image_id: string;
  setImageId(imageId: string) {
    this.image_id = imageId;
  }
}

export class ClientGetCaptcha {
  // Server's response to a captcha request
  captcha: Captcha;
  setCaptcha(captcha: Captcha) {
    this.captcha = captcha;
  }
}

/*

enum MessageType {

// body: ServerGetCaptcha
// response: CLIENT_GET_CAPTCHA
// notes: Message sent to the server to request a captcha image to show to the user. Clients must send this message upon receiving :ref:`ServerErrorType.SERVER_ERROR_TYPE_CAPTCHA_REQUIRED`
// notes: [anonymous=true]
// notes: [allow_when_blocked=true]
SERVER_GET_CAPTCHA = 340;

// body: ClientGetCaptcha
// notes: The captcha image and configuration info
CLIENT_GET_CAPTCHA = 341;

}

enum ObjectType {
  TYPE_NULL = 0;
  TYPE_INTEGER = 1;
  TYPE_STRING = 5;
  TYPE_SERVER_GET_CAPTCHA = 211;
  TYPE_CLIENT_GET_CAPTCHA = 212;
}


message MessageBody {
  optional ServerGetCaptcha server_get_captcha = 211;
  optional ClientGetCaptcha client_get_captcha = 212;
}



message ServerGetCaptcha {
  required string uid = 1; // the error_id returned in the message ServerErrorMessage
  optional bool force_new = 2; // true when the user requests a new CAPTCHA
}

message Captcha {
  required string image_id = 1; // the url of the captcha
}

message ClientGetCaptcha { // Server's response to a captcha request
  required Captcha captcha = 1;
}
*/
