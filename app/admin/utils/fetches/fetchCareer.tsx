'use server'
import {createClient} from '@/utils/supabase/server';
import {Careers} from '@/utils/entities/careers';
import {mapCareer} from '@/utils/mapper/careerMapper';
import Link from "next/link";

interface findByID{
    id: number;
}
export async function FetchDetailedCareers({ id }: findByID): Promise<Careers | null> {
    const supabase = await createClient();
    const query = supabase
      .from('career')
      .select('id, created_at, title, location, type, description')
      .eq('id', id)
      .single(); // Ensures only one row is fetched
  
    const { data: post, error } = await query;
  
    if (error) {
      console.error(`Error fetching career: ${error.message}`);
      return null;
    }
  
    if (post) {
      // Map the career data
      const mappedCareer: Careers = mapCareer(post);
      return mappedCareer; // Return the mapped career
    }
  
    return null; // Handle case where no career is found
}

