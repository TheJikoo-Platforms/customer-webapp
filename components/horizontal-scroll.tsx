import { cn } from "@/lib/utils"

export const HorizontalScroll = ({children, className}:{children:React.ReactNode, className?:string}) => {
    return <div className={cn('max-lg:w-screen max-lg:-translate-x-4 max-lg:px-4 overflow-x-auto scrollbar-none horizontal-scroll ', className)}>  
        {children}
    </div>
}