// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// Replace with your Supabase project URL and API key
const supabaseUrl = 'https://vovsgwrtnbpncoaxkhcp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZvdnNnd3J0bmJwbmNvYXhraGNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ2NjQ0NDksImV4cCI6MjA0MDI0MDQ0OX0.-ZH44hrbTJPDqGpWyVo4zrSM6OlKvDm8DnQku7ndpxk';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
