-- Supabase SQL Schema for Yajna Registration System

-- Create registrations table
CREATE TABLE IF NOT EXISTS registrations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  
  -- Step 1: Devotee Details
  full_name TEXT NOT NULL,
  gotra TEXT NOT NULL,
  mobile TEXT NOT NULL,
  email TEXT NOT NULL,
  
  -- Step 2: Participation Details
  num_participants INTEGER NOT NULL DEFAULT 1,
  participation_mode TEXT NOT NULL CHECK (participation_mode IN ('in-person', 'online')),
  yajna_options TEXT,
  
  -- Step 3: Prasadam Details
  wants_prasadam BOOLEAN NOT NULL DEFAULT false,
  prasadam_address TEXT,
  
  -- Metadata
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX idx_registrations_email ON registrations(email);
CREATE INDEX idx_registrations_mobile ON registrations(mobile);
CREATE INDEX idx_registrations_payment_status ON registrations(payment_status);
CREATE INDEX idx_registrations_created_at ON registrations(created_at DESC);

-- Enable Row Level Security
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from anyone (for public registration)
CREATE POLICY "Allow public insert" ON registrations
  FOR INSERT
  WITH CHECK (true);

-- Create policy to allow users to view their own registrations
CREATE POLICY "Allow users to view own registrations" ON registrations
  FOR SELECT
  USING (true); -- Adjust based on your auth requirements

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_registrations_updated_at
  BEFORE UPDATE ON registrations
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Optional: Create a view for admin dashboard
CREATE OR REPLACE VIEW registration_summary AS
SELECT 
  DATE(created_at) as registration_date,
  COUNT(*) as total_registrations,
  SUM(num_participants) as total_participants,
  SUM(CASE WHEN participation_mode = 'in-person' THEN 1 ELSE 0 END) as in_person_count,
  SUM(CASE WHEN participation_mode = 'online' THEN 1 ELSE 0 END) as online_count,
  SUM(CASE WHEN wants_prasadam THEN 1 ELSE 0 END) as prasadam_requests
FROM registrations
GROUP BY DATE(created_at)
ORDER BY registration_date DESC;
