// Classes run Monday to Friday and on weekends, online and interactive.
// Weekday times come from the programmes flyer (morning and evening exist on every course). Confirm with the client.
export const SCHEDULE = {
  summary: 'Monday to Friday and weekends',
  mode: 'Online & interactive',
  slots: [
    { id: 'wk-morning', days: 'Monday \u2013 Friday', label: 'Morning class', time: '10:00 am' },
    { id: 'wk-evening', days: 'Monday \u2013 Friday', label: 'Evening class', time: '3:30 pm' },
    { id: 'we-afternoon', days: 'Weekends', label: 'Afternoon class', time: '2:00 pm' },
    { id: 'we-evening', days: 'Weekends', label: 'Evening class', time: '7:00 pm' },
  ],
}
const DAYS = [...new Set(SCHEDULE.slots.map((s) => s.days))]
export const SCHEDULE_GROUPS = DAYS.map((d) => ({ days: d, slots: SCHEDULE.slots.filter((s) => s.days === d) }))
export const slotText = (s) => `${s.label.replace(' class', '')} ${s.time}`

// Bank transfer details copied from the programmes flyer. Check them before going live.
export const PAYMENT = {
  accounts: [
    { bank: 'Moniepoint MFB', number: '4000148329', name: 'COMPUTER COLLEGE PLUS' },
    { bank: 'First Bank', number: '2046138396', name: 'COMPUTER COLLEGE PLUS' },
  ],
}

// Google Apps Script web app URL (registrations are saved to your Google Sheet).
export const SHEET_URL = 'https://script.google.com/macros/s/AKfycbz2J8VRZC25zOhKHLPscG-dPBeTdZo5MmwfRFgGqdLlklb1bu2k0hqmavoU0x9B9o1TFg/exec'