import { redirect } from 'next/navigation';
import {createClient} from "@/utils/supabase/server";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const supabase = await createClient();
    const { data: { user }, error } = await supabase.auth.getUser();
      
    //if user is logged in
    // redirect to /admin
    if (user) {
        // console.log('Redirecting to /login');
        redirect('/admin');
    }

  return (
    <>
        {children}
    </>
  );
}