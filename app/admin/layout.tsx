import { redirect } from 'next/navigation';
import {createClient} from "@/utils/supabase/server";

export default async function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {

  const supabase = await createClient();
  const { data: { user }, error } = await supabase.auth.getUser();
    
  if (error || !user) {
      // console.log('Redirecting to /login');
      redirect('/login');
  }

  return (
    <>
      {children}
    </>
  );
}