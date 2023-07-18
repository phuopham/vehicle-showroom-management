import { MainNav } from "@/components/main-nav"
import { redirect } from "next/navigation"

export const Navbar = async () => {

    return (
        <div className="border-b">
            <div className="flex h-16 items-center px-4">
                Store
                <MainNav className="mx-6" />
                <div className="ml-auto flex items-center space-x-4">
                    Signin Button
                </div>
            </div>
        </div>
    )
}
