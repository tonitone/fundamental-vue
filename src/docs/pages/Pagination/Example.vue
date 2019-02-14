<title>Default MultiInput</title>
  <template>
    <div>
      <h2>{{ $t('message.language') }}</h2>
      <h2>{{ $t('message.hello') }}</h2>
      <h2>{{initialPage}}</h2>
      <FdPagination :itemsTotal=101 totalText="Dalmations" :initialPage.sync="initialPage"/>
    </div>
  </template>

<script>
export default {
  data() {
    return {
      initialPage: 1,
    }
  },
};
</script>
