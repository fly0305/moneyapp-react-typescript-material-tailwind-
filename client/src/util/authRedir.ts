const ITEM_NAME = 'afterAuthRedir';

const set = (path: string) => {
  localStorage.setItem(ITEM_NAME, path);
};

const get = () => {
  const val = localStorage.getItem(ITEM_NAME);
  localStorage.removeItem(ITEM_NAME);
  return val ? val : undefined;
};

const authRedir = {
  set,
  get
};

export default authRedir;