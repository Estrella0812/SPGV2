'use server'

import { createClient } from '@/utils/supabase/server'
import { Careers } from "@/utils/entities/careers";
import { redirect } from 'next/navigation';

export const createPost = async (formData: FormData) => {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login');
  }

  const currentuserEmail = user.email
  const title = formData.get('title') as string;
  const location = formData.get('location') as string;
  const type = formData.get('type') as string;
  const description = formData.get('description') as string;
  
  const careerPost: Omit<Careers, 'id' | 'created_at'> = {
    title,
    location,
    type,
    creator: currentuserEmail,
    description
  }

  // Insert the new career post into the database
  try {
    const { data, error } = await supabase.from('career').insert([careerPost]).select("id").single();

    if (error){
      return { 
        success: false, 
        message: "Error creating career: " + error.message
      }
    }else{
      return { 
        success: true, 
        message: "Career created successfully!",
        id: data.id
      }
    }
  } catch (error) {
    return {
      success: false,
      message: "Error creating career: " + (error instanceof Error ? error.message : 'Unknown error'),
    }
  }

};
