<template>
  <div>
    <Student :name="name" sex="女" :age="18"/>
  </div>
</template>

<script>
import Student from './components/Student'

export default {
  name: 'App',
  components: { Student },
  data () {
    return {
      name: '李四',
    }
  },
}
</script>
