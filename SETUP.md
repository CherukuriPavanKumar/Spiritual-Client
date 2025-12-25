# 🚀 Quick Setup Guide

Follow these steps to get your spiritual event website up and running:

## Step 1: Environment Setup

1. Open the `.env.local` file (already created)
2. You need to get credentials from two services:

### Supabase Setup:
1. Go to [supabase.com](https://supabase.com) and create a free account
2. Create a new project
3. Go to Project Settings → API
4. Copy:
   - Project URL → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon` `public` key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Razorpay Setup:
1. Go to [razorpay.com](https://razorpay.com) and create an account
2. Go to Settings → API Keys
3. Generate Test/Live keys
4. Copy:
   - Key ID → `NEXT_PUBLIC_RAZORPAY_KEY_ID`
   - Key Secret → `RAZORPAY_KEY_SECRET`

## Step 2: Create Database

1. Go to your Supabase project
2. Click on "SQL Editor" in the sidebar
3. Open the file `supabase-schema.sql` in this project
4. Copy ALL the SQL code
5. Paste it in the Supabase SQL Editor
6. Click "RUN" to create the tables

✅ Your database is now ready!

## Step 3: Run the Website

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Step 4: Test the Registration Flow

1. Click "Register to Participate in the Yajna"
2. Fill in the 4-step form
3. Test payment with Razorpay test cards:
   - Card: 4111 1111 1111 1111
   - Any future expiry date
   - Any CVV

## Customization Tips

### Change Event Details
Edit `components/HeroSection.tsx` - lines with Date, Time, Venue

### Change Colors
Edit `lib/design-tokens.ts` - modify the saffron and gold colors

### Adjust Dakshina Amounts
Edit `components/RegistrationForm.tsx` - Step 4 section (around line 400)

## Troubleshooting

**"Registration failed"**: Check your Supabase credentials in `.env.local`

**"Payment failed"**: Check your Razorpay credentials in `.env.local`

**Server won't start**: Run `npm install` again

## Need Help?

- Check the main README.md for detailed documentation
- Review the supabase-schema.sql file for database structure
- All components are in the `components/` folder

---

🙏 May your yajna registration website serve devotees well!
