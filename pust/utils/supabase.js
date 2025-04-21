import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

// Replace with your Supabase project details
const supabaseUrl = process.env.SUPABASE_URL; // Your Supabase URL
const supabaseKey = process.env.SUPABASE_ANON_KEY; // Use the public anon key (never use the service role key on the frontend)

export const supabase = createClient(supabaseUrl, supabaseKey);