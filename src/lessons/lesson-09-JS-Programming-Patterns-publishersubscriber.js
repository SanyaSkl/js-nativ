// subscriber === handler === listener === watcher === observer - Паттерн "наблюдатель"

// front:
// store.subscribe( function subscriber() {} ) // стор изменился
// button. addEventListener( 'click', function subscriber() {}) // кнопка нажата
// promise.then(function subscriber() {}) // промис зарезолвился

// back
// app.get('users', function subscriber() {}) // роут был вызван
// fs.watch('test.txt', function subscriber() {}) // файл был изменен
// websocket.on('message', function subscriber() {}) //сообщение было получено

// const button = {
//     _subscribers: {
//         click: [],
//         focus: []
//     },
//
//     click() {
//         this._subscribers['click'].forEach(s => s())
//     },
//
//     focus() {
//         this._subscribers['focus'].forEach(s => s())
//     },
//
//     addEventListener(eventName, subscriber) {
//         if (this._subscribers[eventName]){
//             this._subscribers[eventName].push(subscriber)
//         }
//     },
//
//     removeEventListener(eventName, subscriber) {
//         this._subscribers[eventName].filter(s => s !== subscriber)
//     }
// }
//
// const handler = () => {
//
// }
//
// button. addEventListener( 'click', handler)
// button. removeEventListener( 'click', handler)
//
// button.click()
// button.focus()
//
// class Publisher {
//     subscribers = {}
//     subscribe(eventName, subscriber) {
//         if(!this.subscribers[eventName]) {
//             this.subscribers[eventName] = []
//         }
//         this.subscribers[eventName].push(subscriber)
//     }
//     unsubscribe(eventName, subscriber) {
//         if(!this.subscribers[eventName]) return
//             this.subscribers[eventName] = this.subscribers[eventName].filter(sub => sub !== subscriber)
//     }
//     publish(eventName, data) {
//         if(!this.subscribers[eventName]) return
//         this.subscribers[eventName].forEach(subscriber => subscriber(data))
//     }
// }
//
// const publisher = new Publisher()
//
// function sendEmail(user) {
//     console.log(`Отправляем email для пользователя: ${user.name}`)
// }
// function saveToDatabase(user) {
//     console.log(`Отправляем пользователя в базу данных: ${user.name}`)
// }
// function sendSms(user) {
//     console.log(`Отправляем пользователя в базу данных: ${user.name}`)
// }
// function addMoney(user) {
//     console.log(`Отправляем пользователя в базу данных: ${user.name}`)
// }
//
// publisher.subscribe('UserCreated', sendEmail)
// publisher.subscribe('UserCreated', saveToDatabase)
// publisher.subscribe('UserCreated', sendSms)
// publisher.subscribe('UserCreated', addMoney)
//
// function createUser(name) {
//     const user = {name}
//     console.log('Пользователь создан!')
//     publisher.publish('UserCreated', user)
// }
//
// app.post('users', createUser)