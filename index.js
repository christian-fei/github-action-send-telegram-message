const core = require('@actions/core')
const github = require('@actions/github')
const { sendMessageFor } = require('simple-telegram-message')

main()
  .then(() => process.exit(0))
  .catch((err) => console.error(err) && process.exit(1))

async function main () {
  try {
    const message = core.getInput('message')
    console.log(`Sending message "${message}"`)

    console.log('TELEGRAM_TOKEN set', !!process.env.TELEGRAM_TOKEN)
    console.log('TELEGRAM_CHAT_ID set', !!process.env.TELEGRAM_CHAT_ID)
    console.log('TELEGRAM_CHANNEL set', !!process.env.TELEGRAM_CHANNEL)
    await sendMessageFor(process.env.TELEGRAM_TOKEN, process.env.TELEGRAM_CHAT_ID || process.env.TELEGRAM_CHANNEL)(message)

    // Get the JSON webhook payload for the event that triggered the workflow
    // const serializedPayload = JSON.stringify(github.context.payload, undefined, 2)
    // console.log(`The event payload: ${serializedPayload}`)
  } catch (error) {
    core.setFailed(error.message)
  }
}
