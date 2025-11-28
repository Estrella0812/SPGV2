'use server'
import { createClient } from '@/utils/supabase/server'

export async function deleteRow(id: number): Promise<string | null> {
  const supabase = await createClient()

  const { error } = await supabase.from('career').delete().eq('id', id)

  if (error) {
    
    console.log(error.message);
    return error.message
  }
  
  return null
}
