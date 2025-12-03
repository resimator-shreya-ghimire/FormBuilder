import { Title, Tooltip, UnstyledButton } from '@mantine/core';
import type { navigationbardata } from '../../query/query';

export const ToolBar = ({ active, setActive, data }: { active: string, setActive: (label: string) => void, data: navigationbardata[] }) => {
    return (
        <div className={"flex flex-col justify-between w-[60px] bg-body dark:bg-body flex flex-col items-center border-r border-gray-300 dark:border-dark-7 py-4"}>
            <div>
                {data?.map((link: navigationbardata) => (
                    <Tooltip label={link.label} position="right" withArrow transitionProps={{ duration: 0 }} key={link.label}>
                        <UnstyledButton onClick={() => setActive(link?.label)} className={`w-11 h-11 rounded-md flex items-center justify-center text-gray-700 dark:text-dark-0 hover:bg-gray-50 dark:hover:bg-dark-5  data-[active=true]:bg-blue-100 data-[active=true]:text-blue-600  data-[active=true]:hover:bg-blue-100`}
                            data-active={link.label === active || undefined}
                        >
                            <i className={`${link.icon} text-xl text-slate-700`}></i>
                        </UnstyledButton>
                    </Tooltip>
                ))}
            </div>
            {active && <Tooltip label={'minimize'} position="right" withArrow transitionProps={{ duration: 0 }} key={'minimize'}>
                <UnstyledButton onClick={() => setActive('')} className={`w-11 h-11 rounded-md flex items-center justify-center text-gray-700 dark:text-dark-0 hover:bg-gray-50 dark:hover:bg-dark-5  data-[active=true]:bg-blue-100 data-[active=true]:text-blue-600  data-[active=true]:hover:bg-blue-100`}
                    data-active={'minimize' === active || undefined}
                >
                    <i className={`fa-solid fa-arrow-left text-xl text-slate-700`}></i>
                </UnstyledButton>
            </Tooltip>
            }

        </div>

    )
}
