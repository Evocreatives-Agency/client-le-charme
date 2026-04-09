export default {
  name: 'menuItem', title: 'Menu Item', type: 'document',
  fields: [
    { name: 'name', title: 'Dish Name', type: 'string', validation: (R: any) => R.required() },
    { name: 'description', title: 'Description', type: 'text', rows: 2 },
    { name: 'price', title: 'Price (e.g. $28)', type: 'string' },
    { name: 'category', title: 'Category', type: 'string', options: { list: [
      { title: 'Shareables', value: 'shareables' }, { title: 'Mains', value: 'mains' },
      { title: 'Desserts', value: 'desserts' }, { title: 'Brunch', value: 'brunch' },
      { title: 'À Boire (Drinks)', value: 'drinks' },
    ]}},
    { name: 'available', title: 'Currently Available', type: 'boolean', initialValue: true },
    { name: 'order', title: 'Display Order', type: 'number' },
  ],
  preview: { select: { title: 'name', subtitle: 'category' } },
}
