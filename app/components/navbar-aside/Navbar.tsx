import { NavbarItems } from './NavbarItems';

export function Navbar({ list, id }: { list?: string[], id?: number }) {
    if (!list) return null;

    return (
        <div className={"flex-1 gap-10 bg-slate-600 dark:bg-dark-6 w-150 py-4 px-4 text-white"}>
            {list.map((link) => (
                <NavbarItems key={id} label={link} id={id} />
            ))}
        </div>

    );
}