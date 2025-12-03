import type { componentDataList } from "./NavbarItems";
import { InputSkeleton } from "../input/InputSkeleton";
import { FormAdd } from "../form/FormAdd";

export const ComponentMap: Record<string, React.ReactNode> = {
    "form": <FormAdd />,
    "text": <InputSkeleton label="text" icon="fa-solid fa-text-width" />,
    "textarea": <InputSkeleton label="textarea" icon="fa-solid fa-text-width" />,
    "email": <InputSkeleton label="email" icon="fa-solid fa-envelope" />,
    "password": <InputSkeleton label="password" icon="fa-solid fa-lock" />,
    "number": <InputSkeleton label="number" icon="fa-solid fa-nums" />,
    "phone number": <InputSkeleton label="phone number" icon="fa-solid fa-phone" />,
}

export const NavBarItem = ({ components }: { components: componentDataList }) => {
    return (
        <div>
            <div className="bg-slate-200 dark:bg-dark-6 flex flex-col items-center w-full gap-2 p-2 mb-2 rounded-lg">
                {ComponentMap[components.name]}
            </div>
        </div>
    )
}
