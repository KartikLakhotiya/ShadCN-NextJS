import { Button } from "@/components/ui/button"

function ChaiPage() {
  return (
      <main className="h-full flex justify-center items-center flex-col">
        <div>Hello Page</div>
        {/* <button className="px-6 py-4 bg-blue-500 rounded-lg hover:bg-blue-600 m-4 color text-black">Test Button</button> */}
        <Button variant={"chai"}>ShadCn Button</Button>
      </main>
  )
}

export default ChaiPage