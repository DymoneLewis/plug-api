export const stepFormMap = {
  createPermission: [
    {
      key: 'username',
      type: 'text',
      label: '用户名',
    },
    {
      key: 'role',
      type: 'option',
      label: '权限点',
      option: [
        {
          key: 'audio',
          value: 1,
          label: '审核',
        },
        {
          key: 'test',
          value: 2,
          label: '测试',
        },
      ],
    },
  ],
  submitPermission: [],
  apiBaiscInfo: [
    {
      key: 'title',
      type: 'text',
      label: 'API名',
    },
    {
      key: 'path',
      type: 'url',
      label: '服务地址',
    },
    {
      key: 'owner',
      type: 'text',
      label: '开发者',
    },
    {
      key: 'intro',
      type: 'textarea',
      label: '简介',
    },
  ],
  apiAttributes: [
    {
      key: 'method',
      type: 'option',
      label: '请求方法',
      option: [
        {
          key: 'get',
          value: 'get',
          label: 'GET',
        },
        {
          key: 'post',
          value: 'post',
          label: 'POST',
        },
        {
          key: 'head',
          value: 'head',
          label: 'HEAD',
        },
        {
          key: 'put',
          value: 'put',
          label: 'PUT',
        },
        {
          key: 'delete',
          value: 'delete',
          label: 'DELETE',
        },
        {
          key: 'connect',
          value: 'connect',
          label: 'CONNECT',
        },
        {
          key: 'options',
          value: 'options',
          label: 'OPTIONS',
        },
        {
          key: 'trace',
          value: 'trace',
          label: 'TRACE',
        },
        {
          key: 'patch',
          value: 'patch',
          label: 'PATCH',
        },
      ],
    },
    {
      key: 'Content-Type',
      type: 'text',
      label: 'Content-Type',
    },
    {
      key: 'params',
      type: 'table',
      label: 'params',
    },
  ],
  apiExample: [
    {
      key: 'example',
      type: 'textarea',
      label: '示例入参',
    },
    {
      key: 'output',
      type: 'textarea',
      label: '示例返回值',
    },
  ],
  apiSubmit: [],
};
// "title": "Swagger Sample App",
// "description": "This is a sample server Petstore server.",
// "termsOfService": "http://swagger.io/terms/",
// "contact": {
//   "name": "API Support",
//   "url": "http://www.swagger.io/support",
//   "email": "support@swagger.io"
// },
// "license": {
//   "name": "Apache 2.0",
//   "url": "http://www.apache.org/licenses/LICENSE-2.0.html"
// },
// "version": "1.0.1"
export default null;
