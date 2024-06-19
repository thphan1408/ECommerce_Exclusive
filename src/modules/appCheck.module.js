import {
  initializeAppCheck,
  ReCaptchaEnterpriseProvider,
} from 'firebase/app-check'
import { app } from '../configs/firebase.config.js'

const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaEnterpriseProvider(process.env.RECAPTCHA_SITE_KEY),
  isTokenAutoRefreshEnabled: true, // set to true allow auto-refresh
})

export { appCheck }
