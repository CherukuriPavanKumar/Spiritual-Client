-- ============================================================================
-- Supabase Database Schema for Sahasra Chandi & Shiva Sahasranama Maha Yajna
-- ============================================================================
-- This schema supports registration WITHOUT payment processing
-- Users join WhatsApp groups after registration
-- 
-- Created: December 2024
-- Last Updated: December 25, 2025
-- ============================================================================

-- ============================================================================
-- EXTENSIONS
-- ============================================================================

-- Enable UUID extension for generating unique identifiers
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================================================
-- TABLES
-- ============================================================================

-- Main registrations table
CREATE TABLE public.registrations (
  -- Primary key and timestamps
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL,
  
  -- Devotee Information
  full_name VARCHAR(255) NOT NULL,
  gotra VARCHAR(100) NOT NULL,
  mobile VARCHAR(15) NOT NULL CHECK (mobile ~ '^\d{10,15}$'),
  email VARCHAR(255) NOT NULL CHECK (email ~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  
  -- Participation Details
  num_participants INTEGER NOT NULL CHECK (num_participants > 0 AND num_participants <= 100),
  participation_mode VARCHAR(20) NOT NULL CHECK (participation_mode IN ('in-person', 'online', 'seva')),
  yajna_options TEXT,
  
  -- Prasadam Details
  wants_prasadam BOOLEAN DEFAULT false NOT NULL,
  prasadam_address TEXT,
  
  -- Constraints
  CONSTRAINT prasadam_address_required CHECK (
    (wants_prasadam = false) OR 
    (wants_prasadam = true AND prasadam_address IS NOT NULL AND LENGTH(TRIM(prasadam_address)) > 10)
  )
);

-- ============================================================================
-- INDEXES
-- ============================================================================

-- Index for email lookups
CREATE INDEX idx_registrations_email ON public.registrations(email);

-- Index for mobile lookups
CREATE INDEX idx_registrations_mobile ON public.registrations(mobile);

-- Index for sorting by creation date (descending)
CREATE INDEX idx_registrations_created_at ON public.registrations(created_at DESC);

-- Index for filtering by participation mode
CREATE INDEX idx_registrations_participation_mode ON public.registrations(participation_mode);

-- Composite index for prasadam filtering
CREATE INDEX idx_registrations_prasadam ON public.registrations(wants_prasadam, participation_mode);

-- ============================================================================
-- FUNCTIONS
-- ============================================================================

-- Function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = TIMEZONE('utc', NOW());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================================================
-- TRIGGERS
-- ============================================================================

-- Trigger to auto-update updated_at on row updates
CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON public.registrations
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- ============================================================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================================================

-- Enable RLS on registrations table
ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anonymous users to insert (register)
CREATE POLICY "allow_public_registration" 
  ON public.registrations
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Policy: Allow anyone to read all registrations (for admin dashboard)
-- Note: Modify this policy if you want to restrict read access
CREATE POLICY "allow_read_all_registrations" 
  ON public.registrations
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Policy: Only authenticated users can update registrations
CREATE POLICY "allow_authenticated_update" 
  ON public.registrations
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Policy: Only authenticated users can delete registrations
CREATE POLICY "allow_authenticated_delete" 
  ON public.registrations
  FOR DELETE
  TO authenticated
  USING (true);

-- ============================================================================
-- VIEWS
-- ============================================================================

-- View: Daily registration summary statistics
CREATE OR REPLACE VIEW public.registration_summary AS
SELECT
  DATE_TRUNC('day', created_at) as registration_date,
  COUNT(*) as total_registrations,
  SUM(num_participants) as total_participants,
  COUNT(*) FILTER (WHERE participation_mode = 'in-person') as in_person_count,
  COUNT(*) FILTER (WHERE participation_mode = 'online') as online_count,
  COUNT(*) FILTER (WHERE participation_mode = 'seva') as seva_count,
  SUM(num_participants) FILTER (WHERE participation_mode = 'in-person') as in_person_participants,
  SUM(num_participants) FILTER (WHERE participation_mode = 'online') as online_participants,
  SUM(num_participants) FILTER (WHERE participation_mode = 'seva') as seva_participants,
  COUNT(*) FILTER (WHERE wants_prasadam = true) as prasadam_requests,
  COUNT(*) FILTER (WHERE wants_prasadam = true AND participation_mode = 'in-person') as in_person_prasadam,
  COUNT(*) FILTER (WHERE wants_prasadam = true AND participation_mode = 'online') as online_prasadam,
  COUNT(*) FILTER (WHERE wants_prasadam = true AND participation_mode = 'seva') as seva_prasadam
FROM public.registrations
GROUP BY DATE_TRUNC('day', created_at)
ORDER BY registration_date DESC;

-- View: Overall statistics
CREATE OR REPLACE VIEW public.registration_stats AS
SELECT
  COUNT(*) as total_registrations,
  SUM(num_participants) as total_participants,
  COUNT(*) FILTER (WHERE participation_mode = 'in-person') as total_in_person,
  COUNT(*) FILTER (WHERE participation_mode = 'online') as total_online,
  COUNT(*) FILTER (WHERE participation_mode = 'seva') as total_seva,
  SUM(num_participants) FILTER (WHERE participation_mode = 'in-person') as total_in_person_participants,
  SUM(num_participants) FILTER (WHERE participation_mode = 'online') as total_online_participants,
  SUM(num_participants) FILTER (WHERE participation_mode = 'seva') as total_seva_participants,
  COUNT(*) FILTER (WHERE wants_prasadam = true) as total_prasadam_requests,
  MIN(created_at) as first_registration,
  MAX(created_at) as latest_registration
FROM public.registrations;

-- ============================================================================
-- PERMISSIONS
-- ============================================================================

-- Grant schema usage
GRANT USAGE ON SCHEMA public TO anon, authenticated;

-- Grant table permissions
GRANT SELECT, INSERT ON public.registrations TO anon;
GRANT ALL ON public.registrations TO authenticated;

-- Grant view permissions
GRANT SELECT ON public.registration_summary TO anon, authenticated;
GRANT SELECT ON public.registration_stats TO anon, authenticated;

-- ============================================================================
-- COMMENTS
-- ============================================================================

COMMENT ON TABLE public.registrations IS 'Stores registration data for Sahasra Chandi & Shiva Sahasranama Maha Yajna';
COMMENT ON COLUMN public.registrations.id IS 'Unique registration identifier';
COMMENT ON COLUMN public.registrations.participation_mode IS 'Either in-person or online participation';
COMMENT ON COLUMN public.registrations.yajna_options IS 'Selected yajna participation options (both/sahasra-chandi/shiva-sahasranama)';
COMMENT ON COLUMN public.registrations.wants_prasadam IS 'Whether the devotee wants prasadam delivered';
COMMENT ON VIEW public.registration_summary IS 'Daily aggregated statistics of registrations';
COMMENT ON VIEW public.registration_stats IS 'Overall registration statistics';

-- ============================================================================
-- END OF SCHEMA
-- ============================================================================
