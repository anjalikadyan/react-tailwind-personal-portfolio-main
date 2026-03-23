# EmailJS Setup Guide

This guide will help you configure EmailJS to make your contact form functional.

## 📧 What is EmailJS?

EmailJS is a service that allows you to send emails directly from your frontend application without needing a backend server. It works by connecting your email service to your web application through secure API calls.

## 🚀 Step-by-Step Setup

### 1. Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click **Sign Up** and create a free account
3. Verify your email address when you receive the confirmation email

### 2. Configure Email Service

1. After logging in, go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (recommended: **Gmail**)
4. For Gmail setup:
   - Click **Connect Gmail Account**
   - Sign in with your Google account
   - Grant EmailJS permission to send emails on your behalf
5. Note your **Service ID** (you'll need this later)

### 3. Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Configure your template:

#### Template Settings:
- **Template Name**: Portfolio Contact Form
- **Subject**: New Contact Message from {{from_name}}
- **Content Type**: Plain Text or HTML

#### Email Content:
```
You have received a new message from your portfolio website!

From: {{from_name}} ({{from_email}})
Message: {{message}}

---
Sent on: {{sent_date}}
```

#### Template Variables:
The code sends these variables to EmailJS:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email  
- `{{message}}` - Message content
- `{{sent_date}}` - Timestamp when the message was sent

Ensure these match your EmailJS template exactly.

4. Click **Save** and note your **Template ID**

### 4. Get Your API Keys

1. Go to **Account** → **API Keys**
2. Copy your **Public Key** (this is safe to use in frontend code)
3. Your Private Key is for backend use only (not needed for this setup)

### 5. Update Your Portfolio Configuration

Create a new file in the project root: `.env`

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id 
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### 6. Restart Your Development Server

Environment variables are loaded at startup, so you must restart your server after creating or editing the `.env` file.

```bash
npm run dev
```

## 🔧 Testing Your Setup

1. Open your portfolio in a browser
2. Fill out the contact form with test data
3. Click "Send Message"
4. Check your email inbox for the test message

## 📧 Email Template Customization

### Professional Template Example:
```
Dear Anjali,

You have received a new inquiry through your portfolio website.

📧 From: {{from_name}}
📧 Email: {{from_email}}
📝 Message: 
{{message}}

---
This message was sent on {{sent_date}} from your portfolio contact form.
```

### HTML Template Example:
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #7c3aed;">New Portfolio Inquiry</h2>
  
  <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <p><strong>From:</strong> {{from_name}} ({{from_email}})</p>
    <p><strong>Message:</strong></p>
    <p>{{message}}</p>
  </div>
  
  <p style="color: #666; font-size: 12px;">
    Sent on {{sent_date}} from your portfolio contact form
  </p>
</div>
```

## 🛠️ Troubleshooting

### Common Issues:

**"EmailJS not defined" Error:**
- Ensure EmailJS library is installed: `npm install @emailjs/browser`
- Check import statement in Contact.jsx

**"Invalid service ID" Error:**
- Verify your Service ID is correct
- Check if email service is properly connected

**"Invalid template ID" Error:**
- Verify your Template ID is correct
- Check template variables match form field names

**"API key invalid" Error:**
- Use your Public Key (not Private Key)
- Ensure API key is copied correctly

### Debug Steps:

1. **Check Browser Console** for error messages
2. **Verify Network Tab** for API calls
3. **Test EmailJS Dashboard** → Send Test Email
4. **Check Email Service** connection status

## 📱 Mobile Considerations

Your contact form is fully responsive and works on:
- ✅ Desktop browsers
- ✅ Tablet devices  
- ✅ Mobile phones

## 🔒 Security Notes

- **Public Key Only**: Never expose your Private Key in frontend code
- **Rate Limiting**: EmailJS free tier has monthly limits
- **Spam Protection**: Consider adding reCAPTCHA if needed

## 📊 EmailJS Free Tier Limits

- **200 emails/month** on free plan
- **Maximum email size**: 50MB
- **Rate limiting**: 5 emails/second

## 🚀 Production Checklist

Before deploying:

- [ ] Test contact form thoroughly
- [ ] Verify email delivery
- [ ] Check spam folder
- [ ] Test on mobile devices
- [ ] Verify all form fields work

## 📞 Support

If you need help:
- **EmailJS Documentation**: https://www.emailjs.com/docs/
- **EmailJS Support**: support@emailjs.com
- **Portfolio Issues**: Check browser console for errors

---

**🎉 Your contact form is now ready to receive messages from visitors!**
