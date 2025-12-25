# 🕉 Sahasra Chandi & Shiva Sahasranama Maha Yajna Website

A spiritual event registration website built with Next.js, featuring a calm, elder-friendly UX designed for a sacred Vedic ceremony.

## ✨ Features

- **Calm, Spiritual Design**: Temple-inspired UI with generous spacing and saffron accents
- **Elder-Friendly UX**: Large text, clear navigation, and generous touch targets
- **Guided Multi-Step Form**: 4-step registration process with smooth transitions
- **Payment Integration**: Razorpay integration for voluntary contributions (dakshina)
- **Translation-Ready**: Flexible layouts designed for Telugu translation
- **Responsive Design**: Mobile-first approach that works on all devices
- **Database Integration**: Supabase backend for registration storage

## 🎨 Design Philosophy

- Generous white/cream space
- Soft saffron (#FF9933) and gold accents
- Large line heights for readability
- No urgency or sales language
- Calm, reassuring tone throughout
- Smooth animations using Framer Motion

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- A Supabase account
- A Razorpay account (for payments)

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   
   Copy `.env.example` to `.env.local` and fill in your credentials:
   ```bash
   cp .env.example .env.local
   ```

   Update the following values in `.env.local`:
   ```env
   # Supabase Configuration
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

   # Razorpay Configuration
   NEXT_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_secret
   ```

3. **Set up Supabase database:**
   
   - Go to your Supabase project dashboard
   - Navigate to the SQL Editor
   - Copy the contents of `supabase-schema.sql` and execute it
   - This will create the `registrations` table with all necessary fields

4. **Run the development server:**
   ```bash
   npm run dev
   npm run dev
   ```

5. **Open your browser:**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
teju-maa/
├── app/
│   ├── api/
│   │   ├── register/          # Registration endpoint
│   │   └── payment/
│   │       ├── create-order/  # Create Razorpay order
│   │       └── verify/        # Verify payment
│   ├── globals.css            # Global styles with design tokens
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Main page with all sections
├── components/
│   ├── ui/
│   │   ├── Button.tsx         # Calm button component
│   │   ├── Input.tsx          # Input, Textarea, Select components
│   │   ├── ProgressIndicator.tsx  # Multi-step progress bar
│   │   └── RadioGroup.tsx     # Radio button group
│   ├── HeroSection.tsx        # Hero with title and CTA
│   ├── AboutSection.tsx       # About the yajna
│   ├── RegistrationForm.tsx   # 4-step guided form
│   ├── PaymentGateway.tsx     # Razorpay integration
│   └── SuccessScreen.tsx      # Post-registration confirmation
├── lib/
│   ├── design-tokens.ts       # Design system tokens
│   └── supabase.ts           # Supabase client
└── supabase-schema.sql       # Database schema
```

## 🎯 Registration Flow

1. **Hero Section**: Welcome with event details and CTA button
2. **About Section**: Explains the spiritual significance
3. **Step 1 - Devotee Details**: Name, gotra, contact information
4. **Step 2 - Participation**: Number of participants, mode (in-person/online)
5. **Step 3 - Prasadam**: Delivery preferences for blessed prasadam
6. **Step 4 - Dakshina**: Voluntary contribution with preset amounts
7. **Payment**: Secure Razorpay payment gateway
8. **Success Screen**: Confirmation with calm messaging

## 🔒 Payment Integration

The website uses Razorpay for secure payment processing with server-side verification.

## 🌍 Translation Readiness

The design accommodates Telugu translation with flexible font sizes and generous spacing.

## 📱 Responsive Design

Mobile-first approach with touch-friendly buttons and adaptive layouts.

## 🙏 Spiritual Note

This website is designed with devotion and care for the sacred Sahasra Chandi and Shiva Sahasranama Maha Yajna.

**May the Divine Mother and Lord Shiva bless all devotees with peace and prosperity.** 🕉

---

Built with 💛 for spiritual seekers
# Spiritual-Client
