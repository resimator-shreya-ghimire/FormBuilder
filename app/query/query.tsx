import { useQuery } from '@tanstack/react-query'

export type navigationbardata = {
  id: number,
  label: string,
  icon: string,
  list: string[];
}

const fetchAsideBarData = async () => {
  return fetch('/api/asidebar').then(res => res.json() as Promise<navigationbardata[]>)
}

const fetchComponentData = async (id: number) => {
  return fetch(`/api/asidebar-component?id=${id}`).then(res => res.json() as Promise<any>)
}

export const getAsideData = () => {
  return useQuery({
    queryKey: ['asidebar'],
    queryFn: fetchAsideBarData,
  });
}

export const getComponentData = (id: number) => {
  return useQuery({
    queryKey: ['asidebar-component', id],
    queryFn: () => fetchComponentData(id),
  });
}
