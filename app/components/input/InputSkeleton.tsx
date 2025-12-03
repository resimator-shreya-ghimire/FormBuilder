import { Input } from '@mantine/core';

export const InputSkeleton = ({ label, icon }: { label: string, icon: string }) => {
    return (
        <Input type={label} placeholder={label} leftSection={<i className={icon}></i>} />
    )
}
