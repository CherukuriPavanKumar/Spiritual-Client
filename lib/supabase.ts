import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type RegistrationData = {
  id?: string;
  full_name: string;
  gotra: string;
  mobile: string;
  email: string;
  num_participants: number;
  participation_mode: 'in-person' | 'online';
  yajna_options?: string;
  wants_prasadam: boolean;
  prasadam_address?: string;
  contribution_amount: number;
  payment_id?: string;
  payment_status?: 'pending' | 'success' | 'failed';
  created_at?: string;
};
