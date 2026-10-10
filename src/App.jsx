import React from 'react'
// 引入 ChatUI 组件与样式
import Chat, { Bubble, useMessages } from '@chatui/core'
import '@chatui/core/dist/index.css'

const App = () => {
  const { messages, appendMsg, setTyping } = useMessages([])

  function handleSend(type, val) {
    if (type === 'text' && val.trim()) {
      // 用户消息（右侧）
      appendMsg({
        type: 'text',
        content: { text: val },
        position: 'right',
      })

      // 模拟机器人「正在输入」
      setTyping(true)

      setTimeout(() => {
        // 机器人回复（左侧）
        appendMsg({
          type: 'text',
          content: { text: '收到～我是一个基于 ChatUI 搭建的智能助理示例。' },
        })
        setTyping(false)
      }, 1000)
    }
  }

  function renderMessageContent(msg) {
    const { content } = msg
    return <Bubble content={content.text} />
  }

  return (
    <Chat
      navbar={{ title: '智能助理' }}
      messages={messages}
      renderMessageContent={renderMessageContent}
      onSend={handleSend}
    />
  )
}

export default App
