import { Button } from "@heroui/button";

 
export default function NotFound() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-[50vh]">
      <h2 className="text-5xl font-bold">Not Found</h2>
      <p className="text-[12px]">Could not find requested resource</p>
      <Button isLoading></Button>
    </div>
  )
}