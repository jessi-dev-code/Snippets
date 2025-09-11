import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { Prisma } from "./_lib/prisma";

export const Addicon = ()=>{
  return(
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" height="32"><g id="SVGRepo_bgCarrier" stroke-width="#fff"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15" stroke="#fff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M7 3.33782C8.47#00000087 2.48697 1#000000.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 1#000000.1786 2.48697 8.47#00000087 3.33782 7" stroke="#fff" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>

  )

}
export default async function Home() {
  const snippets = await Prisma.snippet.findMany();
  return (
    <>
    <div className="flex justify-between items-center">
      <h1 className='font-medium text-2xl'>Snippets</h1>
      <Link href="/snippet/new">
      <Button color="primary" endContent={<Addicon />}>New</Button>
      </Link>
      </div>
      <div className="flex flex-col mt-20 flex-wrap gap-4 dark:bg-zinc-900 p-10 rounded-3xl inset-5 shadow">
              {
        snippets.map((snippet) =>(
          <>
          <div className="p-4  rounded-2xl dark:bg-zinc-800 bg-zinc-50  flex justify-between items-center " >
          <h1>{snippet.title}</h1>
          <Link href={`/snippet/new/${snippet.id}`}>
          <Button className="bg-zinc-200 shadow-2xs dark:bg-zinc-950 dark:text-zinc-50" variant="flat">View</Button>
          </Link>
          </div>
          </>
        ))
      }
      </div>


    </>
  );
}


//csr - Client side rendering --> acts like normal react component
//ssr - Server side rendering --> here we can also execute the server side code