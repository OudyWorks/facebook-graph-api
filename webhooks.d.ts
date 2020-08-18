export class Event {
    object: 'page' | 'instagram';
    entry: Entry[];
  }
  export class CommentChange {
    field: 'comments';
    value: {
      id: string;
      text: string;
    };
  }
  
  export class MentionChange {
    field: 'mentions';
    value: {
      media_id: string;
      comment_id: string;
    };
  }
  
  export class FeedChange {
    field: 'feed';
    value: {
      item: 'comment';
      from?: {
        id: string;
      };
      post?: {
        permalink_url: string;
      };
      verb: 'add' | 'remove';
      created_time: number;
      message?: string;
      comment_id?: string;
    };
  }
  
  export class Entry {
    id: string;
    time: number;
    messaging?: Messaging[];
    changes: (CommentChange | MentionChange | FeedChange)[];
  }
  
  export class Messaging {
    timestamp: number | Date;
    sender: Sender;
    recipient: Recipient;
    message?: Message;
    delivery?: Delivery;
    postback?: Postback;
    read?: Read;
    optin?: Optin;
    referral?: Referral;
  }
  
  export class Node {
    id: string;
  }
  
  export class Recipient extends Node {}
  
  export class Sender extends Node {
    user_ref: string;
  }
  
  export class QuickReply {
    payload: string;
  }
  
  export class ReplyTo {
    mid: string;
  }
  
  export enum AttachmentType {
    unknown,
    audio,
    file,
    image,
    location,
    video,
    fallback,
  }
  
  export class Coordinates {
    lat: number;
  
    long: number;
  }
  
  export class Payload {
    url: string;
    title?: string;
    sticker_id?: string;
    coordinates?: Coordinates;
  }
  
  export class Attachment {
    type: AttachmentType;
    payload: Payload;
  }
  
  export class Message {
    mid: string;
    text?: string;
    quick_reply?: QuickReply;
    reply_to?: ReplyTo;
    attachments?: Attachment[];
    is_echo?: boolean;
    app_id?: string;
    metadata?: string;
  }
  
  export class Delivery {
    mids: string[];
    watermark: number;
  }
  
  export class Postback {
    title: string;
    payload: string;
    referral: string;
  }
  
  export class Read {
    watermark: number;
  }
  
  export class Optin {
    ref: string;
    user_ref: string;
    message_request?: string;
  }
  
  export class Referral {
    source:
      | 'MESSENGER_CODE'
      | 'DISCOVER_TAB'
      | 'ADS'
      | 'SHORTLINK'
      | 'CUSTOMER_CHAT_PLUGIN';
    type: 'OPEN_THREAD';
    ref: string;
    referer_uri: string;
  }
  