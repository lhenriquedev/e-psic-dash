import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ijcwnhhprowvrmzsphhl.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlqY3duaGhwcm93dnJtenNwaGhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI4MjUyOTgsImV4cCI6MjAwODQwMTI5OH0.iAYGA6i7_OhHApHB2MQIr8c7Ejrl-hKazIQ_ijLGNHE'

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
