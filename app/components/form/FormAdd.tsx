import { Button, Input } from '@mantine/core';
export const FormAdd = () => {
    return (
        <div className="flex flex-col gap-2 w-full h-full items-center justify-center">
            <Input placeholder="Form Name" className="w-full" />
            <Input placeholder="Form Description" className="w-full" />
            <Input placeholder="No of Fields" className="w-full" />
            <Button className="w-full">Add New Form</Button>
        </div>
    )
}
