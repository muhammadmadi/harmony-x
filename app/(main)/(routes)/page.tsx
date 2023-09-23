
import { UserButton } from "@clerk/nextjs";



export default function Home() {
  return (
    <div>
      <UserButton afterSignOutUrl="/"/>     this is main page
    </div>

  )
}
