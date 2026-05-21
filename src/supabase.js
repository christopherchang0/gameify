import { createClient } from '@supabase/supabase-js'

// Initialize the client
const supabaseurl = import.meta.env.supabaseurl;
const supabasekey = import.meta.env.frontendsupabase;
export const supabase = createClient (supabaseurl, supabasekey)

