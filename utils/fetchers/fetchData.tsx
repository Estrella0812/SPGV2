import { Careers } from "../entities/careers";
import { mapCareer } from "../mapper/careerMapper";
import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

export async function FetchCareerList(currentPage: number): Promise<Careers[]> {
    let query = supabase
    .from('career')
    .select('id, created_at, title, location, type')
    .order('created_at', {ascending: false})
    .range((currentPage - 1) * 10, currentPage * 10 - 1)
    .limit(10);
  
    const { data: posts, error } = await query;
  
    if (error) {
      return [];
    }
  
    const mappedCareers: Careers[] = posts.map((post: Careers) => mapCareer(post));

    return mappedCareers;
}

export async function FetchCareerRows(): Promise<number | null> {
  let query = supabase
    .from('career')
    .select('*', { count: 'exact', head: true });

  const { count, error } = await query;

  if (error) {
    return null;
  }

  return count ?? null;
}


export async function DetailedCareer(id: number): Promise<Careers | null> {
  let query = supabase
  .from('career')
  .select('id, created_at, title, location, type, description')
  .eq('id', id)
  .single()

  const { data: post, error } = await query;

  if (error) {
    return null;
  }

  const mappedCareers: Careers = mapCareer(post);

  return mappedCareers;
}

export async function FetchTester(): Promise<any> {
  let query = supabase
  .from('Tester')
  .select('text')
  .eq('id', 1)
  .single()

  const { data: post, error } = await query;

  if (error) {
    return null;
  }
  
  return post;
}

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