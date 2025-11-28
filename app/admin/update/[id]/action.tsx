'use server'

import { Careers } from "@/utils/entities/careers";
import { createClient } from '@/utils/supabase/server';
import { redirect } from "next/navigation";

export const updatePost = async (career: Careers) => {
  const supabase = await createClient();

  // 이거 이만큼 page.tsx에서 불러오기 하자 아니 근데 방금 뭐임? ;;
    const { data: { user }, error } = await supabase.auth.getUser();
    if (user) {
      career.updated_by = user.email;
    }
  
    if (error||!user) {
      console.log(error);
      redirect('/login');
    }else{
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
};

