import { Request, Response } from 'express';
import { WhatsAppService } from './whatsappService';
import type { WebhookMessage } from '../types/whatsapp';

export class WebhookService {
  static async handleWebhook(req: Request, res: Response): Promise<void> {
    try {
      if (req.method === 'GET') {
        const mode = req.query['hub.mode'] as string;
        const token = req.query['hub.verify_token'] as string;
        const challenge = req.query['hub.challenge'] as string;

        const verificationResponse = await WhatsAppService.verifyWebhook(mode, token, challenge);
        
        if (verificationResponse) {
          res.status(200).send(verificationResponse);
        } else {
          res.sendStatus(403);
        }
      } else if (req.method === 'POST') {
        const body = req.body as WebhookMessage;

        if (body.object === 'whatsapp_business_account') {
          for (const entry of body.entry) {
            for (const change of entry.changes) {
              if (change.value.messages && change.value.messages.length > 0) {
                for (const message of change.value.messages) {
                  await WhatsAppService.handleIncomingMessage(message);
                }
              }
            }
          }
          res.sendStatus(200);
        } else {
          res.sendStatus(404);
        }
      } else {
        res.sendStatus(405);
      }
    } catch (error) {
      console.error('Error en webhook:', error);
      res.sendStatus(500);
    }
  }
}