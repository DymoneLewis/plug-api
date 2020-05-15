<template>
  <div>
    <ApiCard
      :apiInfo="apiInfo"
      :isSmallCard="false"
    />
  </div>
</template>
<script>
import ApiCard from '@/components/ApiCard';

export default {
  name: 'ApiList',
  components: {
    ApiCard,
  },
  data() {
    return {
      apiInfo: {
        id: 1,
        title: 'Test1',
        intro: 'this is 1st test api',
        owner: [
          {
            username: 'DymoneLewis',
            email: '111@123.com',
          },
        ],
        rate: 5,
        comments: [],
        hits: 10,
        createTime: '2020-04-10',
      },
    };
  },
};
</script>
<style lang="less">
</style>
