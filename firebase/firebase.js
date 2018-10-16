import * as firebase from 'firebase'

import { config } from './firebase-conf.js'

firebase.initializeApp(config)

firebase.database.enableLogging(false);
const database = firebase.database()

export { firebase, database }