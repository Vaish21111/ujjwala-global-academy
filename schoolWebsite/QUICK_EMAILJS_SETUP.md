# 🚀 Quick EmailJS Fix for Ujjwala Academy

## ❌ **Current Problem**
Your forms are showing "Sorry, there was an error sending your message" because EmailJS isn't properly configured.

## ✅ **Quick Fix (5 minutes)**

### 1. **Get Your EmailJS Credentials**
- Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
- Sign in to your account

### 2. **Get Public Key**
- Click "Account" → "API Keys"
- Copy your **Public Key** (starts with `user_...`)

### 3. **Get Service ID**
- Click "Email Services"
- Copy your **Gmail Service ID** (starts with `service_...`)

### 4. **Create Template**
- Click "Email Templates"
- Click "Create New Template"
- **Subject:** `New Contact Message from {{from_name}}`
- **Content:**
```
Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}
Message: {{message}}

This email was sent from the Ujjwala Academy contact form.
```
- Save and copy the **Template ID** (starts with `template_...`)

### 5. **Update Your Code**

#### In `Contact.jsx` (line ~50):
```jsx
emailjs.init("YOUR_ACTUAL_PUBLIC_KEY");
```

#### In `Contact.jsx` (line ~70):
```jsx
const response = await emailjs.send(
  'YOUR_ACTUAL_SERVICE_ID',
  'YOUR_ACTUAL_TEMPLATE_ID',
  // ... rest of the code
);
```

#### In `Admissions.jsx` (line ~50):
```jsx
emailjs.init("YOUR_ACTUAL_PUBLIC_KEY");
```

#### In `Admissions.jsx` (line ~70):
```jsx
const response = await emailjs.send(
  'YOUR_ACTUAL_SERVICE_ID',
  'YOUR_ACTUAL_TEMPLATE_ID',
  // ... rest of the code
);
```

## 🔑 **Example Values**
- **Public Key:** `user_abc123def456ghi789`
- **Service ID:** `service_contact123`
- **Template ID:** `template_contact456`

## 🧪 **Test**
1. Fill out the contact form
2. Submit
3. Check your email (muskanblp05@gmail.com)
4. Check spam folder if needed

## 🆘 **Still Not Working?**
- Check browser console for errors
- Verify all credentials are correct
- Make sure Gmail service is connected
- Check if you've reached free tier limits (200 emails/month)

---
**Note:** Replace `YOUR_ACTUAL_...` with your real EmailJS credentials!
