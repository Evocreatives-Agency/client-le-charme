export default {
  name: 'siteSettings', title: 'Site Settings', type: 'document',
  fields: [
    { name: 'phone', title: 'Phone Number', type: 'string' },
    { name: 'address', title: 'Address', type: 'string' },
    { name: 'instagram', title: 'Instagram Handle', type: 'string' },
    { name: 'opentableUrl', title: 'OpenTable Booking URL', type: 'url' },
    { name: 'hours', title: 'Opening Hours', type: 'array', of: [{ type: 'object', fields: [
      { name: 'day', title: 'Day(s)', type: 'string' },
      { name: 'hours', title: 'Hours', type: 'string' },
      { name: 'closed', title: 'Closed', type: 'boolean', initialValue: false },
    ]}]},
    { name: 'heroTagline', title: 'Hero Tagline', type: 'string' },
    { name: 'aboutText', title: 'About Text', type: 'array', of: [{ type: 'block' }] },
  ],
}
