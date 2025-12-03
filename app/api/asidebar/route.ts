import { NextResponse } from "next/server";

const navigationbardata = [
  { id: 1, label: 'Build blocks', icon: 'fa-solid fa-cubes', list: ['Forms', 'Image'] },
  { id: 2, label: 'Form Fields', icon: 'fa-solid fa-list', list: ['Input', 'Dropdown', 'Date and Time', 'Checkbox', 'Radio', 'Range Slider'] },
  { id: 3, label: 'Text Field', icon: 'fa-solid fa-text-width', list: ['Heading', 'Paragraph', 'Span', 'Label'] },
  { id: 4, label: 'Table', icon: 'fa-solid fa-table-cells', list: ['Row', 'Col'] },
  { id: 5, label: 'Background', icon: 'fa-solid fa-fill', list: ['Color', 'Gradient', 'Pattern', 'Image'] }
]

export async function GET() {
        return NextResponse.json(navigationbardata);
}


