import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { AuthCard } from "@/components/auth-card";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

export default async function Signup() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) redirect("/app");

  return (
    <div className='relative isolate overflow-hidden'>
      <svg
        className='absolute inset-0 -z-10 h-full w-full stroke-slate-800 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]'
        aria-hidden='true'
      >
        <defs>
          <pattern
            id='0787a7c5-978c-4f66-83c7-11c213f99cb7'
            width='200'
            height='200'
            x='50%'
            y='-1'
            patternUnits='userSpaceOnUse'
          >
            <path d='M.5 200V.5H200' fill='none'></path>
          </pattern>
        </defs>
        <rect
          width='100%'
          height='100%'
          strokeWidth='0'
          fill='url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)'
        ></rect>
      </svg>

      <div className='max-w-7xl min-h-screen mx-auto px-6 flex h-screen w-screen justify-center'>
        <main className="animate-fade-up animate-duration-2000 animate-ease-in-out">
          <Link href='/'>
            <Button variant='ghost' className='mt-[calc(20vh)] h-fit'>
              <ArrowLeftIcon className='mr-3' />
              Home
            </Button>
          </Link>

          <AuthCard type='signup' />
        </main>
      </div>
    </div>
  );
}
