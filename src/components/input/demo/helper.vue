<template>
  <y-input error error-message="校验失败，这是提示语句"></y-input>
  <y-input help-text="这是辅助文案，请在合适的位置使用"></y-input>
  <y-input><template v-slot:help>这是辅助文案，请在合适的位置使用</template></y-input>
  <y-input type="textarea" error error-message="校验失败，这是提示语句"></y-input>
  <y-input type="textarea" help-text="这是辅助文案，请在合适的位置使用"></y-input>
  <y-input type="textarea"><template v-slot:help>这是辅助文案，请在合适的位置使用</template></y-input>
</template>
