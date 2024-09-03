
import { ModeToggle } from "./modeToggle"

export const description =
    "An orders dashboard with a sidebar navigation. The sidebar has icon navigation. The content area has a breadcrumb and search in the header. The main area has a list of recent orders with a filter and export button. The main area also has a detailed view of a single order with order details, shipping information, billing information, customer information, and payment information."

export function Header() {
    return (
        <header className="sticky mb-8 top-0 z-30 flex h-14 items-center gap-4 border-b  bg-background px-4 py-2 sm:static sm:h-auto  sm:px-6 max-w-[1800px] mx-auto">
            <div className="relative ml-auto flex-1 grow-0">
                <ModeToggle />
            </div>

        </header>

    )
}
