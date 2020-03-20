FROM node:12

COPY ./ /action

ENTRYPOINT ["/entrypoint.sh"]

LABEL "com.github.actions.name"="send-telegram-message"
LABEL "com.github.actions.description"="Send a Telegram message in a GitHub Action"
LABEL "com.github.actions.icon"="book-open"
LABEL "com.github.actions.color"="blue"
LABEL "repository"="https://github.com/christian-fei/github-action-send-telegram-message"
LABEL "homepage"="https://github.com/christian-fei/github-action-send-telegram-message"
LABEL "maintainer"="https://github.com/christian-fei"
