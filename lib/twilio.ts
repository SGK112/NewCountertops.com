import twilio from 'twilio'

const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER

if (!accountSid || !authToken || !twilioPhoneNumber) {
  console.warn('Twilio credentials not found in environment variables')
}

const client = accountSid && authToken ? twilio(accountSid, authToken) : null

export interface NotificationOptions {
  to: string
  message: string
  type: 'quote' | 'booking' | 'reminder' | 'welcome'
}

export class TwilioService {
  static async sendSMS(options: NotificationOptions): Promise<boolean> {
    if (!client || !twilioPhoneNumber) {
      console.error('Twilio client not configured')
      return false
    }

    try {
      const message = await client.messages.create({
        body: options.message,
        from: twilioPhoneNumber,
        to: options.to,
      })

      console.log('SMS sent successfully:', message.sid)
      return true
    } catch (error) {
      console.error('Failed to send SMS:', error)
      throw error
    }
  }

  static async makeVoiceCall(options: NotificationOptions): Promise<boolean> {
    if (!client || !twilioPhoneNumber) {
      console.error('Twilio client not configured')
      return false
    }

    try {
      const call = await client.calls.create({
        twiml: `<Response><Say voice="alice">${options.message}</Say></Response>`,
        from: twilioPhoneNumber,
        to: options.to,
      })

      console.log('Voice call initiated successfully:', call.sid)
      return true
    } catch (error) {
      console.error('Failed to make voice call:', error)
      throw error
    }
  }

  // Convenience methods for different notification types
  static async sendQuoteNotification(to: string, customerName: string, projectType: string): Promise<boolean> {
    const message = `Hello! You have received a new quote request for ${projectType} from ${customerName}. Please log into your NewCountertops.com dashboard to review and respond.`
    
    return this.makeVoiceCall({
      to,
      message,
      type: 'quote'
    })
  }

  static async sendBookingConfirmation(to: string, customerName: string, scheduledDate: string): Promise<boolean> {
    const message = `Your countertop installation with ${customerName} has been confirmed for ${scheduledDate}. Thank you for using NewCountertops.com!`
    
    return this.makeVoiceCall({
      to,
      message,
      type: 'booking'
    })
  }

  static async sendWelcomeMessage(to: string, userType: 'customer' | 'contractor'): Promise<boolean> {
    const message = userType === 'contractor' 
      ? 'Welcome to NewCountertops.com! Your contractor profile is now active. Start receiving quote requests from customers in your area.'
      : 'Welcome to NewCountertops.com! Your account is ready. You can now browse certified contractors and request quotes for your countertop project.'
    
    return this.makeVoiceCall({
      to,
      message,
      type: 'welcome'
    })
  }
}
