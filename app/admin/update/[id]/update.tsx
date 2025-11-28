'use server'
import { createClient } from '@/utils/supabase/server';
import {Careers} from '@/utils/entities/careers';

interface findByID{
    id: number;
}

const updateCareer = async (career: Careers) => {
    const supabase = await createClient();
    const { data, error } = await supabase
        .from('career')
        .update({title: career.title, location: career.location, description: career.description, updated_at: career.updated_at, updated_by: career.updated_by})
        .eq('id', career.id)
        .select();

    if (error) {
        return { message: `Unable to update due to following reasons: ${error.message}`, success: false };
    } else {
        return { message: `Successfully Updated "${career.title}"`, success: true };
    }
}
export default updateCareer;
