export function uuidV4() {
    let secretNumber = window.crypto.randomUUID()
    return 'sxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        const r = (parseInt(secretNumber) * 16) | 0,
            v = c == 'x' ? r : (r & 0x3) | 0x8
        return v.toString(16)
    })
}