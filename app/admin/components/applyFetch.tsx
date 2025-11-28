import { createClient } from "@/utils/supabase/client";

interface applyFetch{
    id: number,
    apply_enabled: boolean;
}

export async function applyFetch(): Promise<applyFetch | null> {
    const supabase = await createClient();
    const query = supabase
      .from('site_settings')
      .select('id, apply_enabled')
      .eq('name', "apply_btn")
      .single(); // Ensures only one row is fetched
  
    const { data: post, error } = await query;
  
    if (error) {
      console.error(`Error fetching site settings`);
      return null;
    }
  
    return post;
}

export async function toggleApplyStatus(current: boolean): Promise<boolean | null> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("site_settings")
    .update({ apply_enabled: !current })
    .eq("name", "apply_btn")
    .select("apply_enabled")
    .single();

  if (error) {
    console.error("Error updating apply button status:");
    return null;
  }

  return data.apply_enabled;
}