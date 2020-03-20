const core = require('@actions/core')
const github = require('@actions/github')

try {
  const message = core.getInput('message')
  console.log(`Sending message "${message}"`)

  // Get the JSON webhook payload for the event that triggered the workflow
  const serializedPayload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${serializedPayload}`)
} catch (error) {
  core.setFailed(error.message)
}
