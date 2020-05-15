export const statusMap = {
  DAI_TI_JIAO: '待提交',
  DAI_SHEN_HE: '待审核',
  SHEN_PI_TIONG_GUO: '审批通过',
  DAI_CE_SHI: '待测试',
  CE_SHI_TONG_GUO: '测试通过',
  SHEN_PI_BU_TONG_GUO: '审批不通过',
  CE_SHI_BU_TONG_GUO: '测试不通过',
  YI_FA_BU: '已发布',
  YI_XIA_XIAN: '已下线',
};

export const status2zh = (statusNum) => {
  switch (statusNum) {
    case 0:
      return statusMap.DAI_TI_JIAO;
    case 1:
      return statusMap.DAI_SHEN_HE;
    case 2:
      return statusMap.SHEN_PI_TIONG_GUO;
    case 3:
      return statusMap.DAI_CE_SHI;
    case 4:
      return statusMap.CE_SHI_TONG_GUO;
    case 5:
      return statusMap.SHEN_PI_BU_TONG_GUO;
    case 6:
      return statusMap.CE_SHI_BU_TONG_GUO;
    case 7:
      return statusMap.YI_FA_BU;
    case 8:
      return statusMap.YI_XIA_XIAN;
    default:
      return '';
  }
};

export default null;
