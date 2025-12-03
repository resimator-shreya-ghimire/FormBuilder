import { Accordion } from "@mantine/core";
import { getComponentData } from "../../query/query";
import { NavBarItem } from "./NavBarItem";

export type componentDataList = {
    id: number;
    label: string;
    name: string;
}

export function NavbarItems({ label, id }: { label?: string, id?: number }) {
    if (!label || !id) return null;
    const { data } = getComponentData(id);

    return (
        <Accordion variant="subtle" className={`border bg-gray-50 border-gray-200 rounded-lg mb-2`} classNames={{
            chevron: "text-slate-600",
            control: "hover:bg-gray-50",
            panel: "pb-2",
        }}>
            <Accordion.Item value={label}>
                <Accordion.Control><span className='text-slate-600'>{label}</span></Accordion.Control>
                <Accordion.Panel>
                    {data?.list?.[label]?.map((item: componentDataList) => {
                        return <NavBarItem key={item?.id} components={item} />
                    })}
                </Accordion.Panel>
            </Accordion.Item>
        </Accordion>)
}