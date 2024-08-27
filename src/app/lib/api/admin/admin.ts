import adminApiClient from './adminClient';

export const checkAdmin = async () => {
  try {
    const res = await adminApiClient.get('/check_admin');
    return res.status;
  } catch (error) {
    console.error('管理者データ取得時にエラーが発生しました', error);
    return null;
  }
};
